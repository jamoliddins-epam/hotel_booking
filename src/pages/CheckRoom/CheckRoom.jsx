import React, { useState } from 'react'

// components
import CheckRoomForm from '../../components/Forms/CheckRoomForm'
import Alert from '../../components/Alert/Alert'

// constants
import { CHECK_ROOM_TITLE_TEXT } from '../../utils/constants'

const CheckRoom = () => {
  const [alertMsg, setAlertMsg] = useState('')

  return (
    <div className='card-container'>
      <h2>{CHECK_ROOM_TITLE_TEXT}</h2>
      <hr />
      <CheckRoomForm setAlertMsg={setAlertMsg} />
      <Alert message={alertMsg} />
    </div>
  )
}

export default CheckRoom
