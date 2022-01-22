import { strict } from "assert"

interface Person {
  name: string
  age?: number
}

export const makePerson = (name: string, age: number = 10): Person => ({name, age})

console.log(makePerson('John'))
console.log(makePerson('John', 20))