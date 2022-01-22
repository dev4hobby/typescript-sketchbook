import { strict } from 'assert/strict'

const add = new Function('a', 'b', 'return a + b')
// function call operator
const result = add(1, 2)
console.log(result)

// first-class function example
let add2 = function (a: number, b: number) {
  return a + b
}
console.log(add2(2, 3))

// anonymous function
add2 = (a: number, b: number) => a - b
console.log(add2(3, 4))
