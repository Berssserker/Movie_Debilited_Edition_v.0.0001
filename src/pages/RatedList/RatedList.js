import React from 'react'

import { MovieList } from '../../components/MovieList'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'

export const RatedList = ({ ratedListData, ratedLoading, ...props }) => {
  if (ratedListData.length === 0 && !ratedLoading) {
    return <ErrorMessage ratedListData={ratedListData} />
  }
  return <>{!ratedLoading ? <MovieList ratedListData={ratedListData} {...props} /> : <Loading />}</>
}
