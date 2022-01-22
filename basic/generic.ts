class Container<T> {
  constructor(public value: T) {}
}

let numberContainer: Container<number> = new Container<number>(5)
let stringContainer: Container<string> = new Container<string>('Hello')

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