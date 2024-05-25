import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

function Carrousel({ pictures }) {
  const extendedPictures = [
    pictures[pictures.length - 1],
    ...pictures,
    pictures[0],
  ]
  const [currentIndex, setCurrentIndex] = useState(1)
  const [transition, setTransition] = useState(true)

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 1) {
      setTimeout(() => {
        setTransition(false)
        setCurrentIndex(pictures.length)
      }, 500)
    } else {
      setTransition(true)
    }
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === pictures.length) {
      setTimeout(() => {
        setTransition(false)
        setCurrentIndex(1)
      }, 500)
    } else {
      setTransition(true)
    }
  }

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransition(false)
      setCurrentIndex(pictures.length)
    } else if (currentIndex === pictures.length + 1) {
      setTransition(false)
      setCurrentIndex(1)
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
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedPictures.map((picture, index) => (
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
        {currentIndex}/{pictures.length}
      </p>
    </div>
  )
}

export default Carrousel
