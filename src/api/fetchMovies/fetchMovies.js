import { getMovie } from './getMovie'

export const FetchMovies = async (setMoviesData, text, setError, page) => {
  setError(false)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await delay(3000)
  const data = await getMovie(text, page)
  setMoviesData(data.results || [])
  if (data.results.length === 0 && text) {
    setError(true)
  }
}

export default FetchMovies
