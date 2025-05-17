"use strict";

//Mutation Observer
let observer = new MutationObserver(mutationRecords =>{ //create object and create a function
    console.log(mutationRecords); // if change something in DOM then it will print here
});
observer.observe(elem,{
    childList : true, // congif of mutation observer here if change in words then it will display
    // subtree : true, // congif of mutation observer 
    // characterDataOldValue : true, // congif of mutation observer if change in data
    attribute : true
});