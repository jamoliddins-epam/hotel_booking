import { fetchRooms } from './rooms/actionCreators'
import { fetchBookings } from './bookings/actionCreators'

async function fetchData(url) {
  const data = await fetch(url)
  return await data.json()
}

export async function fetchRoomsData(dispatch) {
  const rooms = await fetchData('/rooms.json')
  dispatch(fetchRooms(rooms))
}

export async function fetchBookingsData(dispatch) {
  const bookings = await fetchData('/bookings.json')
  dispatch(fetchBookings(bookings))
}
