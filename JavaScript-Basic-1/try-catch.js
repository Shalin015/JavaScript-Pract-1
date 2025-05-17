// "use strict";

//try... catch
// try { // starting execution
//     console.log("Start execution of 'try'");
//     console.log("End execution of 'try'");
// }
// catch(err)
// { // when error occure try will stop and catch will execute
//     console.log("any error is occure that's why 'try' execution is stop and execute 'catch'");
// }

// error occure
// try {
//     console.log("Start 'try' execution");
//     BoomBoomBoom; //error
//     console.log("'try' executed");
// }
// catch(err) {
//     console.log("Error occure");
// }

// try...catch only works for runtime enviorment
// try {
//     {{{{
// }
// catch (err)
// {
//     console.log("Error occure");
// }

//try...catch works synchronosly
// try {
//     setTimeout(function(){
//         noSuchVariable; // script will die here
//     },2000);
// }
// catch(err){
//     console.log("wont work");
// }

// Error object
// try {
//     lalala;
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//     console.log(err);
// }

// optional catch binding using try..catch
// let json = "{bad json}";
// try {
//     let user = JSON.parse(json);
//     console.log(user.name);
// }
// catch(err)
// {
//     console.log("our apologies, the data has errors, we'll try to request it one more time.");
//     console.log(err.name);
//     console.log(err.message);
// }

// throwing our own error
// let json = '{"age" : 30}';
// try{
//     let user = JSON.parse(json);
//     console.log(user.name);
// }
// catch(err)
// {
//     console.log("Dosen't execute");
// }

// throwing our own error
// let json ='{"age" : 30}';
// try {
//     let user = JSON.parse(json);
//     if(!user.name)
//     {
//         throw new SyntaxError("Incomplete data : no name");
//     }
//     console.log(user.name);
// }
// catch(err)
// {
//     console.log("JSON Error : ",err.message);
// }

// rethrowing
// let json = '{"age" : 30}';
// try 
// {
//     let user = JSON.parse(json);
//     if(!user.name){
//         throw new SyntaxError("Incomplete data : no name");
//     }
//     blabla();
//     console.log(user.name);
// }
// catch (err){
//     if(err instanceof SyntaxError){
//         console.log("JSON Error : ",err.message);
//     }
//     else 
//     {
//         throw err;
//     }
// }

// Rethrowing 
// function readData()
// {
//     let json = '{"Age" : 30}';
//     try{
//         blabla();
//     }
//     catch(err)
//     {
//         if(!(err instanceof SyntaxError))
//         {
//             throw err; // directly throw to catch(err) 
//         }
//     }
// }
// try
// {
//     readData();
// }
// catch(err)
// {
//     console.log("External catch got : ",err);
// }

// finally
// try 
// {
//     console.log('try');
//     if(confirm('Make an error?')) // if give true then it will go inside or else go to finally
//     {
//         BAD_CODE(); // call catch(err)
//     }
// }
// catch(err)
// {
//     console.log('catch');
// }
// finally
// {
//     console.log('final');
// }

//try...finally
// try
// {
//     console.log('Try');
//     blabla;
// }
// finally
// {
//     console.log('Finally');
// }

// custom error
class Error {
    constructor(message)
    {
        this.message = message;
        this.name = "Error";
        this.stack =`"Error:",${this.message}`;
    }
}
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function test()
{
    throw new ValidationError("Whooops!");
}
try{
    test();
}
catch(err)
{
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}
