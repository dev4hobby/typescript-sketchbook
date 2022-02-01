import { IValueProvider, IAddable, IMultitplyable } from "../interfaces";

export class StringComposer implements IValueProvider<string>, IAddable<string>, IMultitplyable<number> {
  private _value: string = '';
  constructor(value: string) {
    this._value = value;
  }
  value(): string {
    return this._value;
  }
  add(value: string): this {
    this._value = this._value.concat(value);
    return this
  }
  multiply(repeat: number): this {
    const value = this.value()
    for (let i = 0; i < repeat; i++) {
      this.add(value)
    }
    return this
  }
}