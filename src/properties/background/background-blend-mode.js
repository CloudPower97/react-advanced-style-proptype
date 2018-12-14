import { validationError } from '../../utils'
import { blendMode } from '@cloudpower97/css-data-types'

export const backgroundBlendModeRegex = new RegExp(blendMode)

export default validationError(backgroundBlendModeRegex, 'background-blend-mode')
