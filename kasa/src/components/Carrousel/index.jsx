import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousSlide = () => {
    const lastIndex = pictures.length - 1
    const shouldResetIndex = currentIndex === 0
    const index = shouldResetIndex ? lastIndex : currentIndex - 1
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = pictures.length - 1
    const shouldResetIndex = currentIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }

  const iconClass = pictures.length === 1 ? 'unactive' : ''

  return (
    <div className="carrousel">
      <button className={`left-arrow ${iconClass}`} onClick={previousSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="image-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
