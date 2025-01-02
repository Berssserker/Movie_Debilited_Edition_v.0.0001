import { useState, useEffect } from 'react'

import { fetchMovies } from '../../services/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page, activeList, setGeneralLoading) => {
  const [generalListData, setGeneralListData] = useState([])
  const debouncedFetchMovies = customDebounce(() => {
    fetchMovies(setGeneralListData, setGeneralLoading, text, page)
  }, 1000)
  useEffect(() => {
    if (text) {
      setGeneralLoading(true)
      debouncedFetchMovies()
    } else {
      setGeneralListData([])
      setGeneralLoading(false)
    }
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, activeList])
  return generalListData
}
