import Idea from '../Idea'
import './index.scss'

export default function IdeaList({ ideas }) {
  if (ideas === null) {
    return (
      <p className='Idea-error'>Ocurrio un error al traer las publicaciones</p>
    )
  }

  if (ideas === false) {
    return <h3 className='no__ideas'>No se encontraron publicaciones</h3>
  }

  return (
    <ul className='Ideas'>
      {ideas.map((idea) => {
        return <Idea key={idea._id} {...idea} />
      })}
    </ul>
  )
}
