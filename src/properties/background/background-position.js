import { position } from '@cloudpower97/css-data-types'

export const backgroundPositionRegex = new RegExp(position)

export default (props, propName, componentName) => {
  if (!backgroundPositionRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
