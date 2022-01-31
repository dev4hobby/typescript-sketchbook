import { strict } from 'assert'
import { range, tap, pipe, add, curryN } from 'ramda'

// range(1, 5) // [1, 2, 3, 4]
const array: number[] = range(1, 9 + 1)
pipe(tap(n => console.log(n)))(array)         // pipe, tap

const dump = <T>(array: T[]): T[] => pipe(    // pointless function
  tap(n => console.log(n))
)(array) as T[]

dump(range(1, 10))

console.log(add(1, 2), add(1)(2))             // add is curried (auto curried)

const sum = (...numbers: number[]): number => numbers.reduce((result:number, sum: number) => result + sum, 0)
const curriedSum = curryN(4, sum)

console.log(curriedSum(1)(2)(3)(4))
