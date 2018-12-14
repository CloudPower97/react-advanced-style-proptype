import { color } from '@cloudpower97/css-data-types'

export const backgroundColorRegex = new RegExp(color)

export default (props, propName, componentName) => {
  if (!backgroundColorRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
