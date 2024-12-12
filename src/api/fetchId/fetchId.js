import { getId } from './getId'

export const fetchId = async (setErrorId, setGuestId) => {
  const body = await getId(setErrorId)
  setGuestId(body.guest_session_id)
}
