const attachment = '(?:scroll|fixed|local)'

export const backgroundAttachmentRegex = new RegExp(`${attachment}(,\\s+${attachment})?`)

export default (props, propName, componentName) => {
  if (!backgroundAttachmentRegex.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`)
  }
}
