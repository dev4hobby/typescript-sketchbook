import mkdirp from "mkdirp";
import { fileExists } from "./fileExists";

// fs.mkdir 은 depth가 있는 디렉터리 생성이 불가능함
// mkdirp 를 이용하여 mkdir -p 와 같은 기능을 구현함
export const mkdir = (dirname: string): Promise<string> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    // 디렉터리가 이미 존재하면 생성하지 않음
    alreadyExists ? resolve(dirname) : mkdirp(dirname).then().catch(reject)
  })

