import React from 'react'
import PropTypes from 'prop-types'
import './HorizontalLayout.css'

const HorizontalLayout = ({ sidebar, children }) => {
  return (
    <div className='horizontal-layout'>
      {sidebar}
      {children}
    </div>
  )
}

HorizontalLayout.propTypes = {
  sidebar: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
}

export default HorizontalLayout
