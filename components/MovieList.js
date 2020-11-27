import React, { useContext } from 'react'
import Movie from './Movie'
import MoviesContext from '../contexts/MoviesContext'

export default function MovieList () {
  console.log('Movie List')

  const { movies } = useContext(MoviesContext)
  return (
    <div className='container'>
      <div className='row'>
        {
            movies.map((movie) => (
              <div key={movie.id} className='col-md-4'>
                <Movie movie={movie} />
              </div>
            ))
        }
      </div>
    </div>
  )
}
