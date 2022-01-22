function add(x: number): (number) => number {   // 바깥쪽 유효범위 시작
  return function(y: number): number {          // 안쪽 유효범위 시작
    return x + y                                // 클로저
  }                                             // 안쪽 유효범위 끝
}                                               // 바깥쪽 유효범위 끝

const add1 = add(1)                             // 변수 x의 메모리 유지
const result = add1(2)                          // result에 3을 저장하고 x 메모리 해제
console.log(result)


const makeNames = (): () => string => {         // ()=>string 타입의 함수를 반환하는 2차 고차함수
  const names = ['Jack', 'Jane', 'John']
  let index = 0
  return (): string => {                        // 안쪽 유효범위
    if(index == names.length)                   // it makes work as circular list
      index = 0
    return names[index++]
  }
}

const makeName: () => string = makeNames()
console.log(
  [1, 2, 3, 4, 5, 6, 7].map(n => makeName())
)