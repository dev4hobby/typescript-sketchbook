import { IValuable, Valuable } from "./Valuable";

export const printValue = <T>(valuable: IValuable<T>): void => {
  console.log(valuable.value);
}

export const printValueT = <Q, T extends IValuable<Q>>(o: T): void => {
  console.log(o.value);
}
export { IValuable, Valuable };
