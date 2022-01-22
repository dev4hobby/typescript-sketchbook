import { strict } from "assert"

let original = 1
let copied = original
copied += 2
console.log(original, copied) // 1 3

const originalArray = [ 1, 2, 3 ]
const shallowCopiedArray = originalArray // 같은 객체의 ID를 연결..
shallowCopiedArray[0] = 0
console.log(originalArray, shallowCopiedArray) // [ 0, 2, 3 ] [ 0, 2, 3 ]

const oArray = [ 1, 2, 3, 4 ]
const deepCopiedArray = [ ...oArray ] // 전개연산으로 새 객체에 값을 복사해서 넣어줌
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray) // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]

