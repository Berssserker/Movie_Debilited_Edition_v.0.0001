import React, { useState } from 'react'

import './MoviePages.css'

import { useFetchId } from '../../hooks/useFetchId'
import { useNetworkStatus } from '../../hooks/useNetworkStatus'
import { useFetchGenres } from '../../hooks/useFetchGenres'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Header } from '../../components/Header'
import { GeneralList } from '../GeneralList'
import { RatedList } from '../RatedList'
import { Footer } from '../../components/Footer'

export const MoviePages = () => {
  const isOnline = useNetworkStatus()
  const genresData = useFetchGenres()
  const guestId = useFetchId()

  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [isRatedList, setIsRatedList] = useState('1')
  const [ratedListData, setRatedListData] = useState([])

  return (
    <main className="movie">
      <Header isRatedList={isRatedList} setIsRatedList={setIsRatedList} />
      {!isOnline ? (
        <ErrorMessage isOnline={isOnline} />
      ) : (
        <>
          {isRatedList === '1' && (
            <GeneralList
              isRatedList={isRatedList}
              guestId={guestId}
              ratedListData={ratedListData}
              setRatedListData={setRatedListData}
              genresData={genresData}
              text={text}
              setText={setText}
              page={page}
              setPage={setPage}
            />
          )}
          {isRatedList === '2' && (
            <RatedList
              guestId={guestId}
              genresData={genresData}
              ratedListData={ratedListData}
              setRatedListData={setRatedListData}
            />
          )}
          {isRatedList === '1' && text && <Footer page={page} setPage={setPage} />}
        </>
      )}
    </main>
  )
}
