"use strict";

// function name
// function snorlax(){
//     console.log("Welcome");
// }
// console.log(snorlax.name);

// function length
// function snorlax()
// {
//     console.log("welcome")
// }
// function balbasor(a,b)
// {
//     console.log("bulbasor");
// }
// function charmendar(a,b,c,...arr)
// {
//     console.log("Charmendar");
// }
// console.log(snorlax.length);
// console.log(balbasor.length);
// console.log(charmendar.length); // rest perameter not count

// custom property
// function fox(){
//     console.log("hello");
//     fox.count++;  // count how many time function call 
// }
// fox.count = 0;
// fox();
// fox();
// console.log(fox.count);

// Named function expression
// let sayHi = function(wh){
//     console.log(`Hello ${wh}, Welcome`);
// }
// sayHi("Max");

// let sayHi = function(name){ // in this function nested function is not allow
//     if("Devid" === name)
//     {
//         console.log(`Hello ${name}sir, Welcome`);
//     }
//     else
//     {
//         console.log(`${name}, Who are you`);
//     }
// }
// sayHi('Max');

//nested function is not allow
// let str = function(who){
//     if(who) // check who is empty or not
//     {
//         console.log(`Welcome, ${who}`);
//     }
//     else { // when who is empty
//         str("Guest"); // str is not directly connect with who
//     }
// }
// let guest = str;
// str = null;
// guest();

// for nested function allow
// let sayHi = function str(who){
//     if(who)
//     {
//         console.log(`Welcome ${who} sir`);
//     }
//     else
//     {
//         str("Guest");
//     }
// }
// sayHi();

// task
function sum(a)
{
    let currentSum = a;
    function f(b)
    {
        currentSum += b;
        return f;
    }
    console.log(f.toString());
    f.toString = function(){ // to convert into string
        return currentSum;
    };
    return f;
}
alert(sum(1)(2));
alert(sum(5)(-1)(2) );
alert(sum(6)(-1)(-2)(-3) );
alert(sum(0)(1)(2)(3)(4)(5) ); 

