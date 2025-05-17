"use strict";
let user = { 
    name : 'shalin',
    age : 23
};

for( let value of Object.keys(user))
{
    console.log("User keys : ",value);
}
for( let admin of Object.values(user))
{
    console.log("user values : ",admin);
}
for( let entries of Object.entries(user))
{
    console.log("User entries : ",entries);
}