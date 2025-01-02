import { getRatedMovies } from './getRatedMovies'

export const fetchRatedMovies = async (guestId, setRatedMoviesData) => {
  const fetch = async () => {
    const body = await getRatedMovies(guestId)
    console.log(body)
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
}
