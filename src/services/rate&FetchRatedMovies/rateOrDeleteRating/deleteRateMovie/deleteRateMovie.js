import { apiKey } from '../../../../public/apiKey'

export const deleteRateMovie = async (guestId, movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestId}`
  const response = await fetch(url, {
    method: 'DELETE',
  })
  if (!response.ok) {
    const error = await response.json()
    console.log(error)
  }
}
