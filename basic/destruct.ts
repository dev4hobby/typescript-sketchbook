abstract class AbstractHuman {
  constructor(
    public name?: string,
    public age?: number,
    public address?: string,
    public license?: boolean
  ) {}
  abstract getAbility(): string
}

class Doctor extends AbstractHuman {
  getAbility = () => {
    return 'Heal someone else'
  }
}

const printDoctor = ({ name, age, address, license, getAbility }: Doctor): void => {
  console.log(`${name} is ${age} years old`)
}

const doctor_01 = new Doctor('Jack', 35)
const { name: his_name, age: his_age, ...detail } = doctor_01
console.log(his_name, his_age, detail)

printDoctor({name: 'Jack', age: 35, address: 'Seoul', license: true, getAbility: () => 'Heal someone else'})