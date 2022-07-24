import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// components
import Select from '../../common/Select/Select'
import DatePicker from '../../common/DatePicker/DatePicker'
import Button from '../../common/Button/Button'

// utils & constants
import { checkRoom, getToday, validateRoomData } from '../../utils/utilFunctions'
import { CHECK_BUTTON_TEXT, ROOM_AVAILABLE_TEXT, ROOM_NOT_AVAILABLE_TEXT } from '../../utils/constants'
import { selectBookings } from '../../store/bookings/selectors'
import { selectRooms } from '../../store/rooms/selectors'

const CheckRoomForm = ({ setAlertMsg }) => {
  // states
  const [roomData, setRoomData] = useState({ room: '101', date: '' })
  const [isRoomAvailable, setIsRoomAvailable] = useState(null)
  const rooms = useSelector(selectRooms)
  const bookings = useSelector(selectBookings)

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === 'room') {
      setIsRoomAvailable(null)
      setAlertMsg('')
    }

    setRoomData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleCheckRoom = (e) => {
    e.preventDefault()
    const isRoomDataValid = validateRoomData(roomData, setAlertMsg)

    if (isRoomDataValid) {
      const isSelectedRoomAvailable = checkRoom(bookings, roomData.room, roomData.date)
      setIsRoomAvailable(isSelectedRoomAvailable)

      if (isSelectedRoomAvailable) {
        setAlertMsg(ROOM_AVAILABLE_TEXT)
      } else {
        setAlertMsg(ROOM_NOT_AVAILABLE_TEXT)
      }
    }
  }

  return (
    <form>
      <Select id='room' label='Room' value={roomData.room} onChange={handleInputChange} options={rooms} />
      <DatePicker id='date' label='Date' value={roomData.date} onChange={handleInputChange} min={getToday()} />
      <div className='flex-container'>
        {<p>{isRoomAvailable === null ? '' : isRoomAvailable ? '✅' : '❌'}</p>}
        <Button title={CHECK_BUTTON_TEXT} onClick={handleCheckRoom} />
      </div>
    </form>
  )
}

CheckRoomForm.propTypes = {
  setAlertMsg: PropTypes.func.isRequired,
}

export default CheckRoomForm
