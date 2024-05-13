import React, { useState, useEffect } from 'react'
import './styles.scss'

function Gallery() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../logements.json')
        if (!response.ok) {
          throw new Error('Erreur dans la récupération des données')
        }
        const data = await response.json()
        setPlaces(data)
      } catch (error) {
        console.error('Erreur dans le fetch des données:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="gallery">
      {places.map((place) => (
        <div
          key={place.id}
          className="card"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url(${place.cover})`,
          }}
          aria-label={place.title}
        >
          <h3>{place.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Gallery
