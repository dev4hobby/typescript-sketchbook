import { strict } from "assert"

export class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value
    return this
  }

  multiply(value: number) {
    this.value *= value
    return this
  }
}

const calc = new Calculator
const result = calc.add(1).add(2).multiply(3).multiply(4).value

console.log(result)