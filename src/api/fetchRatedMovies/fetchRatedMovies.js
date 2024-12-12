import GetRatedMovies from './getRatedMovies/GetRatedMovies'

export const FetchRatedMovies = async (guestId, setRatedMoviesData, setLoading, setRatedError) => {
  await delay(3000)
  const body = await GetRatedMovies(guestId, setRatedError, setLoading)
  setRatedMoviesData(body.results || [])
}
