"use strict";

// file input
function showFile(input) // input take as a argument
{
    let file = input.files[0]; // in input take a first file
    console.log(`File Name : ${file.name}`); // display file name
    console.log(`Last modification : ${file.lastModified}`); // display file last modification
}