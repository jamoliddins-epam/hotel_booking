import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ value, onChange, label, placeholder, id }) => {
  return (
    <div className='form-element-container'>
      <label htmlFor={id}>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} id={id} name={id} />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Input
