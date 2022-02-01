export interface IValueProvider<T> {
  value(): T // add 메서드가 내가 아닌 나를 상속하는 타입을 반환하는 F-Bound 타입이다.
}
