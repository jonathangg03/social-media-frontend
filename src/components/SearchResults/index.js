import { Link } from 'react-router-dom'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import './index.scss'

export default function SearchResults({ results, id }) {
  return (
    <section className='results'>
      <ul>
        {results !== null && results.length === 0 && (
          <h2>No se encontraron personas con ese nombre.</h2>
        )}
        {results && results.length > 0 && (
          <>
            <h4>Resultados</h4>
            {results.map((person) => (
              <Link
                to={person._id === id ? '/profile' : `/search/${person._id}`}
                key={person._id}
              >
                <li>
                  {person.profilePhotoUrl === undefined && <img src={null} />}
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
  )
}
