import { getGenres } from './getGenres'

export const fetchGenres = async (setGenresData) => {
  const body = await getGenres()
  setGenresData(body.genres || [])
}
