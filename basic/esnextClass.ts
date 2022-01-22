abstract class Animal {
  constructor(public name?: string, public age?: number) {}
  abstract say(): string
}

class Cat extends Animal {
  say() {
    return 'meow'
  }
}

class Dog extends Animal {
  say() {
    return 'woof'
  }
}

const animals: Animal[] = [new Cat('nyan', 2), new Dog('fido', 3)]
const sounds = animals.map((a) => a.say())

let cat_01: Cat = new Cat('nyan', 2)
cat_01.name = 'bongo'
cat_01.age = 3
