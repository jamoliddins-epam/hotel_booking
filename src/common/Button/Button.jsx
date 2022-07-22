import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className='btn'>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
