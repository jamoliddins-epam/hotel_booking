import React from 'react'

// components
import AddBookingForm from '../../components/Forms/AddBookingForm'

// constants
import { ADD_BOOKING_TITLE_TEXT } from '../../utils/constants'

const AddBooking = () => {
  return (
    <div className='card-container'>
      <h2>{ADD_BOOKING_TITLE_TEXT}</h2>
      <hr />
      <AddBookingForm />
    </div>
  )
}

export default AddBooking
