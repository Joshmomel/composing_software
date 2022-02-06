import { reduce } from './reduce.js'

const filter = (fn, arr) =>
  reduce((acc, value) => (fn(value) ? acc.concat(value) : acc), [], arr)

// console.log(filter((x) => x > 2, [1, 2, 3, 4, 5]))
