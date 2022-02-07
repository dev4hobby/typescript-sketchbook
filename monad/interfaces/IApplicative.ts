import { IApply } from './IApply'

export interface IApplicative<T> extends IApply<T> {
  // of<U>(value: U): IApplicative<U>
}