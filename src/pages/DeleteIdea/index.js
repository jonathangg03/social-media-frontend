import { HiXCircle } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import deleteIdea from '../../services/deleteIdea'
import './index.scss'

export default function DeleteIdea() {
  const navigate = useNavigate()
  const params = useParams()

  const onClose = () => {
    navigate('/profile')
  }

  const handleDelete = async () => {
    const { id } = params
    await deleteIdea({ id })
    onClose()
  }

  return (
    <div className='Delete'>
      <div className='Delete__content'>
        <h2>¿Estas seguro que quieres eliminar esta publicación?</h2>
        <button className='Delete__content-button' onClick={onClose}>
          Cancelar
        </button>
        <button className='Delete__content-button' onClick={handleDelete}>
          Eliminar
        </button>
        <HiXCircle className='Delete__content-close' onClick={onClose} />
      </div>
    </div>
  )
}
