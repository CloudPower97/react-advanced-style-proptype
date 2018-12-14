import { validationError } from '../../utils'

const attachment = '(?:scroll|fixed|local)'

export const backgroundAttachmentRegex = new RegExp(`${attachment}(,\\s+${attachment})?`)

export default validationError(backgroundAttachmentRegex, 'background-attachment')
