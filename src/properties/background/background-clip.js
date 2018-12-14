const box = '(?:border-box|padding-box|content-box)'

export const backgroundClipRegex = new RegExp(`${box}(,\\s+${box})?`)

export default (props, propName, componentName) => {
  if (!backgroundClipRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
