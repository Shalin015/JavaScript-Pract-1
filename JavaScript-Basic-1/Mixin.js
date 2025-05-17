"use strict";

let sayHiMixin = { // create object mixin
    sayHi(){
        console.log(`Hello, ${this.name}`);
    },
    sayBye(){
        console.log(`Bye ${this.name}`);
    }
};
class User { // create class
    constructor(name){ // give parameter of the class
        this.name = name;
    }
}
Object.assign(User.prototype, sayHiMixin); // make sayHiMixin prototype of user
new User('Dude').sayHi(); // user give name and display from sayHi()