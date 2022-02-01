import { IValueable } from "./IValueable";
import { IFunctor } from "./IFunctor";

export class Some<T> implements IValueable<T>, IFunctor<T> {
  constructor(private value: T) {}
  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue;
  }
  map<U>(fn: (value: T) => U) {
    return new Some<U>(fn(this.value));
  }
}