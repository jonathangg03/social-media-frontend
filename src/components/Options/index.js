import React, { useRef, useState } from 'react'
import { FaUserPlus, FaUser, FaPlus, FaRegWindowMinimize } from 'react-icons/fa'
import { BsGrid3X2GapFill, BsXLg } from 'react-icons/bs'

import OptionButton from '../OptionButton'
import './index.scss'

export default function Options() {
  const optionsRef = useRef()
  const [showOptions, setShowOptions] = useState(false)

  const handleClickShowOptions = (e) => {
    optionsRef.current.classList.toggle('options-show')
    setShowOptions(!showOptions)
  }

  return (
    <div className='options' ref={optionsRef}>
      <OptionButton Icon={FaUser} uri='/:id/profile' type='profile-op' />
      <OptionButton Icon={FaUserPlus} uri='/search' type='search-op' />
      <OptionButton Icon={FaPlus} uri='/:id/newIdea' type='new-idea-op' />
      <button className='activator-button' onClick={handleClickShowOptions}>
        {!showOptions ? <BsGrid3X2GapFill /> : <BsXLg />}
      </button>
    </div>
  )
}
