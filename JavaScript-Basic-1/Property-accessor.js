"use stirct";

// getters (getting the data from nearby and display)
// let user = {
//     name : 'Mikal',
//     age : 23,
//     country : 'Canada',
//     get fullDetail(){
//         return `Name : ${this.name}\nage : ${this.age}\nfrom : ${this.country}`;
//     }
// };
// console.log(user.fullDetail);

// Setter (set the data)
// let user = {
//     firstName : 'Peter',
//     lastName : 'Parker',
//     set fullName(value){
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// };
// console.log(`Before set the value : ${user.firstName} ${user.lastName}`);
// user.fullName = 'Alice Mark';
// console.log(`After set the value : ${user.firstName} ${user.lastName}`);

// accessor descriptors
// let user = {
//     name : 'Johan',
//     lastName : 'Holand'
// };
// Object.defineProperty(user,'fullName',{ // create nested object and and value
//     get() // get value from object and return them
//     {
//         return `${this.name} ${this.lastName}`;
//     },
//     set(value){ // set the value on object
//         [this.name, this.lastName] = value.split(" ");
//     }
// });
// console.log(user.fullName);
// console.log(user);
// for(let i in user)
// {
//     console.log(i); // fullname not count in length
// }

// smarter getter/setter
let user = {
    get name(){
        return this._name;
    },
    set name(value){
        if(value.length < 4)
        {
            console.log("Name is too short, need atleast 4 character");
            return;
        }
        this._name = value;
    } 
};
user.name = "petermark";
console.log(user.name);
user.name="";