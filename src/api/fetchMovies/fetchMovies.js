import { getMovie } from './getMovie'

export const fetchMovies = async (setError, setMoviesData, setLoading, text, page) => {
  setError(false)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await delay(3000)
  const data = await getMovie(text, page)
  setMoviesData(data.results || [])
  setLoading(false)
  if (data.results.length === 0 && text) {
    setError(true)
  }
}
