import { IValueProvider, IAddable, IMultitplyable } from "../interfaces";

export class Calculator implements IValueProvider<number>, IAddable<number>, IMultitplyable<number> {
  private _value: number = 0;
  constructor(value: number) {
    this._value = value;
  }

  add(value: number): this {
    this._value += value;
    return this
  }

  multiply(value: number): this {
    this._value *= value;
    return this
  }

  value(): number {
    return this._value;
  }
}