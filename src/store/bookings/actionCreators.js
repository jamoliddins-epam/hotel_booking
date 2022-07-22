import { FETCH_BOOKINGS, ADD_BOOKING } from './actionTypes'

export const fetchBookings = (fetchedBookings) => ({
  type: FETCH_BOOKINGS,
  payload: fetchedBookings,
})

export const addBooking = (bookingData) => ({
  type: ADD_BOOKING,
  payload: bookingData,
})
