import { IApply } from "./IApply";

export interface IChain<T> extends IApply<T> {
  chain<U>(func: (x: T) => U)
}
