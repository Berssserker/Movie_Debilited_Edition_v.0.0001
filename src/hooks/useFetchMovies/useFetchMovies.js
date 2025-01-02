import { useState, useEffect } from 'react'

import { fetchMovies } from '../../api/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page, isRatedList, setLoading) => {
  const [generalListData, setGeneralListData] = useState([])
  const debouncedFetchMovies = customDebounce(() => {
    fetchMovies(setGeneralListData, setLoading, text, page)
  }, 1000)
  useEffect(() => {
    if (text) {
      setGeneralListData([])
      setLoading(true)
      debouncedFetchMovies()
    }
  }, [text, page, isRatedList])
  return generalListData
}
