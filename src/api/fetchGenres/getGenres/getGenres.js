import { genresURL } from '../../../public/genresURL'

export const getGenres = async () => {
  try {
    const response = await fetch(genresURL)
    const body = await response.json()
    return body
  } catch (error) {
    throw new Error(error)
  }
}
