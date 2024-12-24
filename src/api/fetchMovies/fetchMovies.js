import { getMovie } from './getMovie'

export const fetchMovies = async (setMoviesData, setLoading, text, page) => {
  const body = await getMovie(text, page)
  setMoviesData(body.results || [])
  setLoading(false)
}
