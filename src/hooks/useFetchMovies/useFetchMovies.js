import { useState, useEffect } from 'react'

import { fetchMovies } from '../../api/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page, component, setLoading) => {
  const [moviesData, setMoviesData] = useState([])
  useEffect(() => {
    setMoviesData([])
    const debouncedFetchMovies = customDebounce(() => {
      fetchMovies(setMoviesData, setLoading, text, page)
    }, 1000)
    if (text) {
      setLoading(true)
      debouncedFetchMovies()
    }
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, component])
  return moviesData
}
