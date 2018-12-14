const repeatStyle = '(?:(?:repeat-x|repeat-y)|(?:(?:repeat|space|round|no-repeat)\\s+){1,2})'

export const backgroundRepeatRegex = new RegExp(repeatStyle)

export default (props, propName, componentName) => {
  if (!backgroundRepeatRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
