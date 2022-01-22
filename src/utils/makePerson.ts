export const makePerson= (name: string, age: number) => {
  return {name: name, age: age}
}

export const testMakePerson = () => {
  console.log(
    makePerson('John', 30),
    makePerson('Cena', 31)
  )
}
