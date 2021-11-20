import Menu from '../../components/Menu'
import Search from '../../components/Search'
import './searchPeople.scss'

export default function SearchPeople() {
  return (
    <div className='searchPeople'>
      <h2>Busca a una persona</h2>
      <Search />
      <Menu />
    </div>
  )
}
