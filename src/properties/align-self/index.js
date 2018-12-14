import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
} from '../../utils'

export const alignSelfRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default (props, propName, componentName) => {
  if (!alignSelfRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
