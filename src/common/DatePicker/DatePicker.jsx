import React from 'react'
import PropTypes from 'prop-types'
import '../Input/Input.css'

const DatePicker = ({ onChange, label, id, min, max }) => {
  return (
    <div className='form-element-container'>
      <label htmlFor={id}>{label}</label>
      <input type='date' id={id} onChange={onChange} min={min} max={max} name={id} />
    </div>
  )
}

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
}

export default DatePicker
