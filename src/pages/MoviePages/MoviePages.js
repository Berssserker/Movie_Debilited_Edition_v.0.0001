import React, { useState } from 'react'

import { GeneralList } from '../GeneralList'
import { RatedList } from '../RatedList'
import { useFetchId } from '../../hooks/useFetchId'
import { useNetworkStatus } from '../../hooks/useNetworkStatus'
import { useFetchGenres } from '../../hooks/useFetchGenres'

export const MoviePages = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState(1)
  const [isRatedListList, setIsRatedListList] = useState(false)
  const [RatedListMoviesData, setRatedListMoviesData] = useState([])

  const guestId = useFetchId()
  const genres = useFetchGenres()
  const isOnline = useNetworkStatus()

  return (
    <main>
      <Header setComponent={setComponent} />
      {!isOnline || !guestId ? (
        <ErrorMessage isOnline={isOnline} guestId={guestId} />
      ) : (
        <>
          {!isRatedListList && <GeneralList />}
          {isRatedListList && <RatedListList />}
        </>
      )}
    </main>
  )
}
