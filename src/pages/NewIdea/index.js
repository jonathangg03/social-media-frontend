import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import Ellipse1 from '../../../public/NewIdea/Ellipse1.png'
import Ellipse2 from '../../../public/NewIdea/Ellipse2.png'
import './index.scss'

const mockProfile = {
  profilePicture: ProfilePicture,
  name: 'Jonathan García González'
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1, //Cunado ya colocamos una imagen
  COMPLETE: 2 // Cuando la imagen ya se subió
}

export default function NewIdea() {
  const navigate = useNavigate()
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [file, setFile] = useState(null) //Guardará el archivo a subir
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    if (file) {
      var reader = new FileReader()
      reader.onload = function (event) {
        setImgUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [file])

  const handleSumbitItea = (e) => {
    e.preventDefault()
    navigate('/2/profile')
  }

  const handleChangeImage = (file) => {
    setFile(file)
  }

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleClearImage = () => {
    setImgUrl(null)
  }

  const handleDragEnter = (e) => {
    //Cuando colocamos el archivo sobre el elemento
    //Debemos prevenir en todos los eventos, para que no abra la imagen en el navegador
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    //Cuando soltamos el archivo
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = (e) => {
    //Cuando el achivo está colocado por haberlo soltado
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0] //Validamos su elemento type para asegurarnos que sea una imagen
    if (file.type.includes('image/')) {
      handleChangeImage(file)
    }
  }

  return (
    <div className='newIdea'>
      <Logo />
      <div className='newIdea__wrapper'>
        <figure className='newIdea__profilePhoto'>
          <img
            src={mockProfile.profilePicture}
            alt={mockProfile.name}
            className='newIdea__profilePicture'
          />
        </figure>
        <form onSubmit={handleSumbitItea}>
          <textarea
            placeholder='Escribe aquí lo que quieras o arrastra una imagen...'
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`${drag === 1 && 'dragging'}`}
          ></textarea>
          {imgUrl && (
            <figure className='newIdea__image'>
              <img src={imgUrl} />
              <div className='newIdea__image-cover' onClick={handleClearImage}>
                <HiX />
              </div>
            </figure>
          )}
          <input
            type='file'
            className='newIdea__imageInput'
            accept='image/png, image/jpeg image/jpg'
            onChange={handleFileInputChange}
          />
          <button>Publicar</button>
        </form>
      </div>
      <Menu />
      <img src={Ellipse1} className='ellipse a' />
      <img src={Ellipse2} className='ellipse b' />
    </div>
  )
}
