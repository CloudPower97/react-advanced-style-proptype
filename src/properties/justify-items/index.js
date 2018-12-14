import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
} from '../../utils'

/**
 * Legacy alignment: the legacy keyword, followed by one of left, right or center.
 */
const legacy = '(?:^legacy\\s+(right|left|center)$)'

export const justifyItemsRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition}|${legacy})`
)

export default (props, propName, componentName) => {
  if (!justifyItemsRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
