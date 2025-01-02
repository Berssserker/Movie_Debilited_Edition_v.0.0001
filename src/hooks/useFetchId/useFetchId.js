import { useState, useEffect } from 'react'

import { fetchId } from '../../services/fetchId'

export const useFetchId = () => {
  const [guestId, setGuestId] = useState()
  useEffect(() => {
    fetchId(setGuestId)
  }, [])
  return guestId
}
