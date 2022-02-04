import * as fs from 'fs'

// fs.writeFile은 파일 다 날려버리고 다시 기록함.
// 마지막 기록된 위치부터 다시 기록하려면 fs.writeFile -> fs.appendFile을 사용해야함.
export const appendFile = (filename: string, data: any) : Promise<any> =>
  new Promise((resolve, reject) => {
    fs.appendFile(filename, data, 'utf8', (error: any) => {
      error ? reject(error) : resolve(data)
    })
  })