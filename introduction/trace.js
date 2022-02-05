import pipe from 'lodash/fp/flow.js'
import { g, f } from './compose.js'

const trace = (label) => (value) => {
  console.log(`${label} : ${value}`)
  return value
}

export const doStuffBetter = pipe(g, trace('after g'), f, trace('after f'))
