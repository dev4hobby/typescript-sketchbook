interface Person {
  name: string
  age?: number
}

let person: Person = {
  name: 'John',
  age: 25,
}

let anonymous_person: {
  name: string
  age: number
  etc?: boolean
} = {
  name: 'John',
  age: 22,
  etc: false,
}

const print_person = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  )
}

print_person(anonymous_person)
