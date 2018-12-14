import { validationError } from '../../utils'

export const fontKerningRegex = new RegExp('(?:auto|normal|none|inherit|initial|unset)')

export default validationError(fontKerningRegex, 'font-kerning')
