"use strict";

// input = "hello world"
// output = {'h':1, 'e':1, 'l':3, 'o':2, ' ':1, 'w':1, 'r':1, 'd':1 }

const str = "hello world";

const arr = str.split("");

const data = arr.reduce((prev, curr) => {
  if (prev[curr]) {
    prev[curr]++;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});
console.log(data);
