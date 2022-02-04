import { readFileGenerator } from "../fileApi";
import { zip } from '../utils'

export function * csvFileReaderGenerator(filename: string, delim: string=',') {
  let headerr = []
  for(let line of readFileGenerator(filename)) {
    if(!headerr.length)
      headerr = line.split(delim)
    else
      yield zip(headerr, line.split(delim))
  }
}