import { strict } from "assert"

class A {
  value: number = 1
  method: () => void = function(): void {
    console.log(`value: ${this.value}`)
  }
}

class B {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(`value: ${this.value}`)
  }
}

class C {
  static whoAreYou(): string {
    return 'I am C'
  }
}

class D {
  static whoAreYou(): string {
    return 'I am D'
  }
}

const a: A = new A
const b: B = new B
a.method()
b.method()
console.log(C.whoAreYou())
console.log(D.whoAreYou())