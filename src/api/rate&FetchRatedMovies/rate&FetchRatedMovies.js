import { rateOrDeleteRating } from './rateOrDeleteRating'
import { fetchRatedMovies } from './fetchRatedMovies'

export const rateAndFetchMovies = async (guestId, id, rating, setRatedListData) => {
  await rateOrDeleteRating(guestId, id, rating)
  await fetchRatedMovies(guestId, setRatedListData)
}
