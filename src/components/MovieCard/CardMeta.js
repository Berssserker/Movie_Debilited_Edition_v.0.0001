import React from 'react'
import { Card } from 'antd'

import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'

export const CardMeta = ({ ...props }) => {
  const { Meta } = Card
  return <Meta title={<CardTitle {...props} />} description={<CardDescription {...props} />} />
}
