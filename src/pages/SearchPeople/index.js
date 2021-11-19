import Menu from '../../components/Menu'
import Search from '../../components/Search'
import './searchPeople.scss'

export default function SearchPeople() {
  return (
    <div className='searchPeople'>
      <h2>Ingresa el nombre de una persona para ver su perfil</h2>
      <Search />
      <Menu />
    </div>
  )
}
