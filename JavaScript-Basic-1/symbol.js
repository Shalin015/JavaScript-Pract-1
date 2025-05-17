// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1===id2);
// console.log(id1.toString());
// console.log(id2.description);

// let id=Symbol("id");
// let user={
//     name:"Shalin",
//     age:23,
//     [id]:1512
// };
// console.log(`direct access symbol : ${user[id]}`);

// let clone=Object.assign({},user);
// console.log(`create clone and access symbol : ${clone[id]}`);

// gloabl symbol
let id=Symbol.for("id");
let id1=Symbol.for("id");
console.log(`Check both symbol : ${id===id1}`);

// task
let user = {
    age : 23,
    name : 'max',
    money : 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.age;
      }
};

console.log(user);
console.log(+user);
console.log(user + 500);