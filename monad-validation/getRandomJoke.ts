import { Identity } from "../monad-basic/classes/Identity"
type ISuccess = { isSuccess: boolean, isFailure: boolean}

// 두 개의 고차 매개변수들을 배열로 만든 다음, isFailure값이
// true인 것들만 추려내 그 개수가 0일 때만 성공이라 판단한다.

const checkSuccess = (a: ISuccess) => (b: ISuccess): boolean =>
  [a, b].filter(({isFailure}) => isFailure === true).length === 0

  const isSuccess = Identity.of(checkSuccess)
                    .ap({isSuccess: true, isFailure: false})
                    .ap({isSuccess: false, isFailure: true}) // isFailure: true -> result: false
                    .value()

console.log(isSuccess)
