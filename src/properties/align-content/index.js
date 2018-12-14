import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
} from '../../utils'

export const alignContentRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default (props, propName, componentName) => {
  if (!alignContentRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
