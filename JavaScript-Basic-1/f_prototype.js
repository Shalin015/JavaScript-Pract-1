"use strict";

// let animal = {
//     eats : true
// };
// function Rabbit(name)
// {
//     this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal;
// console.log(rabbit.eats); 

// let animal = {
//     eats : true
// };
// function Rabbit(){
//     console.log("Can jump");
// }
// Rabbit.__proto__ = animal; // proto can use in function and object both
// console.log(Rabbit.eats);

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jump : true
// };
// rabbit.prototype = animal; // prototype can't use in object
// let rabbit1 = new rabbit(); 
// console.log(rabbit1.eats);
// if we want to write using prototype with obj then
// rabbit.prototype = animal;
// console.log(rabbit.eats);

// function Rabbit(){}
// console.log("Check Rabbit can be prototype and constructor : ",Rabbit.prototype.constructor ===  Rabbit);
// let rabbit = new Rabbit();
// console.log("Check create constructor object is constructor or not : ",rabbit.constructor === Rabbit);

// using constructor property create new object
// function Rabbit(name){
//     this.name = name;
//     console.log(name);
// }
// let rabbit = new Rabbit("White Rabbit");
// let rabbit1 = new rabbit.constructor("Black Rabbit"); // using constructor property create object

// if we replace the default prototype as a whole then there will be no "constructor" in it
function Rabbit(){}
Rabbit.prototype = { // use prototype to whole then it will be no constructor
    jumps : true
};
let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit);
