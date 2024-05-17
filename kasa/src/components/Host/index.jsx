import React from 'react'
import './styles.scss'

function Host({ host }) {
  const [firstName, lastName] = host.name.split(' ')

  return (
    <div className="host-container">
      <div className="host-info">
        <p className="host-name">{firstName}</p>
        <p className="host-name">{lastName}</p>
      </div>
      <div
        className="host-image"
        style={{ backgroundImage: `url(${host.picture})` }}
      ></div>
    </div>
  )
}

export default Host
