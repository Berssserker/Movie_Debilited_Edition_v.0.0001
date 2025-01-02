import { idURL } from '../../../public/idURL'

export const getId = async () => {
  try {
    const response = await fetch(idURL)
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`)
    }
    const body = await response.json()
    return body
  } catch {
    return {}
  }
}
