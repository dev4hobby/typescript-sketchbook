import { zip } from '../utils/zip'
import { makeFakeData, IFake } from '../fake/makeFakeData'

const data = makeFakeData()
const keys = Object.keys(data)
const values = Object.values(data)

const fake: IFake = zip(keys, values) as IFake
console.log(fake)
