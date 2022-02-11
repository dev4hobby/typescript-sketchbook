import { Validation } from "./classes/Validation"
import { checkNull } from "./utils/checkNull"
import { checkEmailAddress } from "./utils/checkEmailAddress"

export const checkEmail = (o):[object|undefined, string[]|undefined] => {
  const result = Validation.of(a => o)
    .ap(checkEmailAddress(o))
  
  return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}