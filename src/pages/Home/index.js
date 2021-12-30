import { useContext } from 'react'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import Cat from '../../../public/cat.jpg'
import AuthContext from '../../Context/authContext'
import './index.scss'

const IDEAS = [
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    _id: 1
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    image: Cat,
    _id: 2
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    _id: 3
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    _id: 4
  }
]

export default function Home() {
  const { profile } = useContext(AuthContext)

  console.log(profile)
  return (
    <Layout>
      <div className='Home'>
        <div className='Home__profilePicture'>
          <img src={ProfilePicture} alt='Maria Lopez Gomez' />
        </div>
        <IdeasList ideas={IDEAS} />
        <Menu />
      </div>
    </Layout>
  )
}
