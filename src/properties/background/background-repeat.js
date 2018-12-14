import { validationError } from '../../utils'

const repeatStyle = '(?:(?:repeat-x|repeat-y)|(?:(?:repeat|space|round|no-repeat)\\s+){1,2})'

export const backgroundRepeatRegex = new RegExp(repeatStyle)

export default validationError(backgroundRepeatRegex, 'background-repeat')
