import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
  validationError,
} from '../../utils'

export const alignSelfRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default validationError(alignSelfRegex, 'align-self')
