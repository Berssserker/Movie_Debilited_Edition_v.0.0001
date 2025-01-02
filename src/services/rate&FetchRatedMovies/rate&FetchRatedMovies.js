import { rateOrDeleteRating } from './rateOrDeleteRating'
import { fetchRatedMovies } from './fetchRatedMovies'

export const rateAndFetchMovies = async (guestId, id, rating, setRatedListData, setRatedLoading) => {
  setRatedLoading(true)
  await rateOrDeleteRating(guestId, id, rating)
  await fetchRatedMovies(guestId, setRatedListData)
  setRatedLoading(false)
}
