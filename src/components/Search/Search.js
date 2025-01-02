import React from 'react'
import { Input } from 'antd'

import './Search.css'

export const Search = ({ text, setText, setPage }) => {
  const onSearch = (value) => {
    setPage('1')
    setText(value)
  }
  return <Input size="large" value={text} placeholder="Type to search..." onChange={(e) => onSearch(e.target.value)} />
}
