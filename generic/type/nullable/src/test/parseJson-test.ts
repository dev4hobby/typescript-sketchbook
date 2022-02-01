import { parseJson } from "../option/parsedJson";

const json = JSON.stringify({name: 'd3fau1t', age: '42'});
let value = parseJson(json).getOrElse({})
console.log(value)

value = parseJson('hello world').getOrElse({})
console.log(value)