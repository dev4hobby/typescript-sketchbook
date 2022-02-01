type NumberOrString = number | string
let ns: NumberOrString = 1
ns = 'hello'

export interface ISquare {tag: 'square', size: number}
export interface IRectangle {tag: 'rectangle', width: number, height: number}
export interface ICircle {tag: 'circle', radius: number}

export type IShape = ISquare | IRectangle | ICircle
export const calcArea = (shape: IShape): number => {
  // 구체적으로 이게 어떤 객체가 들어오는지 알 수 없다...
  switch(shape.tag) {
    case 'square':
      return shape.size * shape.size
    case 'rectangle':
      return shape.width * shape.height
    case 'circle':
      return Math.PI * shape.radius * shape.radius
  }
  return 0
}