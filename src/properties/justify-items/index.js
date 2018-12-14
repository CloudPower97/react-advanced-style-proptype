import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
  validationError,
} from '../../utils'

/**
 * Legacy alignment: the legacy keyword, followed by one of left, right or center.
 */
const legacy = '(?:^legacy\\s+(right|left|center)$)'

export const justifyItemsRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition}|${legacy})`
)

export default validationError(justifyItemsRegex, 'justify-items')
