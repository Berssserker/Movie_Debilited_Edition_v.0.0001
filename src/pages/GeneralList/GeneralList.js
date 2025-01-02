import React, { useState } from 'react'

import { useFetchMovies } from '../../hooks/useFetchMovies'
import { MovieList } from '../../components/MovieList'
import { Search } from '../../components/Search/Search'

export const GeneralList = ({ text, page, isRatedList, ...props }) => {
  const [loading, setLoading] = useState(false)

  const generalListData = useFetchMovies(text, page, isRatedList, setLoading)

  return (
    <>
      <Search text={text} {...props} />
      <MovieList
        loading={loading}
        generalListData={generalListData}
        isRatedList={isRatedList}
        setLoading={setLoading}
        {...props}
      />
    </>
  )
}
