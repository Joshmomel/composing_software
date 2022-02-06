import { trace } from '../introduction/trace.js'

const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((prev, curr) => curr(prev), initialValue)

const g = (n) => n + 1
const f = (n) => n * 2

const h = compose(trace('f'), f, trace('g'), g)

console.log('h(10) is', h(10))

const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((prev, curr) => curr(prev), initialValue)

const t = pipe(f, trace('f'), g, trace('g'))
console.log('t(10) is', t(10))
