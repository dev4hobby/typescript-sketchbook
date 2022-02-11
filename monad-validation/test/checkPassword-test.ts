import { checkPassword } from "../checkPassword"

[
  {password: '1234567890a'},
  {password: 'asdf'},
  {},
  {pwd: 'qzxcv11231515151'},
]
  .forEach((target, index) => {
    const [value, failureReason] = checkPassword(target)
    if(failureReason)
      console.log(index, 'validation fail.', JSON.stringify(failureReason))
    else
      console.log(index, 'validation success.', JSON.stringify(value))
  })