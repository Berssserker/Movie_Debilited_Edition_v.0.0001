import React, { useState } from 'react'

import { Search } from '../Search'
import { Rated } from '../Rated'
import { useFetchId } from '../../hooks/useFetchId'
import { useNetworkStatus } from '../../hooks/useNetworkStatus'
import { useFetchGenres } from '../../hooks/useFetchGenres'

export const MoviePages = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [component, setComponent] = useState(true)
  const [ratedMoviesData, setRatedMoviesData] = useState([])

  const guestId = useFetchId()
  const genres = useFetchGenres()
  const isOnline = useNetworkStatus()

  return (
    <main>
      <Header setComponent={setComponent} />
      {!isOnline || !guestId || genres.length === 0 ? (
        <ErrorMessage isOnline={isOnline} guestId={guestId} genres={genres} />
      ) : component ? (
        <Search />
      ) : (
        <Rated />
      )}
    </main>
  )
}
