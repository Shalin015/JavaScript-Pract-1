let user={
    name:"Shalin",
    age: 23,
    "like birds" : true // multiword name must be in quots
 };
 alert(user.name);
 alert(user.age);
 user.isAdmin=true; // add isAdmin in user
 alert(user.isAdmin);
 delete user.isAdmin; // delete isAdmin from user
 alert(user.isAdmin);
 delete user["like birds"]; // delete multiword  name
 alert(user["like birds"]); // add multiword name