// we need to install type definition file for googlemaps
// we can use these definition files not only for npm module, but also for script tag added
// in direct to html

/// <reference types="@types/googlemaps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

//we need to till typescript that we will have a global variable inside our project
// we need to help typescript to understand the different methods taht are available
// on this google object
// new google.maps.Map(document.getElementById("map"), {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });
const user = new User();
const company = new Company();
const customMap = new CustomMap("map");
//new CustomMap("otherMap");
customMap.addMarker(user);
customMap.addMarker(company);
