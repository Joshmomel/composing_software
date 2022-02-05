const x = {
  val: 2,
}

const addx = () => (x.val += 1)
const doublex = () => (x.val *= 2)

addx()
doublex()

console.log('x val is', x.val) // 6

// change order

const x2 = {
  val: 2,
}

const addx2 = () => (x2.val += 1)
const doublex2 = () => (x2.val *= 2)

doublex2()
addx2()

console.log('x1 val is', x2.val) //5

const add = (y) => ({ ...y, val: y.val + 1 })
const double = (y) => ({ ...y, val: y.val * 2 })

const y = {
  val: 2,
}

// these call do nothing
double(y)
add(y)

console.log('y val is', double(add(y)).val) // 6

