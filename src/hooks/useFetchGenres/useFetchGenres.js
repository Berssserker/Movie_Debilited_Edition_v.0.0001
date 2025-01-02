import { useState, useEffect } from 'react'

import { fetchGenres } from '../../services/fetchGenres'

export const useFetchGenres = () => {
  const [genresData, setGenresData] = useState([])
  useEffect(() => {
    fetchGenres(setGenresData)
  }, [])
  return genresData
}
