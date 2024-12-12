import { useState, useEffect } from 'react'

import { fetchGenres } from '../../api/fetchGenres'

export const useFetchGenres = () => {
  const [genresData, setGenresData] = useState([])
  useEffect(() => {
    fetchGenres(setGenresData)
  }, [])
  return genresData
}
