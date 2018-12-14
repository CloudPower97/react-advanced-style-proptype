import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
} from '../../utils'

export const justifyContentRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default (props, propName, componentName) => {
  if (!justifyContentRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
