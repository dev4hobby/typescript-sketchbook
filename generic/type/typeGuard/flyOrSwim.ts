import { Bird, Fish } from './BirdAndFish';
// #1
// export const flyOrSwim = (o: Bird | Fish): void => {
//   if (o instanceof Bird) {
//     (o as Bird).fly() // (<Bird>o).fly()
//   } else if (o instanceof Fish) {
//     (o as Fish).swim() // (<Fish>o).swim()
//   }
// }

// #2: type guard on
export const flyOrSwim = (o: Bird | Fish): void => {
  if(o instanceof Bird) {
    o.fly()
  } else if( o instanceof Fish) {
    o.swim()
  }
}