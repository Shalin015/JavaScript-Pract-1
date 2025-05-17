"use strict";

let animal = {
    eats : true
};
let rabbit = Object.create(animal); // same as {__proto__ : animal}
console.log(rabbit.eats); // rabbit access animal property
console.log(Object.getPrototypeOf(rabbit) === animal) // check rabbit and animal typeof is same or not
Object.setPrototypeOf(rabbit, {});