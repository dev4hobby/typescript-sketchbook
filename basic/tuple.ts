import { strict } from "assert"

let tuple_any: any[] = [true, 'the result is ok']

const array: number[] = [1, 2, 3]
const tuple: [boolean, string] = [true, 'the result is ok']

export type ResultType = [boolean, string]

export const doSomething = (): ResultType => {
  try {
    throw new Error('error')
  } catch(e) {
    return [false, e.message]
  }
  return tuple
}

const [result, errorMessage] = doSomething()
console.log(result, errorMessage)