import { calcArea, ISquare, IRectangle, ICircle } from "./unionObject";

const square: ISquare = {
  tag: 'square',
  size: 10
}
const rectangle: IRectangle = {
  tag: 'rectangle',
  width: 10,
  height: 20
}
const circle: ICircle = {
  tag: 'circle',
  radius: 10
}

console.log(calcArea(square), calcArea(rectangle), calcArea(circle));