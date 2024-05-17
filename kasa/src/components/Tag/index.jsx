import React from 'react'
import './styles.scss'

function Tag({ tagContent }) {
  return (
    <div className="tag">
      <p>{tagContent}</p>
    </div>
  )
}

export default Tag
