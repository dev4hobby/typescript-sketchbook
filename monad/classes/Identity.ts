import { ISetoid, IApply } from "../interfaces"

export class Identity<T> implements ISetoid<T>, IApply<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }

  // IValuable
  value(): T {
    return this._value;
  }

  // ISetoid
  equals<U>(that: U): boolean {
    if (that instanceof Identity)
      return this.value() === that.value()
    return false
  }

  // IFunctor
  map<U>(func: (x: T) => U): Identity<U> {
    return new Identity(func(this.value()))
  }

  // IApply
  ap<U>(b: U){
    const f = this.value()
    if (f instanceof Function)
      return new Identity(f(b))
    return new Identity(f)
  }

}
