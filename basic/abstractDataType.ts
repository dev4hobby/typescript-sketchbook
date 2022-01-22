// ADT
interface Person {
  name: string
  age?: number
}

abstract class _Animal {
  constructor(public name?: string, public age?: number) {}
  abstract say(): string
}

type NumberOrString = number | string // union type
type AnimalAndPerson = _Animal & Person // intersection type
