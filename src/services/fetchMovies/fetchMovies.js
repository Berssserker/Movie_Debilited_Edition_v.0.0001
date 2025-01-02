import { getMovie } from './getMovie'

export const fetchMovies = async (setGeneralListData, setGeneralLoading, text, page) => {
  const body = await getMovie(text, page)
  console.log(body.results)
  setGeneralListData(body.results || [])
  setGeneralLoading(false)
}
