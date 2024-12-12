import { delay } from '../../utils/delay'

import { getMovie } from './getMovie'

export const fetchMovies = async (setError, setMoviesData, setLoading, text, page) => {
  setError(false)
  await delay(3000)
  const body = await getMovie(text, page)
  setMoviesData(body.results || [])
  setLoading(false)
  if (body.results.length === 0 && text) {
    setError(true)
  }
}
