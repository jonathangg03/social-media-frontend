import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import sendIdea from '../../services/sendIdea'
import useDrag from '../../hooks/useDrag'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function NewIdeaForm({ id }) {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null) //El contenido de la imagen
  const [imgUrl, setImgUrl] = useState(null) //La dirección para poder mostrarla
  const navigate = useNavigate()
  const { drag, handleDragEnter, handleDragLeave, handleDrop } = useDrag({
    action: dragAction
  })

  useEffect(() => {
    //Siempre que cambie file, sí trae un archivo, lo pasa por el filereader
    if (file) {
      var reader = new FileReader()
      reader.onload = function () {
        setImgUrl(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImgUrl(null)
    }
  }, [file])

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const handleSumbitItea = async (e) => {
    e.preventDefault()
    setFetchState(FETCH_STATES.LOADING)
    try {
      const fd = new FormData()
      fd.append('content', content)
      if (file && imgUrl) {
        fd.append('postImage', file)
      }
      await sendIdea({ id, content: fd })
      setFetchState(FETCH_STATES.COMPLETE)
      navigate('/profile')
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
    }
  }

  const handleChangeImage = (file) => {
    setFile(file)
  }

  function dragAction(e) {
    const file = e.dataTransfer.files[0] //Validamos su elemento type para asegurarnos que sea una imagen
    if (file.type.includes('image/')) {
      handleChangeImage(file)
    }
  }

  const handleFileInputChange = (e) => {
    handleChangeImage(e.target.files[0])
  }

  const handleClearImage = () => {
    setImgUrl(null)
    handleChangeImage(null)
  }

  return (
    <form onSubmit={handleSumbitItea} className='newIdeaForm'>
      <textarea
        placeholder='Escribe aquí lo que quieras o arrastra una imagen...'
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onChange={handleChangeContent}
        className={`${drag === 1 && 'dragging'}`}
        required
      ></textarea>
      {imgUrl && (
        <figure className='newIdeaForm__image'>
          <img src={imgUrl} />
          <div className='newIdeaForm__image-cover' onClick={handleClearImage}>
            <HiX />
          </div>
        </figure>
      )}
      <input
        type='file'
        className='newIdeaForm__imageInput'
        accept='.png, .jpeg, .jpg'
        onChange={handleFileInputChange}
      />
      <button disabled={fetchState === FETCH_STATES.LOADING}>Publicar</button>
      {fetchState === FETCH_STATES.ERROR && (
        <p className='newIdeaForm__error'>Ocurrio un error inesperado</p>
      )}
    </form>
  )
}
