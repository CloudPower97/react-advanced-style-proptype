import { validationError } from '../../utils'

const box = '(?:border-box|padding-box|content-box)'

export const backgroundClipRegex = new RegExp(`${box}(,\\s+${box})?`)

export default validationError(backgroundClipRegex, 'background-clip')
