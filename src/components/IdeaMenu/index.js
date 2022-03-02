import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function IdeaMenu({ postId, openMenu, handleOpenMenu }) {
  const navigate = useNavigate()

  const handleOpenModal = () => {
    navigate(`/delete/${postId}`)
  }

  return (
    <section className={`idea__menu ${openMenu && 'show-menu'}`}>
      <section>
        <button onClick={handleOpenModal}>Eliminar</button>
      </section>
      <button type='button' onClick={handleOpenMenu}>
        Cerrar menú
      </button>
    </section>
  )
}
