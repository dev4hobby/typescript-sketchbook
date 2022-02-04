import {fileExists} from '../fileApi/fileExists'

const exists = async(filepath) => {
  const result = await fileExists(filepath)
  console.log(`${filepath} ${result ? 'exists' : 'does not exist'}`)
}

exists('./package.json')
exists('./package')