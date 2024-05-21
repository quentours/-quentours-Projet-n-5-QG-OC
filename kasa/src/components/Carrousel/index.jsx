import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(true)

  const previousSlide = () => {
    const lastIndex = pictures.length - 1
    if (currentIndex === 0) {
      setTransition(true)
      setCurrentIndex(lastIndex - 1)
      setTimeout(() => {
        setTransition(false)
        setCurrentIndex(lastIndex)
      }, 50)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    const lastIndex = pictures.length - 1
    if (currentIndex === lastIndex) {
      setTransition(true)
      setCurrentIndex(1)
      setTimeout(() => {
        setTransition(false)
        setCurrentIndex(0)
      }, 50)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const iconClass = pictures.length === 1 ? 'unactive' : ''

  return (
    <div className="carrousel">
      <button className={`left-arrow ${iconClass}`} onClick={previousSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transition ? 'transform 0.9s ease-in-out' : 'none',
        }}
      >
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <button className={`right-arrow ${iconClass}`} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <p className={`numerotation ${iconClass}`}>
        {currentIndex + 1}/{pictures.length}
      </p>
    </div>
  )
}

export default Carrousel
