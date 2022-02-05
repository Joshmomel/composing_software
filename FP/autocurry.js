const curry =
  (f, arr = []) =>
  (...args) =>
    ((a) => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args])

const add3 = curry((a, b, c) => a + b + c)

add3(1, 2, 3)

console.log(add3(1, 2, 3))

console.log(add3(1)(2, 3))
