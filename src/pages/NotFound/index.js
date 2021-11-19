import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImage from '../../../public/404.png'
import Logo from '../../components/Logo'
import './notFound.scss'

export default function NotFound() {
  return (
    <div>
      <Logo />
      <div className='NotFound'>
        <img src={NotFoundImage} alt='404' />
        <p className='NotFound__message'>
          No se encontró la página que estás buscando. Intenta con otra búsqueda
          o vuelve al <Link to='/'>Inicio</Link>.
        </p>
      </div>
    </div>
  )
}
