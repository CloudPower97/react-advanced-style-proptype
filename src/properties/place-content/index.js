import { validationError } from '../../utils'
import { alignContent } from '../align-content/regex'
import { justifyContent } from '../justify-content/regex'

export const placeContentRegex = new RegExp(
  `(?:${alignContent.source}|${justifyContent.source}|(right|left))`
)

export default validationError(placeContentRegex, 'place-content')
