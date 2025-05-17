"use strict";

// json methods to json
// let user = {
//     name : 'Johan',
//     age : 23,
//     toString()
//     {
//         return `{name : "${this.name}", age : "${this.age}"}`; 
//     }
// };
// console.log(user); 

//stringify
// let user = { // normal object
//     name : 'Mark',
//     Age : 23,
//     course : ['css','HTML'],
//     isAdmin : false 
// };
// let json = JSON.stringify(user); // convert normal object to json format
// console.log(typeof json); // typeof string
// console.log(json);

//stringify ignore function properties, symbolic key, properties store undefine
// let user = {
//     sayHi()
//     {
//         console.log("Hello"); // ignore due to function
//     },
//     [Symbol("id")] : 123, // ignore due to symboli key
//     name : undefined, // ignore due to undefine value
// };
// console.log(JSON.stringify(user)); // convert to JSON format

//
let room = {
    number : 1512
};
console.log(room);
let meetup = {
    title : "conference",
    participant : [{name : 'Johan'},{name : 'Max'}],
    place : room,
};
console.log(meetup);
room.occupiedBy = meetup;
console.log(JSON.stringify(meetup,['title','participant']));
// let room = {
//     number : 215
// };
// let meetup = {
//     title : "conference",
//     participant :[{name : 'John'}, {name : 'Alice'}],
//     place : room
// };
// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup,['title', 'participat']));
// console.log(JSON.stringify(meetup,function replacer(key,value){
//     console.log(`${key} : ${value}`);
//     return (key === 'occupiedBy') ? undefined : value;
// }))

// formting space
// let user = {
//     name : 'Shalin',
//     age : 23,
//     roles : 
//     {
//         isAdmin : false,
//         isEditor : true
//     }
// };
// console.log(JSON.stringify(user, null, 2));

// custom toJSON
// let room = {
//     number : 215,
//     toJSON(){
//         return this.number;
//     }
// };
// let meetup = {
//     title : "conference",
//     date : new Date(Date.UTC(2023,11,15)),
//     room
// };
// console.log(JSON.stringify(meetup));

// parse
// let data = "[0,1,2,3]";
// data = JSON.parse(data);
//  console.log(data);

//nested object
// let userDetail = '{"name" : "shalin", 
                // "age" : 23, 
                // "hobbies" : ["cricket","cooking"]
            // }';
// let user = JSON.parse(userDetail);
// console.log(user.hobbies[1]);

// task 
// let user = {
//     name : "John Smith",
//     age : 23
// };
// let admin = JSON.stringify(user);
// console.log(admin);