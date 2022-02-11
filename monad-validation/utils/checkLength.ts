/*
check length
*/
import {Success, Failure} from '../classes/Validation'

export const checkLength = (o: {password?: string}, minLength: number=11) => {
  const {password} = o
  return (!password || password.length < minLength) ?
    new Failure(['Password must have more than 11 characters']) : new Success(o)
}