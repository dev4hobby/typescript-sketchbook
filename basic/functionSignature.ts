import { strict } from "assert"

const printPerson_01: (string, number) => void = (
  name: string,
  age: number
): void => {}
const printPerson_02: (string, number) => void = function (
  name: string,
  age: number
): void {}

type personSignature = (string, number) => void
const printPerson_03: personSignature = function (
  name: string,
  age: number
): void {}

export type FirstOrderFunc<T, R> = (arg: T) => R
export type SecondOrderFunc<T, R> = (arg1: T) => FirstOrderFunc<T, R>
export type ThirdOrderFunc<T, R> = (arg1: T) => SecondOrderFunc<T, R>

const inc: FirstOrderFunc<number, number> = (x: number):number => x + 1
console.log(inc(1))

const add: SecondOrderFunc<number, number> = (x: number): FirstOrderFunc<number, number> => 
  (y: number): number => x + y
console.log(add(1)(2))

const add2: ThirdOrderFunc<number, number> = (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrderFunc<number, number> =>
  (z: number): number => x + y + z
console.log(add2(1)(2)(3))