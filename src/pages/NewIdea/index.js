import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import Ellipse1 from '../../../public/NewIdea/Ellipse1.png'
import Ellipse2 from '../../../public/NewIdea/Ellipse2.png'
import Context from '../../Context/authContext'
import sendIdea from '../../services/sendIdea'
import getProfile from '../../services/getProfile'
import './index.scss'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1, //Cunado ya colocamos una imagen
  COMPLETE: 2 // Cuando la imagen ya se subió
}

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function NewIdea() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [file, setFile] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [profile, setProfile] = useState({})
  const [content, setContent] = useState('')
  const { _id, token } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (file) {
      var reader = new FileReader()
      reader.onload = function () {
        setImgUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [file])

  useEffect(async () => {
    if (token) {
      setFetchState(FETCH_STATES.LOADING)
      const profile = await getProfile({ token: token })
      setProfile(profile)
      setFetchState(FETCH_STATES.COMPLETE)
    }
  }, [token])

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const handleSumbitItea = async (e) => {
    e.preventDefault()
    setFetchState(FETCH_STATES.LOADING)

    const fd = new FormData()
    fd.append('content', content)
    if (e.target[1].files[0]) {
      fd.append('postImage', e.target[1].files[0])
    }
    await sendIdea({ id: _id, content: fd })
    setFetchState(FETCH_STATES.COMPLETE)
    navigate('/profile')
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
    <>
      <Head
        title='Nueva publicación'
        desc='Página para crear una nueva publicación.'
      />
      <div className='newIdea'>
        <Logo />
        <div className='newIdea__wrapper'>
          <figure className='newIdea__profilePhoto'>
            {profile.profilePhotoUrl === undefined && <img src={null} />}
            {profile.profilePhotoUrl === '' && (
              <img src={defaultProfilePhoto} alt={profile.name} />
            )}
            {profile.profilePhotoUrl && profile.profilePhotoUrl.length > 0 && (
              <img src={profile.profilePhotoUrl} alt={profile.name} />
            )}
          </figure>
          <form onSubmit={handleSumbitItea}>
            <textarea
              placeholder='Escribe aquí lo que quieras o arrastra una imagen...'
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onChange={handleChangeContent}
              className={`${drag === 1 && 'dragging'}`}
            ></textarea>
            {imgUrl && (
              <figure className='newIdea__image'>
                <img src={imgUrl} />
                <div
                  className='newIdea__image-cover'
                  onClick={handleClearImage}
                >
                  <HiX />
                </div>
              </figure>
            )}
            <input
              type='file'
              className='newIdea__imageInput'
              accept='.png, .jpeg, .jpg'
              onChange={handleFileInputChange}
            />
            <button>Publicar</button>
          </form>
        </div>
        <Menu />
        <img src={Ellipse1} className='ellipse a' />
        <img src={Ellipse2} className='ellipse b' />
        {fetchState === FETCH_STATES.LOADING && <Spinner />}
      </div>
    </>
  )
}
