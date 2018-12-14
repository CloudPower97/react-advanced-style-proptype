import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
} from '../../utils'

export const justifySelfRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default (props, propName, componentName) => {
  if (!justifySelfRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
