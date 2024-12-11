import { useState, useEffect } from 'react'

import { getGenres } from '../../api/getGenres'

const useFetchGenres = () => {
  const [genresData, setGenresData] = useState([])
  useEffect(() => {
    const Fetch = async () => {
      try {
        const body = await getGenres()
        setGenresData(body.genres)
      } catch {
        setGenresData([])
      }
    }
    Fetch()
  }, [])
  return genresData
}

export default useFetchGenres
