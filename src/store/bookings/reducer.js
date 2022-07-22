import { FETCH_BOOKINGS, ADD_BOOKING } from './actionTypes'

const initialState = {}

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS:
      return { ...action.payload }
    case ADD_BOOKING:
      const roomId = action.payload.room
      const prevBookings = state[roomId].bookings
      return { ...state, [roomId]: { bookings: [...prevBookings, action.payload] } }
    default:
      return state
  }
}
