import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../Fetch'
import './styles.scss'

function Gallery() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('../../logements.json')
        setPlaces(data)
      } catch (error) {
        console.error('Erreur dans le fetch des données:', error)
      }
    }
    getData()
  }, [])

  return (
    <div className="gallery">
      {places.map((place) => (
        <Link to={`/Logement/${place.id}`} key={place.id}>
          <div
            className="card"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url(${place.cover})`,
            }}
            aria-label={place.title}
          >
            <h3>{place.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
