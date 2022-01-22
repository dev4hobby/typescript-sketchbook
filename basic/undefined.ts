import { strict } from 'assert/strict'

interface INameable {
  name: string
}

interface IAgeable {
  age?: number
}

interface IHumanable {
  name: string
  age?: number
}

const getName = (o: INameable) => {
  return o != undefined ? o.name : 'unknown type'
}

const getAge = (o: IAgeable) => {
  return o != undefined && o.age ? o.age : 0
}

const getHuman: IHumanable = (name: string, age?: number) => {
  console.log(`arg: ${age}`)
}
