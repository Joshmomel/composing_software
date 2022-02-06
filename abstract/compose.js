
const compose = (...fns) => (x) => fns.reduceRight((state, value)=>{
  return value(state)
}, x)


const g = n => n + 1
const h = n => n * 10

const composeFns = compose(g, h)

const composeFnsData = composeFns(2)

console.log(composeFnsData)
