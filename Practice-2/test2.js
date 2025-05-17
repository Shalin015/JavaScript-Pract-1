"use strict";

const array = [
  { firstName: "Johan", lastName: "Doe", age: 34 },
  { firstName: "Michael", lastName: "Scott", age: 45 },
  { firstName: "Bill", lastName: "Gates", age: 64 },
];
function data(array, callbackFunc) {
  const result = array.map((values) => callbackFunc(values));
  return result;
}
const callbackFunc = (values) => `${values.firstName}${values.lastName}`;
console.log(data(array, callbackFunc));

// -----------------------------------------------------------------------------------------

let result = data(array, callbackFunc);
result = result
  .join("")
  .toLowerCase()
  .split("")
  .map((values) => {
    if (
      values === "a" ||
      values === "e" ||
      values === "i" ||
      values === "o" ||
      values === "u"
    ) {
      return "_";
    } else {
      return values;
    }
  });
console.log(result);
const groupBy = result.reduce((prev, curr) => {
  if (prev[curr]) {
    prev[curr]++;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});
console.log(groupBy);
