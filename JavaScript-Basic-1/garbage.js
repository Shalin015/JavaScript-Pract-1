let user={
    name: "Shalin",
    age: 23
};
let admin=user;
console.log(`user data copy in admin : ${admin.name} ${admin.age}`);
user = null;
console.log(`user data is null : ${user}`);
console.log(`admin data is null : ${admin.name} ${admin.age}`);

