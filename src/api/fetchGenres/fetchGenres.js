import { getGenres } from './getGenres'

export const fetchGenres = async (setGenresData) => {
  const body = await getGenres()
  console.log(body.genres)
  setGenresData(body.genres || [])
}
