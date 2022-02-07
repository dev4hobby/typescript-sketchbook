import { IFunctor } from "./IFunctor"

export interface IApply<T> extends IFunctor<T> {
  ap<U>(b: U);
}

/*
IApply를 구현하는 컨테이너는 value 컨테이너 뿐만 아니라 고차 함수의 컨테이너로도 동작한다.
*/