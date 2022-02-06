const label = 'Promise composition'

const trace = (label) => (value) => {
  console.log(`label is ${label} value is ${value} `)
  return value
}

const composePromises = (...ms) => ms.reduce((f, g) => (x) => g(x).then(f))

const g = (n) => Promise.resolve(n + 1)
const f = (n) => Promise.resolve(n * 2)

const h = composePromises(f, g)

h(20).then(trace(label))
