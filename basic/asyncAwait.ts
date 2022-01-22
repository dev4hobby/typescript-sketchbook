import { strict } from "assert"
import { readFile } from "fs"

async function get() {
  let values = []
  values.push(await Promise.resolve(1))
  values.push(await Promise.resolve(2))
  values.push(await Promise.resolve(3))
  return values
}

get().then((values) => console.log(values))
// [1, 2, 3]

const readFilePromise = (filename: string): Promise<string> => 
  new Promise<string>((
    resolve: (value: string) => void,
    reject: (reason: any) => void
  ) => {
    readFile(filename, (err: Error, buffer: Buffer) => {
      if (err) reject(err)
      else resolve(buffer.toString())
    })
  })

const readFilesAll = async (filenames: string[]) => {
  return await Promise.all(
    filenames.map(filename => readFilePromise(filename))
  )
}

readFilesAll(['./package.json', './tsconfig.json'])
  .then(([packageJson, tsConfig]: string[]) => {
    console.log(packageJson)
    console.log(tsConfig)
  })
  .catch(err => console.log('error:', err.message))
