import React from 'react'
import Idea from '../Idea'
import './ideaList.scss'

export default function IdeaList({ ideas }) {
  return (
    <ul className='ideas'>
      {ideas.map((idea) => {
        return <Idea key={idea._id} {...idea} />
      })}
    </ul>
  )
}
