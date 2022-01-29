import { HiXCircle } from 'react-icons/hi'
import deleteIdea from '../../services/deleteIdea'
import './index.scss'

export default function DeleteModalContent({ onClose, id, closeMenu }) {
  const handleDelete = async () => {
    await deleteIdea({ id })
    onClose()
    closeMenu()
  }

  return (
    <div className='Delete'>
      <h2>¿Estas seguro que quieres eliminar esta publicación?</h2>
      <button className='Delete__button' onClick={onClose}>
        Cancelar
      </button>
      <button className='Delete__button' onClick={handleDelete}>
        Eliminar
      </button>
      <HiXCircle className='Delete__close' onClick={onClose} />
    </div>
  )
}
