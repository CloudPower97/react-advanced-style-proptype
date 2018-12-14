import { rowGapRegex } from '../row-gap'
import { columnGapRegex } from '../column-gap'
import { validationError } from '../../utils/index'

export const gapRegex = new RegExp(`(?:${rowGapRegex.source}|${columnGapRegex.source})`)

export default validationError(gapRegex, 'gap')
