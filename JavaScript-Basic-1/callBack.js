"use strict";

// Asynchronous when we assigne action and execute laterly setTimeout
// console.log('Start'); // display 1
// setTimeout(function(){
//     console.log('Hey what are you doing'); 
// },3000); // display 3 after 3 sec 
// console.log('End'); // display 2

// Synchronous when assign any action and execute one by one
// let a = 10;
// let b = 15;
// let c = 25;
// console.log(`${a} + ${b} : ${c}`);

// callback
// function loadScript(src,callback){ // (to load any url in html file, want to call function)
//     var script = document.createElement('script'); // <script>
//     script.src = src; //copy url in <script src="">
//     script.onload = function(){ // after script load it will notify me
//         console.log("script loaded : ",src );
//         callback(); // function want to call
//     }
//     document.body.appendChild(script); // set position of the script
// }
// function load(){ // callback function
//     setTimeout(function()
//     {
//         console.log("Script is load");
//     },3000); // asynchronous action execute at last after 3 sec
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",load);
// // (url want to load, function want to call after load)

// task
function Script(src,callback){ // src=url , callback=abc()
    let script = document.createElement('script'); // <script>
    script.src= src; // <script src="url"></script>
    script.onload=()=>{
        callback();
        } 
        document.head.appendChild(script); // 
}
function abc(){
    console.log("welcome");
}
Script("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",abc);

// error handing in callback
// when i get error while load url 
// function loadScript(src, callback) {
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = function () {
//         console.log("Url loading : ", src);
//         callback(null, src);
//     }
//     script.onerror = function () {
//         console.log("Here we get the error : ", src);
//         callback(new Error("src got some error"));
//     }
//     document.body.appendChild(script);
// }
// function load(error, src) // when got an error
// {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     setTimeout(function () {
//         console.log("Url loaded");
//     }, 3000);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", load);

// why we dont use callback
function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("Url loading : ", src);
        callback(true, src);
    }
    script.onerror = function () {
        console.log("Here we get the error : ", src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}
// pyramid / callback hell
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function load(error) 
{
    if (error) {
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function load(error) 
    {
        if (error) {
            console.log(error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function load(error)
        {
            if (error) {
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
        });
    });
});