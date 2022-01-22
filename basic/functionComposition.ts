import { strict } from "assert"

// 1 erity
const f = <T>(x: T): string => `f(${x})`
const g = <T>(x: T): string => `g(${x})`
const h = <T>(x: T): string => `h(${x})`
const y = h(g(f(1)))

const pipe = <T>(...functions: readonly Function[]): Function => (x: T): T => {
  return functions.reduce((value, func) => func(value), x)
}

const compose = <T>(...functions: readonly Function[]): Function => (x: T): T => {
  const deepCopiedFunctions = [...functions]
  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

const piped = pipe(f, g, h)
console.log(
  `piped >> ${piped('x')}`
)

const composed = compose(f, g, h)
console.log(
  `composed >> ${composed('x')}`
)


const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f)
const reduce = <T>(f: (acc: T, value: T) => T, initial: T) => (a: T[]): T => a.reduce(f, initial)
const square = value => value * value
const squaredMap = map(square)
const sum = (result, value) => result + value

const fourSquare = pipe(
  squaredMap,
  squaredMap,
)

console.log(
  fourSquare([3, 4])
)

const sumArray = reduce(sum, 0)

const pitagoras = pipe(
  squaredMap,
  sumArray,
  Math.sqrt
)

console.log(
  pitagoras([3, 4])
)


