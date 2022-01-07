import Idea from '../Idea'
import './index.scss'

export default function IdeaList({ ideas }) {
  if (ideas.length === 0) {
    return <h2 className='no__ideas'>No se encontraron publicaciones</h2>
  }
  return (
    <ul className='Ideas'>
      {ideas.map((idea) => {
        return <Idea key={idea._id} {...idea} />
      })}
    </ul>
  )
}
