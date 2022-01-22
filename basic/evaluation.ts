import { strict } from 'assert/strict'

// eager evaluation
console.log(1 + 2)

// lazy evaluation
const x = (a: number, b: number) => {
  return a + b
}
console.log(x(1, 2))
