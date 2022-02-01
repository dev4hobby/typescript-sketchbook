import { printValue, printValueT, Valuable } from "./printValue";

printValue(new Valuable<number>(42));
printValue(new Valuable<string>("forty-two"));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<number[]>([1, 3, 2, 5]));
printValueT(new Valuable<number>(42));
printValueT(new Valuable<string>("forty-two"));
printValueT(new Valuable<boolean>(true));
printValueT(new Valuable<number[]>([1, 3, 2, 5]));