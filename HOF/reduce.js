export const reduce = (reducer, initial, arr) => {
  let acc = initial

  for (let i = 0, { length } = arr; i < length; i++) {
    acc = reducer(acc, arr[i])
  }

  return acc
}

const myReducerAdder = (acc, curr) => acc + curr

// console.log(reduce(myReducerAdder, 0, [1, 2, 3]))

const myReducerFilter = (acc, curr) => {
  const word = curr
  if (word.startsWith('s')) {
    acc.push(word)
  }

  return acc
}

// console.log(reduce(myReducerFilter, [], ['oops', 'gasp', 'shout', 'sun']))
