import { Success, Failure } from '../classes/Validation'

export const checkEmailAddress = (o: {email?: string}) => {
  const {email} = o
  return (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ?
    new Failure(['Email address is not valid']) : new Success(o)
}