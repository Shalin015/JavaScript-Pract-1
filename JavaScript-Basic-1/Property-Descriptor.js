"use strict";

// check object property details
// let user = {
//     name : 'Johan',
//     age : 23,
//     city : 'london'
// };
// let detail = Object.getOwnPropertyDescriptors(user,'age');
// console.log(detail);
// console.log(JSON.stringify(detail, null, 2)); // for convert to JSON formate    

// define property but in this property flags are false
// let user = {};
// Object.defineProperty(user, "name", { // name key is not in user so it will add key
//     value : "Johan" // here give that key value but property flags(writable,enumberabl & configutable) are false
// });
// let decscriptor = Object.getOwnPropertyDescriptor(user,'name');
// console.log(decscriptor);
// console.log(JSON.stringify(decscriptor));

// non writable
// let user = {};
// Object.defineProperty(user,'name',{
//     value : 'johan', // give value of name key
//     // give property flag permission manually
//     writable : false // we can't change value
// });
// user.name = 'Peter'; // get error because name is only read only
// console.log(user);
// let detail = Object.getOwnPropertyDescriptor(user,'name');
// console.log(detail);

// non enumberable
// let user = {
//     name : 'Johan ',
//     toString(){
//         return this.name;
//     }
// };
// Object.defineProperty(user, "toString",{
//     enumerable : false, // can't loop the list
//     writable : true,
//     configurable :true
// });
// for(let key in user) // here toString disappear because toString is not enumberable
// {
//     console.log(key);
// }

// non configurable 
let user = {
    name : 'Johan'
};
console.log(`Predefine object : ${JSON.stringify(user)}`);
Object.defineProperty(user, 'name',{
    configurable : false
});
user.name = 'peter'; // modify data because of writable  
console.log(`after modify data : ${JSON.stringify(user)}`);
console.log(Object.getOwnPropertyDescriptors(user,'name'));
delete user.name; // here got error because name is not configurable so can't delete this property
console.log(`after delete data : ${JSON.stringify(user)}`);