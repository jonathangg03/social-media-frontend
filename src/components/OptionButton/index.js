import React from 'react'
import { Link } from 'wouter'

export default function OptionButton({ Icon, uri, type }) {
  return (
    <div className={`option-button ${type}`}>
      <Link to={uri}>
        <Icon />
      </Link>
    </div>
  )
}
