export const fontKerningRegex = new RegExp('(?:auto|normal|none|inherit|initial|unset)')

export default (props, propName, componentName) => {
  if (!fontKerningRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
