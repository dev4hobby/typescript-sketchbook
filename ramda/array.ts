import { strict } from "assert";
import { map, pipe, inc, range, tap } from "ramda";

// declarative programming
const value = 1
const newValue = inc(value)
console.log(newValue)

const newArray = pipe(map(inc))([1, 2, 3])
console.log(newArray)

const numbers: number[] = range(1, 10)
const incNumbers = pipe(map(inc))
const newNumbers = incNumbers(numbers)

console.log(newNumbers)