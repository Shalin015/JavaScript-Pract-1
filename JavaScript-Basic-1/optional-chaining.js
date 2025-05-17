// let user={
//     name:"Shalin",
//     admin()
//     {
//         alert("Yes your admin");
//     }
// };
// console.log(user?.name); // print name only
// console.log(user?.admin?.name); // nothing print because in admin function there is no name element

let key="name";
let key1="age";
let user1={
    name:"Shalin",
    age: 23
};
let user2={};
alert(user1?.[key]);
alert(user1?.[key1]);
alert(user2?.[key]); // undefine
alert(user1?.[key1]);