import React from 'react'

import { MovieList } from '../../components/MovieList'

export const RatedList = ({ ...props }) => {
  return (
    <>
      <MovieList {...props} />
    </>
  )
}
