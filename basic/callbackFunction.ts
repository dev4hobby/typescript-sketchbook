export const init = (callback: () => void) => {
  console.log('default initialization finished.')
  callback()
  console.log('all initialization finished.')
}

// import {init} from './init'
// init(() => console.log('custom initialization finished.'))