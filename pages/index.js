import Navbar from '../components/Navbar'
import MovieList from '../components/MovieList'
import { UserProvider } from '../contexts/UserContext'
import { MoviesProvider } from '../contexts/MoviesContext'

export default function Home () {
  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  )
}
