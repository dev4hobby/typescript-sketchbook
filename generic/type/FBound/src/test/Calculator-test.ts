import { Calculator } from "../classes/Calculator";

const value = (new Calculator(1)).add(2).multiply(3).value();
console.log(value)