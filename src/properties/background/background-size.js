import { length, percentage, keywords } from '@cloudpower97/css-data-types'

export const backgroundSizeRegex = new RegExp(
  `(?:${length}|${percentage}|auto\\s*){1,2}|(?:cover|contain)|${keywords}`
)

export default (props, propName, componentName) => {
  if (!backgroundSizeRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
