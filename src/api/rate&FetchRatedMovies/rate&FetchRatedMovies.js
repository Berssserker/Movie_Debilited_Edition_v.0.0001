import { rateOrDeleteRating } from './rateOrDeleteRating'
import { fetchRatedMovies } from './fetchRatedMovies'

export const rateAndFetchMovies = async (guestId, movieId, rating, setRatedMoviesData, setLoading) => {
  await rateOrDeleteRating(guestId, movieId, rating)
  await fetchRatedMovies(guestId, setRatedMoviesData, setLoading)
}
