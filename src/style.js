import toSlugCase from 'to-slug-case'
import { all as properties } from 'known-css-properties'

import * as rules from './regex'

export default (props, propName, componentName) => {
  const styles = props[propName]

  if (!styles) {
    return
  }

  let propertyFailures = []
  let valueFailures = []

  Object.entries(styles).forEach(([property, value]) => {
    const propertySlugCase = toSlugCase(property)

    if (properties.includes(propertySlugCase)) {
      if (rules[property]) {
        if (!rules[property].test(value)) {
          valueFailures.push([property, value])
        }
      } else {
        if (!/^(webkit|moz|ms|o)/g.test(propertySlugCase)) {
          /* eslint-disable-next-line */
          console.warn(`\`${propertySlugCase}\` CSS property validation is missing from react-advanced-style-proptypes.
          Check if \`${propertySlugCase}: ${value}\` is valid here : https://developer.mozilla.org/en-US/docs/Web/CSS/${propertySlugCase}\n
          Feel free to open an issue or create a PR for this feature!
          `)
        }
      }
    } else {
      propertyFailures.push(property)
    }
  })

  if (propertyFailures.length) {
    throw new Error(
      `Prop ${propName} passed to ${componentName} has unkown CSS properties: \`${propertyFailures
        .map(property => toSlugCase(property))
        .join(', ')}\``
    )
  }

  if (valueFailures.length) {
    valueFailures.forEach(([property, value]) => {
      const propertySlugCase = toSlugCase(property)

      throw new Error(
        `Prop ${propName} passed to ${componentName} has invalid CSS property \`${propertySlugCase}: ${value}\`\nRead more here: https://developer.mozilla.org/en-US/docs/Web/CSS/${propertySlugCase}`
      )
    })
  }
}
