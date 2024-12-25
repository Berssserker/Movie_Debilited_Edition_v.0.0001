export const getMovie = async (text, page) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/GeneralList/movie?api_key=${apiKey}&query=${encodeURIComponent(text)}&page=${page}`
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
