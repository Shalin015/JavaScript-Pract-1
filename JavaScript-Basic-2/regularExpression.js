"use strict";

// let text = "visit W3Schools";
// let pattern = /w3Schools/i; // i is for case insensitive
// let result=text.match(pattern); // compare both string
// console.log(result);

// let text1 = "visit W3Schools";
// let pattern1 = /s/g; // g is for global search the character
// let result1=text1.match(pattern1); // compare both string
// console.log(result1);

// let text2 = "visit W3Schools";
// let pattern2 = /s/gi; // g is for global search character and i is for case insensitive
// let result2=text2.match(pattern2); // compare both string
// console.log(result2);

// let text3 = `visit W3Schools
// is the good way
// to learn `;
// let pattern3 = /is/m; // m is for multiline search character
// let result3=text3.match(pattern3); // compare both string
// console.log(result3);

// let text4 = `visit W3Schools
// is the good way
// to learn `;
// let pattern4 = /[is]/gi; // [is] is globally find the value of i and s
// let result4=text4.match(pattern4); // compare both string
// console.log(result4);

// let text5 = `visit W3Schools
// is the good way
// to learn `;
// let pattern5 = /[i-s]/gi; // [i-s] is globally find the value between i and s
// let result5=text5.match(pattern5); // compare both string
// console.log(result5);

// let text6 = `visit W3Schools
// is the good way
// to learn `;
// let pattern6 = /[^s]/gi; // [^s] is find all value except s
// let result6=text6.match(pattern6); // compare both string
// console.log(result6);

// let text7 = 'visit, W3Schools,is, the, good, way,to, learn ';
// let pattern7 = /[is|good]/g; // [is|good] is find alternative
// let result7=text7.match(pattern7); // compare both string
// console.log(result7);

// let text7 = 'visit, W3Schools,is, the, good, way,to, learn ';
// let pattern7 = /t.e/g; // t.e is find word which has start with t and e
// let result7=text7.match(pattern7); // compare both string
// console.log(result7);

// let text7 = 'visit, W3Schools,is, the, good, way,to, learn ';
// let pattern7 = /\w/g; // \w is find all character a-z A-Z
// let result7=text7.match(pattern7); // compare both string
// console.log(result7);

// let text7 = 'visit W 3 Schools is the good way to learn';
// let pattern7 = /\W/g; // \W is find all symbols and whitespace
// let result7=text7.match(pattern7); // compare both string
// console.log(result7);

// let text7 = 'visit, W3Schools,is, the, good, way,to, learn ';
// let pattern7 = /\d/g; // \d is find digit
// let result7=text7.match(pattern7); // compare both string
// console.log(result7);

let text7 = "visit, W3Schools,is, the, good, way,to, learn ";
let pattern7 = /\D/g; // \D is find all character except number
let result7 = text7.match(pattern7); // compare both string
console.log(result7);
