import React from 'react'

import { evaluationIndicator } from '../../utils/evaluationIndicator'

export const CardTitle = ({ ratingData, title, vote_average }) => {
  return (
    <div className="title">
      <span>{title}</span>
      <span style={{ borderColor: evaluationIndicator(ratingData) }}>{Math.ceil(vote_average * 10) / 10}</span>
    </div>
  )
}
