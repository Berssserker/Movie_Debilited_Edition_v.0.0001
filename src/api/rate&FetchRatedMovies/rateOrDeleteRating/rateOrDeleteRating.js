import { rateMovie } from './rateMovie'
import { deleteRateMovie } from './deleteRateMovie'

export const rateOrDeleteRating = async (guestId, id, rating) => {
  if (rating) {
    await rateMovie(guestId, id, rating)
  } else {
    await deleteRateMovie(guestId, id)
  }
}
