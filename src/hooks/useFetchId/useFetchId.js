import { useState, useEffect } from 'react'

import { fetchId } from '../../api/fetchId'

export const useFetchId = () => {
  const [guestId, setGuestId] = useState()
  useEffect(() => {
    fetchId(setGuestId)
  }, [])
  return guestId
}
