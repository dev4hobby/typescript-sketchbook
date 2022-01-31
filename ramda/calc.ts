import { strict } from 'assert'
import { add, inc, subtract, multiply, divide, pipe, map, range, addIndex, flip } from 'ramda'

const incNumbers = pipe(map(add(1)))
const newNumbers = incNumbers(range(1, 10))

console.log(newNumbers)

// const subtract = a => b => a - b
// const subtractFrom10 = subtract(10)
const reverseSubtract = flip(subtract)
const newArray = pipe(map(reverseSubtract(10)))(range(1, 10))
console.log(newArray)

// example_1-> equation, ax^2 + bx + c
const exp = (N: number) => (x: number): number => x ** N
const square = exp(2)

type NumberToNumberFunc = (number) => number
export const f = (a: number, b: number, c: number): NumberToNumberFunc => (x: number): number =>
  add(add(multiply(a)(square(x)))(multiply(b)(x)), c)

// example_2-> equation, ax^2 + bx + c = 0
// if (a=1 && b=2 && c=1),  x^2 + 2x + 1 = (x + 1)^2

const quadratic = f(1, 2, 1)
const input: number[] = range(1, 10)
const quadraticResult = pipe(map(quadratic))(input)

console.log(quadraticResult)

const squareAfterInc = pipe(
  inc, square
)

const squareResult = pipe(map(squareAfterInc))(input)
console.log(squareResult)