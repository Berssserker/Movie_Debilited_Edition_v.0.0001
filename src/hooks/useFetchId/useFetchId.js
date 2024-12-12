import { useState, useEffect } from 'react'

import { fetchId } from '../../api/fetchId'

export const useFetchId = () => {
  const [guestId, setGuestId] = useState()
  const [errorId, setErrorId] = useState(false)
  useEffect(() => {
    fetchId(setErrorId, setGuestId)
  }, [])
  return { guestId, errorId }
}
