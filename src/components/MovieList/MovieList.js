import React from 'react'
import './MovieList.css'

import { MovieCard } from '../MovieCard'

export const MovieList = ({ generalListData, ratedListData, isRatedList, ...props }) => {
  if (!isRatedList) {
    generalListData?.map((item) => {
      const { id, ...itemProps } = ratedListData?.find((item2) => item2.id === item.id) || item
      return <MovieCard key={id} id={id} {...itemProps} {...props} />
    })
  } else {
    ratedListData?.map((item) => {
      const { id, ...itemProps } = item
      return <MovieCard key={id} id={id} {...itemProps} {...props} />
    })
  }
}
