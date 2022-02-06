const filter = (fn, arr) =>
  arr.reduce((state, value) => {
    return fn(value) ? state.concat(value) : state
  }, [])

const fn = (n) => n > 2
const arr = [1, 2, 3, 4, 5]

const filterData = filter(fn, arr)

console.log(filterData)
