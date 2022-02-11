import { Success } from "./Success";
import { Failure } from "./Failure";

export class Validation {
  static Success = Success
  static Failure = Failure
  static of<T>(func: T): Success<T> {
    return Success.of<T>(func)
  }
}

export {Success, Failure}