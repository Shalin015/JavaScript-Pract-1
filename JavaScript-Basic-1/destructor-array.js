"use strict";

// Destructor
// let obj = ['Johan','Mark']; // create array
// let [firstName,lastName]=obj; // create destructor
// console.log(firstName,lastName);

// split 
// let user = "Shalin Kikaganeshwala"; // full string
// let [firstName, lastName] = user.split(' ') // split with the space
// console.log(firstName);

// Assign to anything left side
// let user = {}; // create empty variable
// [user.firstname, user.lastname] = "Johan Mark".split(' '); // add data into empty variable
// console.log(user.firstname);
// console.log(user.lastname);

// entier array loop
// let details = {  // make detail object
//     name : 'Mark',
//     age : 23
// };
// for(let [key, values] of Object.entries(details)) // run for loop to print one by one data with there keys and values
// {
//     console.log(`${key} : ${values}`);
// }


// map loop
// let user = new Map();
// user.set('Name', 'Shalin');
// user.set('Age', 23);

// for(let [key, values] of user)
// {
//     console.log(`${key} : ${values}`);
// }

// rest keyword
// let user = ['Shalin', 'Pratik','Smit','Meet','Nisarg'];
// let [Fr1, Fr2, ...rest] = user;
// console.log(Fr1),
// console.log(Fr2);
// console.log("rest of array");
// console.log(rest.length);
// console.log(`${rest[0]} \n ${rest[1]}`);

// object destructor
// let user = {
//     name : 'Shalin',
//     age : 23
// };
// let {name , age} = user;
// console.log(`${name}\n${age}`);

// nested desturctor
let user = {
    size : {
        width : 200,
        height : 100
    },
    items : ['cake', 'donut'],
    extra: true
};
let {
    size:{
        width,
        height
    },
    items : [item1, item2],
    title = "Menu"
} = user;
console.log(`${width}\n${height}\n\n${item1}\n${item2}`);

// Smart function
// let user = {
//     name : 'shalin',
//     age : 23
// };
// function showUser({name = "untitle", age="undefine"}){
//     console.log(`${name}\n${age}`);
// }
// showUser(user);