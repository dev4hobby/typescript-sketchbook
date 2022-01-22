import * as fs from 'fs'
export function writeFile(filePath: string, content: any) {
  fs.writeFile(filePath, content, (err) => {
    err && console.log('error', err)
  })
}
