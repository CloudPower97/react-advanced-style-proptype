const box = '(?:border-box|padding-box|content-box)'

export const backgroundOriginRegex = new RegExp(`${box}(,\\s+${box})?`)

export default (props, propName, componentName) => {
  if (!backgroundOriginRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
