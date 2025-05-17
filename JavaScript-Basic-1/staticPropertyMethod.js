"use strict";

//static keyword in method
// class User {
//     static method(){
//         console.log(this); // this target to whole user class
//         console.log(this === User); // true
//     }
// }
// User.method(); 

// access class function
// class Articale{
//     constructor(title, date){
//         this.title = title; // target to parameter title
//         this.date = date; // target to parameter date
//     }
//     static compare(articalA, articalB)
//     {
//         return articalA.date - articalB.date; // compare the date
//     }
// }
// let articles = [new Articale("HTML", new Date(2019,1,1)), // create array to store parameter 
//                 new Articale("CSS", new Date(2019,0,1)),
//                 new Articale("JavaScript", new Date(2019,11,1))]; // pass parameter 
// articles.sort(Articale.compare); // we can't access comapre function directly so here we use class to call function
// console.log(articles[0].title); // print aritcles first element and there title\

// create static method
// class Article {
//     constructor(title, date){
//         this.title = title;
//         this.date = date;
//     }
//     static createToday(){ // create static method
//         return new this("today's digest", new Date());
//     }
// }
// let article = Article.createToday(); // Article class function return store in article
// console.log(article.title);

// create static property 
// class Article{
//     static publisher = "Mac Oliver";
// }
// let ar = new Article();
// console.log(ar.publisher); // class object can't access static property of the class
// console.log(Article.publisher); // we can only using class can access the static  method and property

// static inherit
// class Animal {
//     static planet  = "earth"; // static property can't access by class object
//     constructor(name, speed)
//     {
//         this.speed = speed;
//         this.name = name;
//     }
//     run (speed = 0){
//         this.speed += speed;
//         console.log(`${this.name} run with speed ${this.speed}.`);
//     }
//     static compare(animalA, animalB) // create static method
//     {
//         return animalA.speed - animalB.speed;
//     }
// }
// class Rabbit extends Animal{ // extends Animal data in Rabbit
//     hide(){
//         console.log(`${this.name} hides!`);
//     }
// }
// let rabbit = [ new Rabbit("White rabbit",10),
// new Rabbit("Black Rabbit",5)]; // create array and add data in Rabbit
// rabbit.sort(Rabbit.compare); // rabbit value go into Rabbit and access compare function
// rabbit[0].run(); // take first element from rabbit and access run function
// console.log(Rabbit.planet); // using child class access parent class static property

// task 
class Abc{
    static def(){
        Abc.prototype.onclick();
    }
    onclick (){
        console.log("Welcome");
    }
}
Abc.def();

// task
class User {
    static staticMethod() {
      console.log("hello");
    }
    abd(){
        console.log("hello");
        console.log(User.prototype.staticMethods());
    }
}
User.prototype.staticMethods=User.staticMethod;
let obj=new User();
obj.abd();