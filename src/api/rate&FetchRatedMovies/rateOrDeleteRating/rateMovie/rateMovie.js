import { apiKey } from '../../../../public/apiKey'

export const rateMovie = async (guestId, id, rating) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${guestId}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: rating,
    }),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(`${error.status}, ${error.statusText}`)
  }
}
