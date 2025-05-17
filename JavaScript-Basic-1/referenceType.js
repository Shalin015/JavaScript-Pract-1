"use strict";

// reference 
let user = {
    name : 'Johan',
    hi(){
        console.log(this.name);
    },
    bye(){
        console.log('Bye');
    }
};
user.hi();
(user.name == 'Johan' ? user.hi() : user.bye()); // if user.name == "Johan" then it will go to user.hi() or else user.bye()