export const g = (n) => n + 1;
export const f = (n) => n * 2;

const wait = (time) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

console.log('start');

wait(1000)
  .then(() => 20)
  .then(g)
  .then(f)
  .then((value) => console.log(value));
