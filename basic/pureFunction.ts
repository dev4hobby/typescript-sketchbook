import { strict } from "assert";

/*
순수 함수는 Side-effect가 없는 함수

함수 몸통에 입출력 관련 코드가 없어야함
함수 몸통에서 파라미터를 변경시키지 않음
함수는 몸통에서 만들어진 결과를 즉시 반환
함수 내부에 전역변수나 정적변수를 사용하지않음
함수가 예외를 발생시키지 않음
함수가 콜백함수로 구현되었거나 함수 몸통에 콜백함수를 사용하는 코드가 없다
함수 몸통에 Promise와 같은 비동기 방식으로 동작하는 코드가 없다
*/

function pure(a: number, b: number): number { return a + b }
function pureArray(a: readonly number []): number  { return a.length }

// Sort
export const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [ ...array ]
  return deepCopied.sort()
}

let beforeSort = [ 1, 4, 2, 3, 5 ]
const afterSort = pureSort(beforeSort)
console.log(beforeSort, afterSort)

// Filter
export const pureDelete = <T>(array: readonly T[], cb: (value: T, index?: number) => boolean): T[] =>
  array.filter((val, index) => cb(val, index) == false)

const mixedArray: object[] = [
  [], {name: 'Jack'}, {name: 'Jill', age: 32}, ['description']
]
const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
console.log(objectsOnly)

// merge array

export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = []
  for(let index=0; index < arrays.length; index++) {
    const array: T[] = arrays[index]
    // spread and merge
    result = [...result, ...array]
  }
  return result
}
console.log([1, 2, 3], [4, 5, 6], mergeArray([1, 2, 3], [4, 5, 6]))