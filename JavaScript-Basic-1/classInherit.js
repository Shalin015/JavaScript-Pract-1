"use strict";

// class inherit
// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed)
//     {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} stand still`);
//     }
// }
// class Rabbit extends Animal
// {
//     hide()
//     {
//         console.log(`${this.name} hides!`);
//     }
// }
// let animal = new Animal('My animal'); // name goes to constructor()
// let rabbit = new Rabbit("White rabbit"); // name goes to constructor()
// console.log(animal)
// console.log(rabbit)
// rabbit.run(10); // 
// rabbit.hide(); // rabbit call it own function

// override methed
// class Animal {
//     constructor(name)
//     {
//         this.speed = 0;
//         this.name = name;  
//     }
//     run(speed)
//     {
//         this.speed = speed;
//         console.log(`${this.name} run with speed ${this.speed}`);
//     }
//     stop()
//     {
//         this.speed = 0;
//         console.log(`Animal class : ${this.name} is standing`);
//     }
// }
// class Rabbit extends Animal
// {
//     hide()
//     {
//         console.log(`Rabbit class : ${this.name} is hide!`);
//     }
//     stop()
//     {
//         super.stop(); // it will call parent Animal.stop()
//         this.hide(); // it will call Rabbit.hide()
//     }
// }
// let rabbit = new Rabbit('White rabbit');
// let animal = new Animal('My Animal')
// rabbit.run(5); // it will go Animal.run()
// rabbit.stop(); // it will go to Animal.stop() then Rabbit.hide();

// override constructor
class Animal{
    constructor(name)
    {
        this.speed = 0;
        this.name = name;
        // console.log(this.name);
    }
}
class Rabbit extends Animal{
    constructor(name,earLength){
        super(name);
        this.earLength = earLength;
        console.log(`${name} ${earLength}`);
    }
}
let rabbit = new Rabbit("White Rabbit",15); // here constructor override
// let animal = new Animal("Black Rabbit");