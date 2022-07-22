import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// components
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { getToday } from '../../utils/utilFunctions'
import { CHECK_BUTTON_TEXT } from '../../utils/constants'
import { selectBookings } from '../../store/bookings/selectors'
import { selectRooms } from '../../store/rooms/selectors'

const CheckRoomForm = () => {
  // states
  const [roomData, setRoomData] = useState({ room: '', date: '' })
  const rooms = useSelector(selectRooms)
  const bookings = useSelector(selectBookings)

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRoomData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleCheckRoom = (e) => {
    e.preventDefault()
  }

  return (
    <form>
      <Select id='room' label='Room' value={roomData.room} onChange={handleInputChange} options={rooms} />
      <DatePicker id='date' label='Date' onChange={handleInputChange} min={getToday()} />
      <Button title={CHECK_BUTTON_TEXT} onClick={handleCheckRoom} />
    </form>
  )
}

export default CheckRoomForm
