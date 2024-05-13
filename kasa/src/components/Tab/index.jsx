import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Tab({ title, content }) {
  const [setOpen, setOpenState] = useState('')
  const [setH, setHState] = useState('0px')
  const [setRotate, setRotateSate] = useState('tab-icon')
  const tabContent = useRef(null)

  const toggleTab = () => {
    setOpenState(setOpen === '' ? 'open' : '')
    setHState(
      setOpen === 'open' ? '0px' : `${tabContent.current.scrollHeight}px`,
    )
    setRotateSate(setOpen === 'open' ? 'tab-icon' : 'tab-icon rotate')
  }

  const contentArray = []
  if (!Array.isArray(content)) {
    contentArray.push(content)
  } else {
    for (let i = 0; i < 9; i++) {
      contentArray.push(content[i])
    }
  }

  return (
    <div className="tab-container">
      <button className={`tab ${setOpen}`} onClick={toggleTab}>
        <h3 className="tab-title">{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={setOpen ? 'rotate' : ''}
        />
      </button>
      <div
        ref={tabContent}
        style={{ maxHeight: `${setH}` }}
        className="tab-content"
      >
        <div className="tab-text">
          {contentArray.map((content, index) => (
            <div key={`${content}-${index}`}>{content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tab
