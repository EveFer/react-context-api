import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function Movie ({ movie: { title, imageUrl, id } }) {
  console.log('Movie!! --')
  const { user, toggleFavoriteMovieToUsers } = useContext(UserContext)
  const isFavorite = user?.favoriteMovies?.includes(id)
  return (
    <article className='card'>
      <img src={imageUrl} alt={title} className='card-img-top img-style' />
      <section className='card-body'>
        <h4>{title}</h4>
        {
          user?.id && (
            <button
              className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
              onClick={() => toggleFavoriteMovieToUsers(id)}
            >
              Favorito
            </button>
          )
        }

      </section>
    </article>
  )
}
