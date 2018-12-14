import { validationError } from '../../utils'
import { integer } from '@cloudpower97/css-data-types'

const featureTagValue = new RegExp(
  `(?:(?:"\\w{4}"|'\\w{4}'|\\w{4}),?(\\s+(?:${integer.source}|on|off))?)`
)

export const fontFeatureSettingsRegex = new RegExp(`(?:(^normal$)|${featureTagValue.source})`)

export default validationError(fontFeatureSettingsRegex, 'font-feature-settings')
