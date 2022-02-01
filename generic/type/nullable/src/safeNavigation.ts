export type ICoordinates = {longitude: number}
export type ILocation = {country: string, coords?: ICoordinates}
export type IPerson = {name: string, location?: ILocation}

let person: IPerson = {name: 'd3fau1t'}
let result = person?.location?.coords?.longitude

if(person && person.location && person.location.coords) {
  result = person.location.coords.longitude
}