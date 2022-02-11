import { IMonad } from "../../monad-basic/interfaces";
import { _IMaybe } from "./_IMaybe"

export class Just<T> implements _IMaybe<T>, IMonad<T> {
  constructor(private _value: T) {}
  value(): T {return this._value}
  
  // IApplicative
  static of<T>(value: T): Just<T> {return new Just<T>(value)}

  // IMaybe
  isJust() {return true}
  isNothing() {return false}
  // Just가 Nothing일 경우 value()가 아닌 getOrElse(0)과 같은 형태로 동작하는 것을 염두한 것을 반영
  getOrElse<U>(defaultValue: U) {return this.value()}

  // IFunctor
  map<U, V>(fn: (x:T)=>U): Just<U> {return new Just<U>(fn(this.value()))}

  // IApply
  ap<U>(b: U){
    const f = this.value()
    if (f instanceof Function)
      return Just.of<U>(f(b))
    return Just.of<U>(b)
  }

  // IChain
  chain<U>(fn: (T) => U): U {return fn(this.value())}
}