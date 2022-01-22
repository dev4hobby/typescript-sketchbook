import { strict } from 'assert/strict'

export default interface INameable {
  name: string
}

const person: object = { name: 'Max', age: 27 }

// type conversion
;(<{ name: string }>person).name

// type assertion
const name_01 = (<INameable>person).name
const name_02 = (person as INameable).name
console.log(name_01, name_02)
