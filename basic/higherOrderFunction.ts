import { strict } from "assert"

const funcA = (a: number, b: number): number => a + b // 일반 함수
const funcB = (a: number): (number) => number => (b: number): number => a + b // 고차 함수

const result = funcB(10)(20)
console.log(result)


type NumberToNumberFunc = (number) => number
export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b // closure
  }
  return _add
}

const fn: NumberToNumberFunc = add(10)

const newResult = fn(5)
console.log(newResult)
console.log(add(10)(5))