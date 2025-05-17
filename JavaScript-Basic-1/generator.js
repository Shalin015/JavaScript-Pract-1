"use strict";

// const { generate } = require("rxjs");

// generator
function* abc(){ //* make function generator
    let i = 0;
    yield 1; // for multiple return
    yield 2;
    yield 3;
}
const gen = abc(); // initialize generator value
console.log(gen.next()); // display next yield 
console.log(gen.next()); 
console.log(gen.next());
console.log(gen.next());

// while
// function* abc(){
//     let i = 0;
//     while(true)
//     {
//         yield i++;
//     }
// }
// const gen = abc(); // initialize generator value
// console.log(gen.next().value); // display value of yield
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);  

// Generator Iterable
// function* generatorIterable(){ // iterable function 
//     yield 15;
//     yield 12;
//     yield 19;
//     yield 99;
// }
// let generat = generatorIterable(); // create object of the function
// for(let i of generat) // run for loop in iterator to get value
// {
//     console.log(i);
// }
// console.log(generat.next().value);

// passing argument in generator
// function* passingArgu(){
//     console.log(0);
//     console.log(1,yield);
//     console.log(2,yield);
//     console.log(3,yield);
// }
// let generat = passingArgu();
// generat.next();
// generat.next("Basil");
// generat.next("Pamezan");
// generat.next("Sheddar");

// generator iterables
// let range = {
//     from : 1,
//     to : 5,
//     [Symbol.iterator](){
//         return {
//             current : this.from,
//             last : this.to,
//             next(){
//                 if(this.current <= this.last){
//                     return {
//                         done : false,
//                         value : this.current++
//                     };
//                 }
//                 else{
//                     return {
//                         done : true
//                     }
//                 }
//             }
//         };
//     }
// };
// console.log([...range]);

// Generator composition
// function* generatorComposition(start, end)
// {
//     for(let i = start; i <= end; i++)
//         yield i;
// }
// function* generatorPasswordCodes(){
//     yield* generatorComposition(48, 57);
//     yield* generatorComposition(65, 90);
//     yield* generatorComposition(97, 122);
// }
// let str = '';
// for(let code of generatorPasswordCodes()){
//     str += String.fromCharCode(code);
// }
// console.log(str);

// 
// function* generateSequence(start, end)
// {
//     for(let i = start; i <= end; i++)
//         yield i;
// }
// function* generateAlphaNum(){
//     for(let i = 48; i <= 57; i++)
//         yield i;
//     for(let i = 65; i <= 90; i++)
//         yield i;
//     for(let i = 97 ; i <= 122; i++)
//         yield i;
// }
// let str = '';
// for(let code of generateAlphaNum())
// {
//     str += String.fromCharCode(code);
// }
// console.log(str);

// two way street
// function* gen(){
//     let ask1 = yield "2 + 2 = ?";
//     console.log(ask1);
//     let ask2 = yield "3 * 3 = ?";
//     console.log(ask2);
// }
// let generator = gen();
// console.log(generator.next().value);
// console.log(generator.next(4).value);
// console.log(generator.next(9).done);

// generator throw
// function* generate(){
//     let result = yield "2 + 2 : ?";
//     // console.log(result);
// }
// let generator = generate();
// let question = generator.next().value;
// try{
//     generator.throw(new Error("the answer is not found in my database"));
// }
// catch(e)
// {
//     console.log(e);
// }

// generator return
// function* gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let g = gen();
// console.log(g.next());
// console.log(g.return('foo'));
// console.log(g.next());