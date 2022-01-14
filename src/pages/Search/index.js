import { useState, useContext, useEffect } from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import Context from '../../Context/authContext'
import Menu from '../../components/Menu'
import Layout from '../../components/Layout'
import getUsers from '../../services/getUsers'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import './index.scss'
import getProfile from '../../services/getProfile'

export default function Search() {
  const [results, setResults] = useState(null)
  const [profile, setProfile] = useState({})
  const { _id, token } = useContext(Context)

  useEffect(async () => {
    if (token) {
      const profileResponse = await getProfile({ token })
      setProfile(profileResponse)
    }
  }, [token])

  return (
    <Layout>
      <div className='Search'>
        <h2>Buscar persona</h2>
        <figure className='Search__profilePicture'>
          {profile.profilePhotoUrl === undefined && <img src={null} />}
          {profile.profilePhotoUrl === '' && (
            <img src={defaultProfilePhoto} alt={profile.name} />
          )}
          {profile.profilePhotoUrl && profile.profilePhotoUrl.length > 0 && (
            <img src={profile.profilePhotoUrl} alt={profile.name} />
          )}
        </figure>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={async (values) => {
            const { name } = values
            const response = await getUsers({ name })
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
                  <Link
                    to={
                      person._id === _id ? '/profile' : `/search/${person._id}`
                    }
                    key={person._id}
                  >
                    <li>
                      {person.profilePhotoUrl === undefined && (
                        <img src={null} />
                      )}
                      {person.profilePhotoUrl === '' && (
                        <img src={defaultProfilePhoto} alt={person.name} />
                      )}
                      {person.profilePhotoUrl &&
                        person.profilePhotoUrl.length > 0 && (
                          <img src={person.profilePhotoUrl} alt={person.name} />
                        )}

                      <h3>{person.name}</h3>
                    </li>
                  </Link>
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
