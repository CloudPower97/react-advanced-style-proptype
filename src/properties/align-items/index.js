import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
  validationError,
} from '../../utils'

export const alignItemsRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default validationError(alignItemsRegex, 'align-items')
