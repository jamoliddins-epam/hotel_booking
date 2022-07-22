import { SURNAME_ERROR_TEXT, ROOM_ERROR_TEXT, DATE_ERROR_TEXT, ROOM_NOT_AVAILABLE_TEXT } from './constants'

export function getToday() {
  var date = new Date()

  var month = date.getMonth() + 1
  var day = date.getDate()
  var year = date.getFullYear()

  if (month < 10) month = '0' + month.toString()
  if (day < 10) day = '0' + day.toString()

  return year + '-' + month + '-' + day
}

export function checkRoom(bookings, roomId, selectedDate) {
  const selectedRoomBookings = bookings[roomId].bookings
  const isSelectedRoomAvailable = selectedRoomBookings.every((booking) => booking.date !== selectedDate)
  return isSelectedRoomAvailable
}

export function validateBookingsData(bookingData, bookings, setAlertMsg) {
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

  const isSelectedRoomAvailable = checkRoom(bookings, room, date)
  if (!isSelectedRoomAvailable) {
    setAlertMsg(ROOM_NOT_AVAILABLE_TEXT)
    return false
  }

  return true
}

export function validateRoomData(roomData, setAlertMsg) {
  const { room, date } = roomData

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
