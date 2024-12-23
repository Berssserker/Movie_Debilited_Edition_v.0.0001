import { rateMovie } from './rateMovie'
import { deleteRateMovie } from './DeleteRateMovie'

export const rateOrDeleteRating = async (guestId, movieId, rating) => {
  if (rating) {
    await rateMovie(guestId, movieId, rating)
  } else {
    await deleteRateMovie(guestId, movieId)
  }
}
