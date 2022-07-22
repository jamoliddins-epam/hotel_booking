import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import { roomsReducer } from './rooms/reducer'
import { bookingsReducer } from './bookings/reducer'

const rootReducer = combineReducers({
  rooms: roomsReducer,
  bookings: bookingsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
