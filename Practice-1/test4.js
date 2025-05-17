"use strict";

// input : hello world
// output : olleh dlrow

const str = "hello World";
const reverse = str
  .split(" ")
  .map((values) => values.split("").reverse().join(""))
  .join(" ");
console.log(reverse);
