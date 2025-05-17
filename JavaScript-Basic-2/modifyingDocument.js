"use strict";

// create element
// let div = document.createElement('div'); // create <div>
// div.className = "alert"; // <div class='alert'>
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message"; //<div class='alert>innerHTML</div>
// console.log(div.innerHTML); // print data from inside <div>
// document.body.append(div); // add <div at end of <body>

// insertion method
// ol.before('before');
// ol.after('after');

// let liFirst = document.createElement('li');
// liFirst.innerHTML = 'prepend'; // add at first position
// ol.prepend(liFirst);

// let liLast = document.createElement('li');
// liLast.innerHTML = 'append'; // add at last position
// ol.append(liLast);

// div.before('<p>Hello</p>',document.createElement('hr'));

// Insert Adjacent
// ol.insertAdjacentHTML('beforebegin','<li> add element before ol load </li>\n'); // add element before ol load

// ol.insertAdjacentHTML('afterbegin','\n<li>add element at ol start</li>'); // add element at ol start

// ol.insertAdjacentHTML('beforeend','<li>add element at ol end</li>\n'); // add element at ol end

// ol.insertAdjacentHTML('afterend','\n<li>add element after ol</li>'); // add element after ol
// console.log(document.body.innerHTML);

// insert adjacent HTML/ text/ element
// consider string as a code and add at starting of element
// document.body.insertAdjacentHTML('beforebegin','<div class="alert"><strong>Hello!</strong>, here we got some issue</div>');
// consider string as a code and add at end of element
// document.body.insertAdjacentHTML('beforeend','<div class="success"><strong>Successfully</strong>, get your data</div>');

// node removal
// let div = document.createElement('div'); // create div tag
// div.className = 'success'; // add class and give name
// div.innerHTML = "\n<strong>Hello!</strong>, here node removal"; // add content inside div tag
// console.log(div.innerHTML);
// document.body.append(div); // add div at the end of body
// console.log(document.body.innerHTML);
// setTimeout(()=>div.remove(),3000); // remove div after 3 sec

// cloning node
// let div = document.createAttribute('div'); // create div tag
// div.className = 'success';
// div.innerHTML='<strong>Hi there!</strong> here create cloning node';
// console.log(div.innerHTML);

// console.log(div.innerHTML)
// setTimeout(()=>{
//     let div2 = div.cloneNode(true);
// div2.querySelector('strong').innerHTML = "bye";
// div.after(div2);
// console.log(div2.innerHTML)},3000);

// Document Fragment
// function getListContent(){
//     let fragment = new DocumentFragment();
//     for(let i = 1; i <= 3; i++){
//         let li = document.createElement('li');
//         li.append(i);
//         fragment.append(li);
//     }
//     return fragment;
// }
// ul.append(getListContent());

// without Document
// function getListContent()
// {
//     let result = [];
//     for(let i = 1; i <= 3; i++)
//     {
//         let li = document.createElement('li');
//         li.append(i);
//         result.push(li);
//     }
//     return result;
// }
// ul.append(...getListContent());

// let div = document.createElement('div');
// div.innerHTML='\n<p>Hello</p>';
// document.body.append(div);
// console.log("InnerHtml :",div.innerHTML);
// console.log(document.body.innerHTML);
// let div1 = document.createElement('div');
// div1.outerHTML = "\n<p>Welcome</p>";
// document.body.append(div1);
// console.log("outerHtml :",div1.innerHTML);
// console.log(document.body.innerHTML);

// insert / remove method
// let newLi = document.createElement('li');
// newLi.innerHTML = 'hello';
// list.appendChild(newLi);

// setTimeout(()=>{
//     let li = list.lastElementChild;
//     list.removeChild(li);
// },3000);

let div = document.createElement('div');
div.className='div';
document.body.append(div);
div.insertAdjacentHTML("afterbegin",'\n<p>After Begin<p>\n');
div.insertAdjacentHTML('afterend','\n<p>After End<p>\n');
div.insertAdjacentHTML('beforebegin','\n<p>Before begin<p>\n');
div.insertAdjacentHTML('beforeend','\n<p>Before end<p>\n');
console.log(document.body.innerHTML);