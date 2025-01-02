export const getGenres = async () => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  try {
    const response = await fetch(url)
    const body = await response.json()
    return body
  } catch (error) {
    throw new Error(error)
  }
}
