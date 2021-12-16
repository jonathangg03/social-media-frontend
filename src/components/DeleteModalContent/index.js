import { HiXCircle } from 'react-icons/hi'
import './index.scss'

export default function DeleteModalContent({ onClose }) {
  return (
    <div className='Delete'>
      <h2>¿Estas seguro que quieres eliminar esta publicación?</h2>
      <button className='Delete__button' onClick={onClose}>
        Cancelar
      </button>
      <button className='Delete__button'>Eliminar</button>
      <HiXCircle className='Delete__close' onClick={onClose} />
    </div>
  )
}
