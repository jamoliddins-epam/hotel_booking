import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import PropTypes from 'prop-types'

// components
import Input from '../../common/Input/Input'
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { getToday, validateBookingsData } from '../../utils/utilFunctions'
import { ADD_BUTTON_TEXT, ADD_BOOKING_SUCCESS_TEXT } from '../../utils/constants'

// redux
import { selectRooms } from '../../store/rooms/selectors'
import { selectBookings } from '../../store/bookings/selectors'
import { addBooking } from '../../store/bookings/actionCreators'

const AddBookingForm = ({ setAlertMsg }) => {
  // states
  const [bookingData, setBookingData] = useState({ surname: '', room: '101', date: '' })
  const rooms = useSelector(selectRooms)
  const bookings = useSelector(selectBookings)
  const dispatch = useDispatch()

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleAddBooking = (e) => {
    e.preventDefault()
    const isBookingDataValid = validateBookingsData(bookingData, bookings, setAlertMsg)

    if (isBookingDataValid) {
      dispatch(addBooking(bookingData))
      setAlertMsg(ADD_BOOKING_SUCCESS_TEXT)
      setBookingData({ surname: '', room: '101', date: '' })
    }
  }

  return (
    <form>
      <Input
        id='surname'
        label='Surname'
        value={bookingData.surname}
        placeholder='Surname'
        onChange={handleInputChange}
      />
      <Select id='room' label='Room' value={bookingData.room} onChange={handleInputChange} options={rooms} />
      <DatePicker id='date' label='Date' value={bookingData.date} onChange={handleInputChange} min={getToday()} />
      <Button title={ADD_BUTTON_TEXT} onClick={handleAddBooking} />
    </form>
  )
}

AddBookingForm.propTypes = {
  setAlertMsg: PropTypes.func.isRequired,
}

export default AddBookingForm
