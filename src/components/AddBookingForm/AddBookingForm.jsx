import React, { useState, useEffect } from 'react'

// components
import Input from '../../common/Input/Input'
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { getToday } from '../../utils/utilFunctions'
import { ADD_BUTTON_TEXT } from '../../utils/constants'

const AddBookingForm = () => {
  // states
  const [bookingData, setBookingData] = useState({ surname: '', room: '', date: '' })
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch('./rooms.json')
      .then((data) => data.json())
      .then((result) => setRooms(() => result))
  }, [])

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleAddBooking = (e) => {
    e.preventDefault()
    console.log(bookingData)
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

export default AddBookingForm
