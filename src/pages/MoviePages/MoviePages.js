import React, { useState } from 'react'

import { Search } from '../Search'
import { Rated } from '../Rated'

export const MoviePages = () => {
  const [component, setComponent] = useState(true)

  const toggleComponent = () => {
    setComponent((prev) => !prev)
  }

  return component ? <Search toggleComponent={toggleComponent} /> : <Rated toggleComponent={toggleComponent} />
}
