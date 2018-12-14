import { lengthPercentage } from '../../utils'

export const rowGapRegex = new RegExp(`(?:normal|${lengthPercentage})`)

export default (props, propName, componentName) => {
  if (!rowGapRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
