"use strict";

// private class
// class Abc {
//     constructor(name){
//         this.name = name;
//     }
//     #printCharacter(){
//         console.log(this.name);
//     }
//     print(){
//         this.#printCharacter();
//     }
// }
// class Def extends Abc{

// }
// let ghi = new Def("Max");
// ghi.print();                
// // ghi.#printCharacter(); // it eill not print it will show private field

// protected
class Abc {
    constructor(name){
        this.name = name;
    }
    _printCharacter(){ // "_" use for protected function
        console.log(this.name);
    }
    print(){
        this._printCharacter();
    }
}
class Def extends Abc{

}
let ghi = new Def("Max");
ghi.print();
ghi._printCharacter();  