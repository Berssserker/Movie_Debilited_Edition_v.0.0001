import React from 'react'

import { MovieList } from '../../components/MovieList'

export const RatedList = ({ ...props }) => {
  return (
    <section className="movie-list">
      <MovieList {...props} />
    </section>
  )
}
