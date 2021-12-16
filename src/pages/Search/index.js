import { useState } from 'react'
import Menu from '../../components/Menu'
import Layout from '../../components/Layout'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import './index.scss'

const PEOPLE = [
  {
    name: 'Maria Lopez Gomez',
    profilePicture: ProfilePicture,
    _id: 1
  },
  {
    name: 'Ana Perez González',
    profilePicture: ProfilePicture,
    _id: 2
  },
  {
    name: 'Angel Torres Lopez',
    profilePicture: ProfilePicture,
    _id: 3
  },
  {
    name: 'Raychell Blanco Arias',
    profilePicture: ProfilePicture,
    _id: 4
  }
]

export default function Search() {
  // if (!localStorage.getItem('auth')) return <Navigate to='/' />
  const [search, setSearch] = useState('')
  const [results, setResults] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    if (search !== '') {
      const newResults = PEOPLE.filter((person) => {
        if (person.name.toLowerCase().includes(search.toLowerCase())) {
          return person
        }
      })
      setResults(newResults)
    } else {
      setResults(null)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Layout>
      <div className='Search'>
        <h2>Buscar persona</h2>
        <div className='Search__profilePicture'>
          <img src={ProfilePicture} alt='Maria Lopez Gomez' />
        </div>
        <form className='Search__input' onClick={handleSearch}>
          <input
            placeholder='Ingresa aquí el nombre de la persona'
            value={search}
            onChange={handleChange}
            required
          />
          <button>Buscar</button>
        </form>
        <section className='Search__results'>
          <ul>
            {results !== null && results.length === 0 && (
              <h2>No se encontraron personas con ese nombre.</h2>
            )}
            {results && results.length > 0 && (
              <>
                <h4>Resultados</h4>
                {results.map((person) => (
                  <li key={person._id}>
                    <img src={person.profilePicture} alt={person.name} />
                    <h3>{person.name}</h3>
                  </li>
                ))}
              </>
            )}
          </ul>
        </section>
        <Menu />
      </div>
    </Layout>
  )
}
