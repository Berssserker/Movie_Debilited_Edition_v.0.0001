import React from 'react'
import './MovieList.css'

import { MovieCard } from '../MovieCard'

export const MovieList = ({ generalListData, ratedListData, activeList, ...props }) => {
  if (activeList === '1') {
    return (
      <section className="movie-list">
        {generalListData?.map((item) => {
          const { id, ...itemProps } = ratedListData?.find((item2) => item2.id === item.id) || item
          return <MovieCard id={id} key={id} activeList={activeList} {...itemProps} {...props} />
        })}
      </section>
    )
  } else if (activeList === '2') {
    return (
      <section className="movie-list">
        {ratedListData?.map((item) => {
          const { id, ...itemProps } = item
          return <MovieCard id={id} key={id} activeList={activeList} {...itemProps} {...props} />
        })}
      </section>
    )
  }
}
