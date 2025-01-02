import React, { useState } from 'react'
import { Card, Rate, Spin } from 'antd'

import './MovieCard.css'

import { rateAndFetchMovies } from '../../api/rate&FetchRatedMovies'
import { imageURL } from '../../public/imageURL'
import { plug } from '../../public/plug'

import { CardMeta } from './CardMeta'

export const MovieCard = ({ guestId, id, poster_path, rating, setRatedListData, setRatedLoading, ...props }) => {
  const [ratingData, setRatingData] = useState(rating || 0)
  const [cardLoading, setCardLoading] = useState(false)

  const fullImageUrl = poster_path ? imageURL + poster_path : plug

  const ChangeRating = async (e) => {
    setCardLoading(true)
    await rateAndFetchMovies(guestId, id, e, setRatedListData, setRatedLoading)
    setCardLoading(false)
    setRatingData(e)
  }

  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <CardMeta ratingData={ratingData} {...props} />
      {!cardLoading ? <Rate value={ratingData} count={10} allowHalf onChange={(e) => ChangeRating(e)} /> : <Spin />}
    </Card>
  )
}
