import { alignContent } from '../align-content/regex'
import { justifyContent } from '../justify-content/regex'

export const placeItemsRegex = new RegExp(
  `(?:${alignContent.source}|${justifyContent.source}|(right|left))`
)

export default (props, propName, componentName) => {
  if (!placeItemsRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
