import React from 'react'

export const MovieGenres = ({ genre_ids }) => {
  return genre_ids?.map((item) => {
    const genre = genre_ids.find((item2) => item2.id === item) // Используйте find вместо filter
    return genre ? <span key={genre.id}>{genre.name}</span> : null // Проверка на существование
  })
}
