"use strict";

//  map allow any type of key thats the  main difference between object and map

// let map = new Map(); // map create
// map.set('name','John'); // add data in map 
// map.set(1,15);
// map.set(true,'admin');
// console.log(map);

// map also use object as a key
// let obj={ // create object
//     name : 'Max',
//     age :  23
// };
// let objMap = new Map(); // create map
// objMap.set(obj,'Zen'); // make object as a key
// console.log(objMap);
// console.log(obj);

// return key, return values, entires 
// let obj = new Map([['Onion', 40],['Potato', 30],['Tomato',25]]); // add data in map
// for (let veg of obj.keys()) // take keys
// {
//     console.log(veg);
// }
// for (let veg of obj.values()) // take only values
// {
//     console.log(veg);
// }
// for (let veg of obj.entries()) // take only entires
// {
//     console.log(veg);
// }

// map from object
// let obj = {
//     name : 'Zen',
//     age : 25
// };
// let obj1 =  new Map(Object.entries(obj)); // object copy into map
// console.log(obj1);

//fromEntries key word
let arr = [['Apple',15],
            ['Orange',20],
            ['Banana',25]];
let obj = Object.fromEntries(arr); // convert array to object
console.log(obj);