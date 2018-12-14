import { lengthPercentage, validationError } from '../../utils'

export const columnGapRegex = new RegExp(`(?:normal|${lengthPercentage})`)

export default validationError(columnGapRegex, 'column-gap')
