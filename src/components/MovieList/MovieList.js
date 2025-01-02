import React from 'react'
import './MovieList.css'

import { MovieCard } from '../MovieCard'

export const MovieList = ({ generalListData = null, ratedListData, isRatedList, ...props }) => {
  if (isRatedList === '1') {
    return (
      <section className="movie-list">
        {generalListData?.map((item) => {
          const { id, ...itemProps } = ratedListData?.find((item2) => item2.id === item.id) || item
          return <MovieCard movieId={id} key={id} {...itemProps} {...props} />
        })}
      </section>
    )
  } else if (isRatedList === '2') {
    return (
      <section className="movie-list">
        {ratedListData?.map((item) => {
          const { id, ...itemProps } = item
          return <MovieCard key={id} id={id} {...itemProps} {...props} />
        })}
      </section>
    )
  }
}
