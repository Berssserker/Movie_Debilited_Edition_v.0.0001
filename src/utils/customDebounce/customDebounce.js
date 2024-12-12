import debounce from 'lodash.debounce'

export const customDebounce = (func, wait) => {
  return debounce(func, wait)
}
