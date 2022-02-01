import { StringComposer } from "../classes/StringComposer";

const value = new StringComposer('Hello').add('World').multiply(3).value();
console.log(value)