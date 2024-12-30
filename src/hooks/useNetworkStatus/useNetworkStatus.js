import { useState, useEffect, useCallback } from 'react'

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const checkNetworkStatus = useCallback(() => {
    setIsOnline(navigator.onLine)
  }, [navigator.onLine])

  useEffect(() => {
    const intervalId = setInterval(checkNetworkStatus, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [isOnline])
  return isOnline
}
