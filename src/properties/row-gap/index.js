import { lengthPercentage, validationError } from '../../utils'

export const rowGapRegex = new RegExp(`(?:normal|${lengthPercentage})`)

export default validationError(rowGapRegex, 'row-gap')
