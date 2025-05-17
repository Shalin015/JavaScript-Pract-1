"use strict";

// method submit
let form = document.createElement('form');
form.action = 'https://www.google.com/search';
form.method = 'GET';
form.innerHTML = '<input name="q" value="test">';
document.body.append(form);
console.log(document.body.innerHTML);
form.submit();