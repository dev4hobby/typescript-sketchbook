import rimraf from 'rimraf'
import { fileExists } from './fileExists'

// fs.rmdir 는 비어있지 않은 디렉터리를 삭제할 수 없음
// rimraf 를 이용하여 비어있지 않은 디렉터리도 제거하도록 구현함
export const rmdir = (dirname: string): Promise<string> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    !alreadyExists ? resolve(dirname) :
      rimraf(dirname, (err) => err ? reject(err) : resolve(dirname))
  })