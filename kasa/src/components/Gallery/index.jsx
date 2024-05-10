import React from 'react'
import data from '../../data/logements.json' // Import JSON data

function Gallery() {
  const places = data // Assign imported JSON data to places

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {places.map((place) => (
          <div
            key={place.id}
            className="card"
            style={{ backgroundImage: `url(${place.cover})` }}
            aria-label={place.title}
          >
            <h3>{place.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
