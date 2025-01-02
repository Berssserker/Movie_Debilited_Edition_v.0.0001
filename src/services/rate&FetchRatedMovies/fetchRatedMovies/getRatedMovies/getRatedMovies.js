import { apiKey } from '../../../../public/apiKey'

export const getRatedMovies = async (guestId) => {
  const url = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${apiKey}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`)
    }
    const body = await response.json()
    return body
  } catch {
    return {}
  }
}
