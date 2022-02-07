import { IValuable } from "./IValuable";

export interface ISetoid<T> extends IValuable<T> {
  // 값이 없다면 비교할 수 없기 때문에 IValuable을 상속
  equals<U>(value: U): boolean;
}
