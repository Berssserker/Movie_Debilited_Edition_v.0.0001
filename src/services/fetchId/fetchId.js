import { getId } from './getId'

export const fetchId = async (setGuestId) => {
  const body = await getId()
  setGuestId(body.guest_session_id || '')
}
