import { Option } from "./Option"
import { IValueable } from "./IValueable"
import { IFunctor } from "./IFunctor"

export const parseNumber = (n: string): IFunctor<number> & IValueable<number> => {
  const parsed = Number(n);
  return isNaN(parsed) ? Option.None : Option.Some(parsed);
}
