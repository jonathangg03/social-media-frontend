import React from 'react'
import { FaUserPlus, FaUser, FaPlus } from 'react-icons/fa'
import OptionButton from '../OptionButton'

export default function Options() {
  return (
    <div>
      <OptionButton Icon={FaUser} uri='/:id/newIdea' type='new-idea' />
    </div>
  )
}
