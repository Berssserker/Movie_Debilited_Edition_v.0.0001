import { rateOrDeleteRating } from './rateOrDeleteRating'
import { fetchRatedMovies } from './fetchRatedMovies'

export const rateAndFetchMovies = async (guestId, movieId, rating, setRatedMoviesData, setRatedError, setLoading) => {
  await rateOrDeleteRating(guestId, movieId, rating)
  await fetchRatedMovies(guestId, setRatedMoviesData, setRatedError, setLoading)
}
