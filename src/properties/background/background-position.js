import { validationError } from '../../utils'
import { position } from '@cloudpower97/css-data-types'

export const backgroundPositionRegex = new RegExp(position)

export default validationError(backgroundPositionRegex, 'background-position')
