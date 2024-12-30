import { useState, useEffect } from 'react'

import { fetchMovies } from '../../api/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page, component, setLoading) => {
  const [moviesData, setMoviesData] = useState([])
  const debouncedFetchMovies = customDebounce(() => {
    fetchMovies(setMoviesData, setLoading, text, page)
  }, 1000)
  useEffect(() => {
    if (text) {
      setMoviesData([])
      setLoading(true)
      debouncedFetchMovies()
    }
  }, [text, page, component])
  return moviesData
}
