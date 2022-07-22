import React from 'react'
import PropTypes from 'prop-types'
import '../Input/Input.css'

const Select = ({ value, onChange, options, label, id }) => {
  return (
    <div className='form-element-container'>
      <label htmlFor={id}>{label}</label>
      <select value={value} onChange={onChange} id={id} name={id}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.roomName}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Select
