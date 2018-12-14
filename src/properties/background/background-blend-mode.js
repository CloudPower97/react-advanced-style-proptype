import { blendMode } from '@cloudpower97/css-data-types'

export const backgroundBlendModeRegex = new RegExp(blendMode)

export default (props, propName, componentName) => {
  if (!backgroundBlendModeRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
