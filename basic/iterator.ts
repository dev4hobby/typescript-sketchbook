import { strict } from "assert";

export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value === undefined
      return { value, done }
    }
  }
}

export class RangeIterable {
  constructor(public from: number, public to: number) {} 
  [Symbol.iterator]() {
    const that = this
    let currentValue = that.from
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined
        const done = value === undefined
        return { value, done }
      }
    }
  }
}

export class StringIterable implements Iterable<string>{
  constructor(private strings: string[] = [], private currentIndex: number = 0) {}
  [Symbol.iterator](): Iterator<string> {
    const that = this
    let currentIndex = that.currentIndex, length = that.strings.length

    const iterator: Iterator<string> = {
      next(): {value: string, done: boolean} {
        const value = currentIndex < length ? that.strings[currentIndex++] : undefined
        const done = value === undefined
        return { value, done }
      }
    }
    return iterator
  }
}

const iterator = createRangeIterable(1, 3)
while(true) {
  const { value, done } = iterator.next()
  if(done) break
  console.log(value)
}

const iterator_range = new RangeIterable(1, 3)

for (let value of iterator_range)
  console.log(value)

const iterator_string = new StringIterable(['a', 'b', 'c'])

for (let value of iterator_string)
  console.log(value)