import { rowGapRegex } from '../row-gap'
import { columnGapRegex } from '../column-gap'

export const gapRegex = new RegExp(`(?:${rowGapRegex.source}|${columnGapRegex.source})`)

export default (props, propName, componentName) => {
  if (!gapRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
