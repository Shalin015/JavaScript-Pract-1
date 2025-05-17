"use strict";
// var name="ads";
// const obj = {
//     name: 'abc',
//     name2(){
//         let printName = () => {
//                 alert(this.name);
//         }
//     }
// };
// obj.name2();

// task
var name ="Max";
let obj = {
    name : "John",
    age : 23,
    obj2(){
        name = this.name;
        age = this.age;
    }
};
function myFunc(){
    newFunc = function(){
        console.log(this.name);
        console.log(this.age);
        let obj3 = () => {
            console.log(this.name);
            console.log(this.age);
        }
    }
}
newFunc();