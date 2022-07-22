import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

// constants
import { HOME_LINK_TEXT, ADD_BOOKING_LINK_TEXT, CHECK_ROOM_LINK_TEXT } from '../../constants'

const Sidebar = () => {
  const isActiveLink = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <nav className='card-container sidebar'>
      <NavLink to='/' className={isActiveLink}>
        {HOME_LINK_TEXT}
      </NavLink>
      <NavLink to='/addBooking' className={isActiveLink}>
        {ADD_BOOKING_LINK_TEXT}
      </NavLink>
      <NavLink to='/checkRoom' className={isActiveLink}>
        {CHECK_ROOM_LINK_TEXT}
      </NavLink>
    </nav>
  )
}

export default Sidebar
