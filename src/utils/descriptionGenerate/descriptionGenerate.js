export const descriptionGenerate = (isOnline, ratedListData, generalListData) => {
  if (isOnline !== undefined && !isOnline) {
    return 'There is no internet connection.'
  } else if (ratedListData !== undefined && !ratedListData) {
    return 'We have not found the films you rated.'
  } else if (generalListData !== undefined && !generalListData) {
    return 'No data was found.'
  }
}
