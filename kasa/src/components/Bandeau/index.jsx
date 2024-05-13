import React from 'react'

function Bandeau({ backgroundImage, gradient, title }) {
  const style = {
    backgroundImage: `${gradient}, url(${backgroundImage})`,
  }
  return (
    <div id="bandeau" style={style}>
      `<h1>{title}</h1>`
    </div>
  )
}

export default Bandeau
