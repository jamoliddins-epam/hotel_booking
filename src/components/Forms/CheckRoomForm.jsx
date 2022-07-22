import React, { useState, useEffect } from 'react'

// components
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { getToday } from '../../utils/utilFunctions'
import { CHECK_BUTTON_TEXT } from '../../utils/constants'

const CheckRoomForm = () => {
  // states
  const [bookingData, setBookingData] = useState({ room: '', date: '' })
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

  const handleCheckRoom = (e) => {
    e.preventDefault()
    console.log(bookingData)
  }

  return (
    <form>
      <Select id='room' label='Room' value={bookingData.room} onChange={handleInputChange} options={rooms} />
      <DatePicker id='date' label='Date' onChange={handleInputChange} min={getToday()} />
      <Button title={CHECK_BUTTON_TEXT} onClick={handleCheckRoom} />
    </form>
  )
}

export default CheckRoomForm
