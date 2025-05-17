// let user={
//     name: "Shalin",
//     age: 23
// };
// let clone={};
// for(let key in user)
// {
//     clone[key]=user[key];
// }
// clone.name="Meet";
// clone.age=22;
// alert(`clone name ${clone.name}, clone age ${clone.age}`);
// alert(`user name ${user.name}, user age ${user.age}`);

// using object.assgin 
// let user={
//     name:"Shalin",
//     age:22
// };
// let clone=Object.assign({},user);
// alert(`check user name and clone name object are same : ${user.name===clone.name}`); // both has same object
// user.age=23;    // only user age change
// alert(`clone age : ${clone.age}`);  // clone age same as it is

// structureclone
let user={
    name:"shalin",
    age:22
};
let clone=structuredClone(user);
alert(`structure clone and user name is same : ${user.name===clone.name}`);
user.age=23;
alert(clone.age);