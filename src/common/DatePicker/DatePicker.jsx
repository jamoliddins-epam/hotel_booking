import React from 'react'
import PropTypes from 'prop-types'
import '../Input/Input.css'

const DatePicker = ({ value, onChange, label, id, min, max }) => {
  return (
    <div className='form-element-container'>
      <label htmlFor={id}>{label}</label>
      <input type='date' id={id} value={value} onChange={onChange} min={min} max={max} name={id} />
    </div>
  )
}

DatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
}

export default DatePicker
