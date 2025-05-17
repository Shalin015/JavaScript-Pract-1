"use strict";

// multiple class export
// export function abc(){
//     console.log("Hello");
// }
// export function def(){
//     console.log("Welcome to world");
// }
// export function ghi(){
//     console.log("We provide you best product");
// }

// constructor
export class Abc{
    constructor(name)
    {
        this.name = name;
        console.log(this.name);
    }
    abc(name,age)
    {
        this.name = name;
        this.age = age;
        console.log(this.name, this.age);
    }
    abc(name,age, address)
    {
        this.name = name;
        this.age = age;
        this.address = address;
        console.log(this.name, this.age, this.address);
    }
}