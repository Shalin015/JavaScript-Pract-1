"use strict";

// prototype
// let animal = { // parent object after proto
//     eats : true
// };
// let rabbit = { // child object after proto
//     jumps : true
// };
// console.log(rabbit.__proto__ = animal); // rabbit read animal property
// console.log(rabbit.eats); // rabbit access animal property
// console.log(rabbit.jumps);

// in parent object method is available that method access by child object
// let animal ={
//     eats : true,
//     walks(){
//         console.log('Animal walks');
//     }    
// };
// let rabbit = {
//     jumps : true,
//     __proto__ : animal // read parent object method and property 
// };
// rabbit.walks();

// prototype chain 
// let animal = {  // parent property
//     eats : true,
//     walks(){ // object method
//         console.log("Animal walks");
//     }
// };
// let rabbit = {
//     jumps : true,
//     __proto__ : animal // can read animal property
// };
// let longEar = {
//     earLeangth :10,
//     __proto__ : rabbit // can read rabbit & animal property
// };
// console.log("animal : ",animal);
// console.log("rabbit : ",rabbit);
// console.log("longEar : ",longEar);
// longEar.walks(); // longEar read animal property
// console.log(`longEar jump : ${longEar.jumps}`); // longEar read rabbit property

// using proto we can only read property they are not changing or removing data directly
// let animal = {
//     eats : true,
//     walks(){
//         // this method not used by rabbit
//     }
// };
// let rabbit = {
//     jumps : true,
//     __proto__ : animal
// };
// rabbit.walks = function(){
//     console.log("Rabbit! bounce bounce"); // rabbit create own function and access that
// };
// rabbit.walks();
// animal.walks(); // not display because method is empty

// using child class we try to modify parent data
// let user = {
//     name : 'Max',
//     lastName : 'Jems',
//     set fullName(values){
//         console.log('Set fullName : ',this);
//         [this.name, this.lastName] = values.split(" ");
//     },
//     get fullName(){
//         console.log('Get fullName : ',this);
//         return `${this.name} ${this.lastName}`;
//     }
// };
// let admin = {
//     __proto__ : user,
//     isADmin :true
// };
// console.log(admin.fullName); // here not give perameter so it will call get fullName() 
// admin.fullName = 'Paul Walker'; // here already give parameter so it will go set then after it will go get
// console.log(admin.fullName); // it will call get fullName() use admin property
// console.log(user.fullName); // it will call get fullName() but use parent property

// sleep or walk
// let animal = {
//     walks(){
//         if(!this.isSleeping)
//         {
//             console.log(`${rabbit.name} walk`);
//         }
//     },
//     sleep()
//     {
//         this.isSleeping = true;
//     }
// };
// let rabbit = {
//     name : 'White Rabbit',
//     __proto__ : animal
// };
// rabbit.walks(); // it will call sleep() so isSleeping is true so it wil not go in walks if()
// animal.sleep();
// console.log(rabbit.isSleeping); // it will call sleep()
// console.log(animal.isSleeping); // it will not call sleep()

// for loop
// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps : true,
//     __proto__ : animal
// };
// console.log(Object.keys(rabbit)); // get rabbit own property
// for(let prop in rabbit)
// {
//     console.log(prop); // getting rabbit inside keys
// }

// check object has own property 
let animal = {
    eats : true
};
let rabbit = {
    jumps : true,
    __proto__ : animal // inherit animal object into rabbit 
};
for(let prop in rabbit)
{
    let isOwn = rabbit.hasOwnProperty(prop); // check that given property is own that object or inherited
    if(isOwn)
    {
        console.log(`rabbit own property : ${prop}`);
    }
    else
    {
        console.log(`Inherited : ${prop}`);
    }
}
