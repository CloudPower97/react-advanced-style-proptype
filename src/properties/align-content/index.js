import {
  baselinePosition,
  contentDistribution,
  overflowPosition,
  contentPosition,
  validationError,
} from '../../utils'

export const alignContentRegex = new RegExp(
  `(?:normal|${baselinePosition}|${contentDistribution}|${overflowPosition}|${contentPosition})`
)

export default validationError(alignContentRegex, 'align-content')
