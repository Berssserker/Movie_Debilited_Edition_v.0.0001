import { delay } from '../../utils/delay'

import { getMovie } from './getMovie'

export const fetchMovies = async (setError, setMoviesData, setLoading, text, page) => {
  setError(false)
  await delay(3000)
  const data = await getMovie(text, page)
  setMoviesData(data.results || [])
  setLoading(false)
  if (data.results.length === 0 && text) {
    setError(true)
  }
}
