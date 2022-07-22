import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import PropTypes from 'prop-types'

// components
import Input from '../../common/Input/Input'
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { getToday } from '../../utils/utilFunctions'
import {
  ADD_BUTTON_TEXT,
  SURNAME_ERROR_TEXT,
  ROOM_ERROR_TEXT,
  DATE_ERROR_TEXT,
  ADD_BOOKING_SUCCESS_TEXT,
} from '../../utils/constants'

// redux
import { selectRooms } from '../../store/rooms/selectors'
import { addBooking } from '../../store/bookings/actionCreators'

const AddBookingForm = ({ setAlertMsg }) => {
  // states
  const [bookingData, setBookingData] = useState({ surname: '', room: '', date: '' })
  const rooms = useSelector(selectRooms)
  const dispatch = useDispatch()

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData((prevState) => ({ ...prevState, [name]: value }))
  }

  const validateBookingsData = () => {
    const { surname, room, date } = bookingData

    const isSurnameValid = surname.trim().length > 3
    if (!isSurnameValid) {
      setAlertMsg(SURNAME_ERROR_TEXT)
      return false
    }

    const isRoomSelected = room.length
    if (!isRoomSelected) {
      setAlertMsg(ROOM_ERROR_TEXT)
      return false
    }

    const isDateSelected = date.length
    if (!isDateSelected) {
      setAlertMsg(DATE_ERROR_TEXT)
      return false
    }

    return true
  }

  const handleAddBooking = (e) => {
    e.preventDefault()
    const isBookingDataValid = validateBookingsData()

    if (isBookingDataValid) {
      dispatch(addBooking(bookingData))
      setAlertMsg(ADD_BOOKING_SUCCESS_TEXT)
      setBookingData({ surname: '', room: '', date: '' })
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
      <DatePicker id='date' label='Date' onChange={handleInputChange} min={getToday()} />
      <Button title={ADD_BUTTON_TEXT} onClick={handleAddBooking} />
    </form>
  )
}

AddBookingForm.propTypes = {
  setAlertMsg: PropTypes.func.isRequired,
}

export default AddBookingForm
