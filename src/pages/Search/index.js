import { useState, useContext } from 'react'
import { Formik } from 'formik'
import Menu from '../../components/Menu'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import getUsers from '../../services/getUsers'
import useGetProfile from '../../hooks/useGetProfile'
import SearchResults from '../../components/SearchResults'
import ProfilePhoto from '../../components/ProfilePhoto'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Search() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const [results, setResults] = useState(null)
  const { _id, token } = useContext(Context)
  const { profile } = useGetProfile({ token })

  return (
    <>
      <Head
        title='Buscar personas'
        desc='Página para buscar personas que se desean seguir'
      />
      <Layout>
        <div className='Search'>
          <h2>Buscar persona</h2>
          <ProfilePhoto profile={profile} />
          <Formik
            initialValues={{ name: '' }}
            onSubmit={async (values) => {
              try {
                setFetchState(FETCH_STATES.LOADING)
                const { name } = values
                const response = await getUsers({ name })
                setResults(response)
                setFetchState(FETCH_STATES.COMPLETE)
              } catch (error) {
                setFetchState(FETCH_STATES.ERROR)
              }
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
          {fetchState === FETCH_STATES.ERROR && (
            <p className='Search__error'>Ocurrio un error inesperado</p>
          )}
          <SearchResults results={results} id={_id} />
          <Menu />
        </div>
      </Layout>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
