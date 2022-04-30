// the vast majority of time tha you are using a javascript project inside of your typescript
// code, you might have to install the type definition file
// type definition fils is like an adaptor between typescript code that you write and javascript
// libraries that we try to work with.
// type definition file is going to tell the typescript compiler all the different functions
// that are available inside this javascript library, what type pf arguments they take, and
// what type of value those functions return.
// sometimes type definition files will be installed automatically when you install a javascript library(axios for example)

//e.g.
// npm install faker@5.5.3 // faker is javascript library to generate fake data
// npm install @types/faker@5.5.9 (type definition of faker javascript libarary {npm install @types/libraryName})

// convention in typescript is to never use default export statements.

import faker from "faker";
import { Mappable } from "./CustomMap";

//  implements Mappable is optional to catch error easily
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    // initialize User data
    this.name = faker.name.firstName();
    // u can't do this, because you have to initialize
    //this.location.lat = +faker.address.latitude()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
