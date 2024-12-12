import { useState, useEffect } from 'react'

import { getId } from '../../api/getId'

export const useFetchId = () => {
  const [guestId, setGuestId] = useState()
  const [errorId, setErrorId] = useState(false)
  useEffect(() => {
    const fetchId = async () => {
      const body = await getId(setErrorId)
      setGuestId(body.guest_session_id)
    }
    fetchId()
  }, [])
  return { guestId, errorId }
}
