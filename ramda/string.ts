import { trim } from 'ramda'
import { toUpper, toLower } from 'ramda'
import { split, join } from 'ramda'

console.log(trim('\t hello \n'))
console.log(toUpper('abc'))
console.log(toLower('ABC'))
console.log(split('.', 'a.b.c'))
console.log(join('.', ['a', 'b', 'c']))
