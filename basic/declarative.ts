/*
배열은 선언형 프로그래밍을 구현할 때 절대적으로 필요한 문법 기능
선언형 방식은 명령형 방식 위에서 동작하는 인간에게 좀 더 친화적인 고수준 구현방식
*/

/*
명령형 예시

let sum = 0
for (let i = 0; i < 10; i++) {
  sum += i
}
*/

/*
선언형 예시: Basic
*/
import { strict } from 'assert'
import { range } from './arrays'

const numbers: number[] = range(1, 10 + 1)
console.log(numbers)

/*
선언형 예시: Fold
범용적으로 구현된 함수를 재사용하면서 문제를 해결함
*/
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue
  for (let i=0; i< array.length; ++i) {
    const value = array[i]
    result = callback(result, value)
  }
  return result
}

const result = fold(numbers, (result, value) => result + value, 0)
console.log(result)


/*
선언형 예시: Filter
*/
export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = []
  for (let index:number=0; index< array.length; ++index) {
    const value = array[index]
    if (callback(value, index)) {
      result = [...result, value]
    }
  }
  return result
}

const isOdd = (n: number): boolean => n % 2 != 0
let result_2 = fold(
  filter(numbers, isOdd),
  (result_2, value) => result_2 + value, 0
)
console.log(result_2)

/*
선언형 예시: Map
*/
export const map = <T, U>(array: T[], callback: (value: T, index?: number) => U): U[] => {
  let result: U[] = []
  for (let index:number=0; index< array.length; ++index) {
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}

let result_3 = fold(
  map(numbers, value => value * value),
  (result, value) => result + value, 0
)
console.log(result_3)

