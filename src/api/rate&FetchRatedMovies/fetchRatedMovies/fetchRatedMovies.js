import { getRatedMovies } from './getRatedMovies'

export const fetchRatedMovies = async (guestId, setRatedMoviesData, setLoading) => {
  const fetch = async () => {
    const body = await getRatedMovies(guestId)
    setRatedMoviesData(body.results || [])
  }
  setLoading(true)
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
