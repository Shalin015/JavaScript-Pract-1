"use strict";

// navigation form and element
// let form = document.forms.my; // select form by id
// let elem = form.elements.one; // in form it will select tag name has one
// console.log(elem.value); // print form element one value

// let form = document.forms[0]; // select form tag
// let ageElem = form.elements.age; // in form tag check inside elemnt value is age
// console.log(ageElem[1]); // display second age in form tag

// fieldset as subforms
// console.log(form.elements.login); // it will target inside form element login
// let fieldset = form.elements.userFields;
// console.log(fieldset); // it will display <fieldset>
// console.log(fieldset.elements.login == form.elements.login); // it will check that <fieldset> and <form> element login are same or not

// back reference 
// let login = form.login;
// console.log(login.form);

// form elements
select.options[2].selected = true; // it will pre selected value which is on index 2
select.selectedIndex = 2; // it will pre selected value which is on index 2
select.value = 'banana'; // it will pre selected value banana