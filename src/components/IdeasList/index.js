import Idea from '../Idea'
import './index.scss'

export default function IdeaList({ ideas }) {
  return (
    <ul className='Ideas'>
      {ideas.map((idea) => {
        return <Idea key={idea._id} {...idea} />
      })}
    </ul>
  )
}
