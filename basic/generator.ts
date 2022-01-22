import { strict } from "assert";

// 'function*' is a command to the generator function
export function* generator(): Generator<number, void, undefined> {
  // 'yield' make the generator function to be a generator
  yield* [1, 2, 3];
}

export function* rangeGenerator(from: number, to: number) {
  let value = from
  while(value < to) {
    yield value++
  }
}

export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[] = [], private currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while(this.currentIndex < this.values.length)
      yield this.values[this.currentIndex++]
  }
}

function* gen123() {
  // yield [1, 2, 3] -> [1, 2, 3]
  yield* [1, 2, 3] // -> 1, 2, 3
}

export function* gen123456() {
  yield* gen123()
  yield* [4, 5]
  yield 6
}

// by using 'while'
let iterator = rangeGenerator(1, 5)
while(true) {
  const { value, done } = iterator.next()
  if(done) break
  console.log(value)
}

// by using 'for ... of'
for(let value of rangeGenerator(5, 8)) {
  console.log(value)
}

for(let item of new IterableUsingGenerator([8, 9, 10])) {
  console.log(item)
}

for(let item of gen123456()) {
  console.log(item)
}