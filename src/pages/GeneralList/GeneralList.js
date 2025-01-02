import React from 'react'

import { useFetchMovies } from '../../hooks/useFetchMovies'
import { MovieList } from '../../components/MovieList'
import { Search } from '../../components/Search/Search'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'

export const GeneralList = ({ text, page, activeList, generalLoading, setGeneralLoading, ...props }) => {
  const generalListData = useFetchMovies(text, page, activeList, setGeneralLoading)

  if (generalListData.length === 0 && !generalLoading && text) {
    return (
      <>
        <Search text={text} {...props} />
        <ErrorMessage generalListData={generalListData} />
      </>
    )
  }
  return (
    <>
      <Search text={text} {...props} />
      {!generalLoading ? (
        <MovieList
          generalListData={generalListData}
          activeList={activeList}
          setGeneralLoading={setGeneralLoading}
          {...props}
        />
      ) : (
        <Loading />
      )}
    </>
  )
}
