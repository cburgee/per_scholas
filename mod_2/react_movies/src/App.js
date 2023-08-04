import { useState, useEffect } from "react"
import "./App.css"
import MovieDisplay from "./components/MovieDisplay"
import Form from "./components/Form"

export default function App() {
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${searchTerm}`
      )
      const data = await response.json()
      setMovie(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovie("Clueless")
  }, [])
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}
