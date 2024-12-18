import { useState, useEffect } from 'react'

import { fetchMovies } from '../../api/fetchMovies/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page, tab) => {
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setMoviesData([])
    const debouncedFetchMovies = customDebounce(() => {
      fetchMovies(setError, setMoviesData, setLoading, text, page)
    }, 1000)
    if (text) {
      setLoading(true)
      debouncedFetchMovies()
    }
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, tab])
  return { moviesData, loading, error, setLoading }
}
