import { IChain } from "./IChain"
import { IApplicative } from "./IApplicative"

// monad is a type that implements IChain and IApplicative
export interface IMonad<T> extends IChain<T>, IApplicative<T> {}
