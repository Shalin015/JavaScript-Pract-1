"use strict";

// proxy 
// let target = {};
// let proxy = new Proxy(target, {}); // can wrape multiple object and doing intercepts
// proxy.name = "Max"; // add name property and give value
// for(let i in proxy)
// {
//     console.log(i); // check keys and display keys
// }
// console.log(proxy.name);

// get trap
// let numbers = [1,2,3];
// numbers = new Proxy(numbers, 
//     { get(target, prop) // getting value from array
//         {
//              if(prop in target){
//                  return target[prop];
//         }
//         else
//         {
//             return 0;
//         }
//     }
// });
// console.log(numbers[1]);

// get value
// let dictionary = {
//     'Hello' : 'Halo',
//     'Bye' : 'Adios' 
// };
// dictionary = new Proxy(dictionary, // create proxy
//     {get(target, phrase) // create target and phrase 
//     {
//         if(phrase in target) // check that phrase property is inside the target
//         {
//             return target[phrase]; // if available then it will go inside and use as target[phrase]
//         }
//         else
//         {
//             return phrase; // if not available then it will return particular value
//         }
//     }
// });
// console.log(dictionary['Hello']);
// console.log(dictionary['Bye']);

// set value
// let numbers = [];
// numbers = new Proxy(numbers, {
//     set(target, prop, val) // for set value in array
//     {
//         if(typeof val === 'number') // check that given value is number or not
//         {
//             target[prop] = val; // if it is number then val add in target[]
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }
// });
// numbers.push(1);
// numbers.push(2);
// console.log("Length is : ",numbers.length);
// console.log(numbers);
// numbers.push("test");

// ownKeys
// let User = {
//     name: 'Max',
//     age: 23,
//     _add: 'Surat'
// };
// User = new Proxy(User,
//     {
//         ownKeys(target) {
//             return Object.keys(target).filter(key =>
//                 !key.startsWith('_'));
//         }
//     });
// // for(let key in User)
// // {
// //     console.log(key);
// // }
// console.log("User keys : ",Object.keys(User));
// console.log("User values : ",Object.values(User));

// getOwnPropertyDescription
let user = {};
user = new Proxy(user, {
    ownKeys(target){ // give keys to our object
        return ['a','b','c'];
    },
    getOwnPropertyDescriptor(target, prop){ // get to know our object property description (enumberable, configrable,writtenable)
        return{
            enumerable : true,
            configurable : true
        };
    }
});
console.log(Object.keys(user));
console.log(Object.getOwnPropertyDescriptor(user));
user = Object.keys(user);
console.log(user);