import { color } from '@cloudpower97/css-data-types'
import { validationError } from '../../utils'

export const backgroundColorRegex = new RegExp(color)

export default validationError(backgroundColorRegex, 'background-color')
