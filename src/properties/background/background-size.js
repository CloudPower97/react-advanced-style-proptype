import { validationError } from '../../utils'
import { length, percentage, keywords } from '@cloudpower97/css-data-types'

export const backgroundSizeRegex = new RegExp(
  `(?:${length}|${percentage}|auto\\s*){1,2}|(?:cover|contain)|${keywords}`
)

export default validationError(backgroundSizeRegex, 'background-size')
