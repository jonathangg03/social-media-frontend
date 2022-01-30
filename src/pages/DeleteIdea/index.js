import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiXCircle } from 'react-icons/hi'
import Head from '../../components/Head'
import deleteIdea from '../../services/deleteIdea'
import './index.scss'

export default function DeleteIdea() {
  const navigate = useNavigate()
  const params = useParams()
  const [isDeletting, setIsDeletting] = useState(false)

  const onClose = () => {
    navigate('/profile')
  }

  const handleDelete = async () => {
    setIsDeletting(true)
    const { id } = params
    await deleteIdea({ id })
    onClose()
  }

  return (
    <>
      <Head
        title='Eliminar publicación'
        desc='Página de confirmación para eliminar una publicación.'
      />
      <div className='Delete'>
        <div className='Delete__content'>
          <h2>¿Estas seguro que quieres eliminar esta publicación?</h2>
          <button className='Delete__content-button' onClick={onClose}>
            Cancelar
          </button>
          <button
            className='Delete__content-button'
            onClick={handleDelete}
            disabled={isDeletting}
          >
            Eliminar
          </button>
          <HiXCircle className='Delete__content-close' onClick={onClose} />
        </div>
      </div>
    </>
  )
}
