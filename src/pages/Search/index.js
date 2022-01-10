import { useState } from 'react'
import { Formik } from 'formik'
import Menu from '../../components/Menu'
import Layout from '../../components/Layout'
import getUsers from '../../services/getUsers'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import './index.scss'

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

  return (
    <Layout>
      <div className='Search'>
        <h2>Buscar persona</h2>
        <div className='Search__profilePicture'>
          <img src={ProfilePicture} alt='Maria Lopez Gomez' />
        </div>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={async (values) => {
            const { name } = values
            const response = await getUsers({ name })
            console.log(response)
            setResults(response)
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <form className='Search__input' onSubmit={handleSubmit}>
              <input
                placeholder='Ingresa aquí el nombre de la persona'
                onChange={handleChange}
                name='name'
                required
              />
              <button type='submit'>Buscar</button>
            </form>
          )}
        </Formik>
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
                    <img src={person.profilePhotoUrl || null} />
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
