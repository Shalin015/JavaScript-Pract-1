"use strict";

// create class
// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let user = new User('Denial'); // create objectfor class and give peramater
// user.sayHi();
// console.log(typeof User); // class typrof function

// class expression
// let User = class myClass{
//     sayHi(){
//         console.log(myClass); // myClass name will display
//     }
// };
// new User().sayHi(); // display myClass definition
// // console.log(myClass);   

//  getter / setter
// class User{
//     constructor(name){
//         this.name = name;
//         console.log("C",this.name);
//     }
//     get name(){
//         console.log(this);
//         return this._name;
//     }
//     set name(value){
//         if(value.length < 4)
//         {
//             console.log("Too short name");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User('MaxPen');
// console.log(user.name);
// user = new User(" ");

// computed names
// class user {
//     ['Say' + 'Hi'](){
//         console.log('Hello');
//     }
// }
// new user().SayHi();

// class fields
// class User{
//     name = 'Johan';
//     sayHi(){
//         console.log('Hello,',this.name);
//     }
// }
// new User().sayHi();

// making class bound method
// class Button{
//     constructor(value){
//         this.value = value;
//         console.log("Constructor :",value);
//     }
//     click()  { // take value from constructor
//         console.log(this.value);
//     }
// }
// let button = new Button('Hello'); // it will go to Button.constructor()
// setTimeout(button.click, 2000); // it will go to button.click

// class fields provide another quite elegant syntax
class Button {
    constructor(value){
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}
let button = new Button("Hello");
setTimeout(button.click, 1000);