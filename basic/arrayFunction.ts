import { strict } from "assert"
/*
map, reduce, filter
*/

const multiply = (result, val) => result * val

let numbers: number [] = [1, 2, 3, 4, 5]
let tempResult = numbers.filter(val => val % 2 == 0).map(val => val * val).reduce(multiply, 1)
console.log(Math.round(Math.sqrt(tempResult)))
