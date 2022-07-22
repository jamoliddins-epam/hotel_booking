import React from 'react'

// constants
import CheckRoomForm from '../../components/Forms/CheckRoomForm'

// constants
import { CHECK_ROOM_TITLE_TEXT } from '../../utils/constants'

const CheckRoom = () => {
  return (
    <div className='card-container'>
      <h2>{CHECK_ROOM_TITLE_TEXT}</h2>
      <hr />
      <CheckRoomForm />
    </div>
  )
}

export default CheckRoom
