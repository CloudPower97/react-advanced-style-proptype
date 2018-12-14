import { length, percentage } from '@cloudpower97/css-data-types'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')

/* <baseline-position> = [ first | last ]? baseline */
export const baselinePosition = '(?:^baseline$|(?:(?:first|last)\\s+baseline))'

/* <content-distribution> = space-between | space-around | space-evenly | stretch */
export const contentDistribution = '(?:space-between|space-around|space-evenly|stretch)'

/* <overflow-position> = unsafe | safe */
export const overflowPosition = '(?:unsafe|safe)'

/* <content-position> = center | start | end | flex-start | flex-end */
export const contentPosition = '(?:center|start|end|flex-start|flex-end)'

export const lengthPercentage = `(?:${lengthReplace}|${percentageReplace})`
