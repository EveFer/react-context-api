import { createContext, useState } from 'react'

const UserContext = createContext()

const initialUser = { id: 1, name: 'Evelyn', favoriteMovies: [1, 2] }

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser)

  const login = () => {
    setUser(initialUser)
  }

  const logout = () => {
    setUser(null)
  }

  const toggleFavoriteMovieToUsers = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId)
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter(favoriteMovieId => favoriteMovieId !== movieId) // delete
      : [...user.favoriteMovies, movieId] // add
    setUser({
      ...user,
      favoriteMovies
    })
  }

  const data = { user, login, logout, toggleFavoriteMovieToUsers }
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
export default UserContext
