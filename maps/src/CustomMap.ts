// this class is going to wrap up the google map and try to hide its existence from other
// developers, so they will not have the access to all properties and methods of google maps
// object directly, they will have access to only the methods and properties in this object
// so they can't accidentally break our application.

import { Company } from "./Company";
import { User } from "./User";

// Instructions to every other classes
// on how they can be an argument to addMarker
// any class that has location property with allowed lat and lng,  and markerContent function
// that return a string, it can be an argument to addMarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

// this class is going to allow us to kind of isolate the google map and expose a bare
// minimum amount of functionality.

export class CustomMap {
  // anyone who is using this class, cannot reach into an instance and try to get a handle
  // on the google map
  private googleMap: google.maps.Map; // we cannot reference this property from outside this class
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap, // specify of which map you want to add these marker in case ypu have multiple maps on same page
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap, // specify of which map you want to add these marker in case ypu have multiple maps on same page
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // addUserMarker and addCompanyMarker have same functionlity, so it's good to refactor it

  // first solution, not recommended because:
  // 1- Typescript is going to limit the number of properties that we can refer to, because
  // typescript will refer only the common properties of the objects instances
  // here (User | Company) have only position property in common between them, so typescript will refer only position property

  //2- if we want to add marker for other than User and Company, so we will have alot of work to do
  //we have to import all other classes, and add them to mappable.
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  //second solution is the bes solution using interface
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: 'Hi there',
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
