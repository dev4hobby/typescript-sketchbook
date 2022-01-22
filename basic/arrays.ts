import { strict } from "assert"

let array = new Array
array.push(1)
array.push(2)
array.push(3)

console.log(array)

let numbers = [1, 2, 3]
let strings = ["one", "two", "three"]

console.log(numbers, strings)

let mixedArray = [1, "two", 3, "four", 5]
let myObject = { name: "John", age: 30 }

// Check array object
console.log(Array.isArray(mixedArray), Array.isArray(myObject))

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ["hello", "world"]

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jill', age: 30}]

// split and join
export const split = (str: string, delimiter: string = ''): string[] => str.split(delimiter)
export const join = (strArray: string[], delimiter: string = ''): string => strArray.join(delimiter)
export const range = (from: number, to: number): number[] => from < to ? [from, ...range(from + 1, to)] : []


console.log(split('hello world'))
console.log(join(['hello', 'world']))

// for,  index
const newNumbers: number[] = [1, 2, 3, 4, 5]

// destructuring and spread
let [first, second, third, ...rest] = newNumbers
console.log(first, second, third, rest)

// Array generic
const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0

/*
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ["hello", "world"]

type Iperson = {name: string, age?: number}
let personArray: Iperson[] = [{name: 'Jack'}, {name: 'Jill', age: 30}]

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]]),
  isEmpty([1]),
)
*/

// generic type interface
const identity = <T>(n: T): T => n
console.log(
  identity<boolean>(true),
  identity(true)
)

