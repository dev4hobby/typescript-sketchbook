import {pipe, filter, lte, flip, lt, gte, gt, range, allPass, anyPass, not, ifElse, map, inc, dec} from 'ramda'

// 직관적이지 않다
const greater_than_equal_3 = pipe(filter(lte(3)))(range(1, 10))
console.log(greater_than_equal_3)

// 그래서 이런식으로 쓰는듯
const greater_than_equal_4 = pipe(filter(flip(gte)(4)))(range(1, 10))
console.log(greater_than_equal_4)

const lower_than_7 = pipe(filter(gt(7)))(range(1, 10))
console.log(lower_than_7)

// 3<=x<=7
const between_3_and_7 = pipe(filter(lt(3)), filter(gt(7)))(range(1, 10))
console.log(between_3_and_7)

type NumberToBooleanFunc = (n: number) => boolean
export const selectRange = (min: number, max: number): NumberToBooleanFunc => 
  allPass([ // or anyPass
    lte(min),
    gt(max)
  ])

console.log(pipe(filter(selectRange(3, 7)))(range(1, 10)))

const notRange = (min: number, max: number) => pipe(selectRange(min, max), not)
console.log(pipe(filter(notRange(3, 7)))(range(1, 10)))

const input: number[] = range(1, 11), halfValue = input[input.length / 2]
const subtractOrAdd = pipe(
  map(ifElse(lte(halfValue), inc, dec))
)(input)

console.log(subtractOrAdd)