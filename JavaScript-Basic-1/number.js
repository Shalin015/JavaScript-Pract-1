"use strict";
// let a = 1e9;
// console.log(a);
// console.log(1.23e4); // after e value is number of 0 print 

// let a = 2.3456;
// console.log(a.toFixed(2)); // after point number of value will print 

// check given variable value is NaN (Not a Number)
// let a = 10;
// let b = "shalin";
// console.log(isNaN(a));
// console.log(isNaN(b));
// console.log(NaN === NaN);

// only print number in value ignore before space and after string
// console.log(parseInt('100px'));
// console.log(parseFloat('12.5em'));
// console.log(parseInt('12.4'));

// other math function
// console.log(Math.random());// it will print random number
// console.log(Math.max(3,2,5,-10,1,-15));
// console.log(Math.min(3,2,5,-10,1,-15));
// console.log(Math.pow(2,10)); // 2^10

// console.log(0===-0);
// console.log(Object.is(0,-0));

// solution - 1
// let a=+prompt("Enter value : ",10);
// let b=+prompt("Enter value : ",15);
// console.log(a+b);

// solution 2
// console.log(1.35.toFixed(1));
// console.log(1.35.toFixed(20));
// console.log(6.35.toFixed(20));

// solution 3
function readNumber() {
    let a;
    do {
        a = +prompt("Enter a value : ");
    } while (!isFinite(a));
    if (a === false || a === '')
        console.log("null");
    return +a;
}
console.log(readNumber());