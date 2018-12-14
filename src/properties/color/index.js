import { color } from '@cloudpower97/css-data-types'

export default (props, propName, componentName) => {
  if (!new RegExp(color).test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
