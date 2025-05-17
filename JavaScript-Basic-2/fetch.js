"use strict";

// without fetch access api data
// (async()=>{
// let response = await fetch(url);
// if(response.ok)
// {
//     let json = await response.json();
// }
// else
// {
//     console.log("HTTP-Error : ",response.status);
// }
// })

// (async()=>{
// let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"; // first store url in variable
// let response = await fetch(url); // select and load url in response
// let commits = await response.json(); // read response body as a json 
// console.log(commits[1].author.login);
// })();

// using fetch
// fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits") // it will directly url read and load it
// .then(response => response.json()) // read respoonse body as a json
// .then(commits => console.log(commits[0].author.login)); // display author login

// (async()=>{
//     let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
//     // console.log(response);
//     let text = await response.text();
//     // console.log(text);
//     console.log(text.slice(0,80) , '...');
// })()

// (async()=>{
// let response = await fetch('/article/fetch/logo-fetch.svg');
// let blob = await response.blob();
// let img = document.createElement('img');
// img.style = 'position : fixed; top : 10px; left : 10px; width : 100px';
// document.body.append(img);
// img.src = URL.createObjectURL(blob);
// setTimeout(()=>{
//     img.remove();
//     URL.revokeObjectURL(img.src);
// },3000);
// })()

// header response
// (async()=>{
// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// console.log(response.headers.get('content-Type')); // it will print content type 
// for(let [key,value] of response.headers) // take key and value from header one by one
// {
//     console.log(`${key}=${value}`); // print all key and there value
// }
// })()

// let p = fetch("./demo.json") // p is promise
// // we have to use two ".then" because first they get a response class object then get a value
// p.then((response)=>{
//     console.log(response.status); // check get api properly throw getting value under 200 to 299 
//     console.log(response.ok); // it will check api work properly or not
//     console.log(response.headers); // here we print header. headers is few detail about request when we request to api it
//     return response.json(); // valur1.json is promise which give response in json formate
// }).then((value2)=>{
//     console.log(value2);
// })

// fetch POST request async await always return promise
let a = async()=>{
    let options = {
        method: "POST",
        body: JSON.stringify({
            title: 'snorlax',
            body: 'pokemon',
            userId: 1,
          }),
        headers: {
            "Content-type" : "application/json"
        }
    }
    let p = await fetch('/article/formdata/post/user', options)
    let response = await p.json(); 
    return response;
}
mainFunc = async()=>
{
    let todo = await a();
    console.log(todo);
}
mainFunc();