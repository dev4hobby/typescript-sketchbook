import { pick } from './pick'

const obj = { name: 'd3fau1t', age: 25, city: 'Berlin', country: 'Germany' }
console.log(
  pick(obj, ['name', 'age', 'city', 'country']),
  pick(obj, ['name', 'country'])
)