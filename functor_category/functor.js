const trace = (x) => {
  console.log(x)
  return x
}

const increase = (x) => {
  console.log(x + 1)
  return x + 1
}

const Identity = (v) => ({
  then: (fn) => Identity(fn(v)),
  finial: (fn) => fn(v),
})

const u = Identity(2)

const r1 = u
const r2 = u.then((x) => x)

r1.then(trace)
r2.then(trace)

r1.then(increase).then(increase).then(increase).finial(increase)

const a = [].map(increase)

console.log(a)
