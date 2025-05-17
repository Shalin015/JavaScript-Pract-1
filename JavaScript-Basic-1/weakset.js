"use strict";
// we can only add object into it not a primitive. we can remove them once they become inaccessible by other .
// let visitedset = new WeakSet();
// let shalin = { name : 'shalin', age : 23 };
// let meet = { name : 'meet', age : 22};
// let nisarg = { name : 'nisarg', age : 21};

// visitedset.add(shalin);
// visitedset.add(meet);
// visitedset.add(nisarg);

// console.log(visitedset.has(shalin));
// meet = null;
// console.log(visitedset.has(meet));

// weakset usage
let weakSet = new WeakSet();
let Johan = {
    name : "Johan",
    age : 23
};
let Max = {
};
weakSet.add(Johan);
weakSet.add(Max);

console.log(weakSet);
weakSet.delete(Johan); // delete data in advance
console.log(weakSet);