import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
  validationError,
} from '../../utils'

export const justifyContentRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default validationError(justifyContentRegex, 'justify-content')
