const map = (fn, arr) =>
  arr.reduce((state, val) => {
    return state.concat(fn(val))
  }, [])

const list = [1, 2, 3]
const fn = (n) => n * 10

const mapData = map(fn, list)

console.log(mapData)
