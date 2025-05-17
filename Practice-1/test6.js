"use strict";

// input : [{ name: "Johan", age: 30 },
//          { name: "Mary", age: 25 },
//          { name: "Bob", age: 40 },]
// output : [{name:"Johan",age:30}] (use call back function)

const users = [
  { name: "Johan", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Bob", age: 40 },
];

function obj(users, key, value,callbackfun) {
  const data = users.filter((values) => callbackfun(values[key],value));
  console.log(data);
}
const callbackfun=(a,b)=>a===b;
obj(users, "age", 30,callbackfun);
