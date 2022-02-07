import { Identity } from "../classes/Identity";
type IPerson = {name: string, age: number}

const d3fau1t = Identity.of(['d3fau1t', 30])

console.log(
  d3fau1t
    .map(([name, age]) => ({name, age}))
    .chain((p: IPerson) => Identity.of(p))
    .map(({name, age}) => [name, age])
    .value()[0] == d3fau1t.value()[0] // true
)