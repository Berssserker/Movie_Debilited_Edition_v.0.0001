export const evaluationIndicator = (ratingData) => {
  let color = 'silver'
  if (ratingData) {
    ratingData <= 3
      ? (color = '#E90000')
      : ratingData <= 5
        ? (color = '#E97E00')
        : ratingData <= 7
          ? (color = '#E9D100')
          : (color = '#66E900')
  }
  return color
}
