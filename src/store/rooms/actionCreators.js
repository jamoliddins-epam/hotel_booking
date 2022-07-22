import { FETCH_ROOMS } from './actionTypes'

export const fetchRooms = (fetchedRooms) => ({
  type: FETCH_ROOMS,
  payload: fetchedRooms,
})
