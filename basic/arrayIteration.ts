import { strict } from "assert"

const newNumbers: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < newNumbers.length; index++) {
  const item: number = newNumbers[index]
  console.log(item)
}

// for ... in
for (const key in newNumbers) {
  const item: number = newNumbers[key]
  console.log(item)
}

// for ... of
for (const item of newNumbers) {
  console.log(item)
}