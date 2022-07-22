import React from 'react'

// constants
import { HOME_TITLE_TEXT } from '../../constants'

const Home = () => {
  return (
    <div className='card-container'>
      <h2>{HOME_TITLE_TEXT}</h2>
      <hr />
      <p>
        A simple hotel booking system keeps track of the rooms in a hotel. A guest can book a room for individual nights
        and the booking system maintains the state of these bookings.
      </p>
    </div>
  )
}

export default Home
