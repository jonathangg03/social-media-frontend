import React from 'react'
import { Link } from 'react-router-dom'
import './optionButton.scss'

export default function OptionButton({ Icon, uri, type }) {
  return (
    <div className={`option-button ${type}`}>
      <Link to={uri}>
        <Icon />
      </Link>
    </div>
  )
}
