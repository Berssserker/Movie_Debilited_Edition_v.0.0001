import React from 'react'
import { Tabs } from 'antd'

import './Header.css'

export const Header = ({ setIsRatedList }) => {
  const onChange = (key) => {
    setIsRatedList(key)
  }
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={new Array(2).fill(null).map((_, i) => {
        const id = String(i + 1)
        return {
          label: id === '1' ? 'Search' : 'Rated',
          key: id,
        }
      })}
      onChange={onChange}
    />
  )
}
