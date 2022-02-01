import { mergeObjects } from "./mergeObject";

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({ name: "d3fau1t" }, { age: 25 });
console.log(nameAndAge)