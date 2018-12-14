import { lengthPercentage } from '../../utils'

export const columnGapRegex = new RegExp(`(?:normal|${lengthPercentage})`)

export default (props, propName, componentName) => {
  if (!columnGapRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
