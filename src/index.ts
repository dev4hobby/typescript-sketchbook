import { IPerson } from "./person/IPerson"
import { Person, makePerson } from "./person/Person"
import Chance from "chance"
import * as R from "ramda"


const testMakePerson = (): void => {
  // let john: IPerson = makePerson('Jane')
  // let cena: IPerson = makePerson('Cena')
  // console.log(john, cena)

  const chance = new Chance()
  let persons: IPerson[] = R.range(0, 2).map(() => new Person(chance.name(), chance.age()))
  console.log(persons)
}
testMakePerson()