"use strict";

// set cookies
// let cookie = document.cookie="user = Johan";
// console.log(cookie);

// encodeURIComponent
// let name = "Stain Smith";
// let value = "Johan Smith";
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
// console.log(document.cookie);

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie ="user=Johan; expires=" + date;
document.cookie ="user=Johan; secure";

