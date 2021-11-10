import React, { useRef, useState } from 'react'
import { FaUserPlus, FaUser, FaPlus, FaHeart } from 'react-icons/fa'
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
      <OptionButton Icon={FaHeart} uri='/2/liked' type='liked-op' />
      <OptionButton Icon={FaUser} uri='/2/profile' type='profile-op' />
      <OptionButton Icon={FaUserPlus} uri='/search' type='search-op' />
      <OptionButton Icon={FaPlus} uri='/2/newIdea' type='new-idea-op' />
      <button className='activator-button' onClick={handleClickShowOptions}>
        {!showOptions ? <BsGrid3X2GapFill /> : <BsXLg />}
      </button>
    </div>
  )
}
