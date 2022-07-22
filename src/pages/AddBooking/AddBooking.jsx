import React, { useState } from 'react'

// components
import AddBookingForm from '../../components/Forms/AddBookingForm'
import Alert from '../../components/Alert/Alert'

// constants
import { ADD_BOOKING_TITLE_TEXT } from '../../utils/constants'

const AddBooking = () => {
  const [alertMsg, setAlertMsg] = useState('')

  return (
    <div className='card-container'>
      <h2>{ADD_BOOKING_TITLE_TEXT}</h2>
      <hr />
      <AddBookingForm setAlertMsg={setAlertMsg} />
      <Alert message={alertMsg} />
    </div>
  )
}

export default AddBooking
