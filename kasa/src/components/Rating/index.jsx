import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ rating }) {
  const maxRating = 5
  const filledStars = Math.round(rating)

  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < filledStars ? 'filled' : 'unfilled'}
        />
      ))}
    </div>
  )
}

export default Rating
