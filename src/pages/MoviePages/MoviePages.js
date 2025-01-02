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
  const [page, setPage] = useState(1)
  const [activeList, setActiveList] = useState('1')
  const [ratedListData, setRatedListData] = useState([])
  const [generalLoading, setGeneralLoading] = useState(false)
  const [ratedLoading, setRatedLoading] = useState(false)

  return (
    <main className="movie">
      <Header setActiveList={setActiveList} />
      {!isOnline ? (
        <ErrorMessage isOnline={isOnline} />
      ) : (
        <>
          {activeList === '1' && (
            <GeneralList
              generalLoading={generalLoading}
              setGeneralLoading={setGeneralLoading}
              setRatedLoading={setRatedLoading}
              activeList={activeList}
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
          {activeList === '2' && (
            <RatedList
              ratedLoading={ratedLoading}
              setRatedLoading={setRatedLoading}
              activeList={activeList}
              guestId={guestId}
              genresData={genresData}
              ratedListData={ratedListData}
              setRatedListData={setRatedListData}
            />
          )}
          {activeList === '1' && text && <Footer page={page} setPage={setPage} />}
        </>
      )}
    </main>
  )
}
