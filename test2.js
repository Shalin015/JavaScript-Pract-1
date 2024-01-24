"use Strict";

// find 2 value from the array that sum === 11
// output = [9,2]

const arr = [1, 3, 7, 9, 2];
const value = 11;
let number = [];
const sum = arr.map((values) => {
  arr.find((values1) => {
    if (values1 + values == 11) {
      number.push(values);
    }
  });
});
console.log(number);
