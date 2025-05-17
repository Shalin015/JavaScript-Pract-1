"use strict";

// difference of var and let
// if(true)
// {
//     let a = 10;
//     console.log('let inside if : ',a);
// }
// console.log('let a outside of if : ',a);

// if(true)
// {
//     var a = 10;
//     console.log('var inside of if : ',a);
// }
// console.log('var outside of if : ',a);

// tolerent 
// let user = 10;
// let user = 15;
// console.log(user);
// var user1 = 10;
// var user1 = 15;
// console.log(user1);

// variable declare late
function late(){
    str = "Welcome";
    console.log(str);
    var str;
}
late();