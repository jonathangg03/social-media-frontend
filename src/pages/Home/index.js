import { Navigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import './home.scss'

const IDEAS = [
  {
    title: 'Título de la nota',
    content: 'Esto es una idea nueva',
    date: '2 de Marzo del 2020',
    _id: 1
  },
  {
    title: 'Título de la nota',
    content: 'Esto es una idea nueva',
    date: '2 de Marzo del 2020',
    _id: 2
  },
  {
    title: 'Título de la nota',
    content: 'Esto es una idea nueva',
    date: '2 de Marzo del 2020',
    _id: 3
  },
  {
    title: 'Título de la nota',
    content: 'Esto es una idea nueva',
    date: '2 de Marzo del 2020',
    _id: 4
  }
]

export default function Home() {
  if (!localStorage.getItem('auth')) return <Navigate to='/' />

  return (
    <div className='home'>
      <Logo />
      <IdeasList ideas={IDEAS} />
      <Menu />
    </div>
  )
}
