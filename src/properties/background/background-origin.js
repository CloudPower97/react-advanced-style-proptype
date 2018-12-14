import { validationError } from '../../utils'

const box = '(?:border-box|padding-box|content-box)'

export const backgroundOriginRegex = new RegExp(`${box}(,\\s+${box})?`)

export default validationError(backgroundOriginRegex, 'background-origin')
