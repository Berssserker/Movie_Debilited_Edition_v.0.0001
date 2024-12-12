import { useState, useEffect } from 'react'

import { getGenres } from '../../api/getGenres'

export const useFetchGenres = () => {
  const [genresData, setGenresData] = useState([])
  useEffect(() => {
    const fetchGenres = async () => {
      const body = await getGenres()
      setGenresData(body.genres || [])
    }
    fetchGenres()
  }, [])
  return genresData
}
