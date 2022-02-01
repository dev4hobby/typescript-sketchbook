import { Option } from "./Option";
import { IValueable } from "./IValueable";
import { IFunctor } from "./IFunctor";

export const parseJson = <T>(json: string): IValueable<T> & IFunctor<T> => {
  try{
    const value = JSON.parse(json)
    return Option.Some<T>(value)
  } catch(e) {
    return Option.None
  }
}