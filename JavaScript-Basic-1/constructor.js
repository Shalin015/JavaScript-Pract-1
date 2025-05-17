'use strict';
// function User(name,age)
// {
//     this.name=name;
//     this.age=age;
// }

// let user= new User("shalin", 23);
// alert(user.name);
// alert(user.age);

// function User(name)
// {
//     this.name=name;

//     this.sayHi=function(){
//         alert("My name is :"+this.name);
//     };
// }

//calculator
// function Calculator()
// {
//     this.read=function()
//     {
//         this.a=+prompt('a?',0);
//         this.b=+prompt('b?',0);
//     };
//     this.sum=function()
//     {
//         return this.a + this.b;
//     };
//     this.mul=function()
//     {
//         return this.a * this.b;
//     };
// }
// let cal=new Calculator();
// cal.read();
// alert('sum :' +cal.sum());
// alert('mul :' +cal.mul());

//new.target it is use that writen constructor using new operator or not
// function user(name,age)
// {
//     if(!new.target)
//     {
//         return new user(name,age);
//     }
//     this.name=name;
//     this.age=age;
// }
// let shalin=user("shalin",23);
// alert(shalin.name);
// alert(shalin.age);

//solution create two function with one object
// let obj={};
// function A()
// {
//     return obj;
// }
// function B()
// {
//     return obj;
// }
// alert(new A() === new B());

// calculator read() for take values sum() for sum of number and mul() for multiplication
function Calculator()
{
    let a,b;
    this.read=function()
    {
        this.a=+prompt('a',15);
        this.b=+prompt('b', 20 );
    };
    this.sum=function()
    {
        return this.a+this.b;
    };
    this.mul=function()
    {
        return this.a*this.b;
    };
}
let cal=new Calculator();
cal.read();
alert(`Sum of the number : ${cal.sum()}`);
alert(`Multiplication of the number : ${cal.mul()}`);