export const descriptionGenerate = (isOnline, ratedListData, generalListData) => {
  if (isOnline !== undefined) {
    return 'There is no internet connection.'
  } else if (ratedListData !== undefined) {
    return 'We have not found the films you rated.'
  } else if (generalListData !== undefined) {
    return 'No data was found.'
  }
}
