import { getRatedMovies } from './getRatedMovies'

export const fetchRatedMovies = async (guestId, setRatedMoviesData, setRatedError, setLoading) => {
  const fetch = async () => {
    const body = await getRatedMovies(guestId, setRatedError)
    setRatedMoviesData(body.results || [])
  }
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  setLoading(false)
}
