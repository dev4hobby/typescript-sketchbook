import { strict } from 'assert/strict'

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

const doctor = new Doctor('Jack', 35)
const { name: his_name, age: his_age, ...detail } = doctor
const new_doctor = { his_name, his_age, ...detail }
console.log(doctor)
console.log(new_doctor)
