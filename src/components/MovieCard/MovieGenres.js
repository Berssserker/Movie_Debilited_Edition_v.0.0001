import React from 'react'

export const MovieGenres = ({ genresData, genre_ids }) => {
  return genre_ids?.map((item) => {
    const genre = genresData.find((item2) => item2.id === item) // Используйте find вместо filter
    return genre ? <span key={genre.id}>{genre.name}</span> : null // Проверка на существование
  })
}
