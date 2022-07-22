import { FETCH_ROOMS } from './actionTypes'

const initialState = []

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return [...action.payload]
    default:
      return state
  }
}
