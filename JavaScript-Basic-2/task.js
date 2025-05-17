"use strict";

// task
// display string first characte and last character and in between count character and display between character
// let str = "shalin"; // create a string
// let b = str.length-2;
// console.log(b);
// let newStr = str.slice(1, -1) // remove first and last character
// console.log(newStr);
// console.log(`${str.charAt(0)}${newStr.length}${str.charAt(str.length - 1)}`); // display str first character then display 

// task
// array range all number sum
// let arr = [1,7];
// function sum1(arr) {
//     let sum2 = 0;
//     if (arr[0] < arr[1]) {
//         for (let i = arr[0]; i <= arr[1]; i++) {
//             sum2 = sum2 + i;
//         }
//         console.log(sum2);
//     }
//     else
//     {
//         for(let i=arr[1]; i<=arr[0]; i++)
//         {
//             console.log(i)
//             sum2=sum2+i;
//         }
//         console.log(sum2);
//     }
// }
// sum1(arr);


// task
// second way
// let arr=[5,7];
// function sum1(a,b)
// {
//     let sum=0;
//     if(a>b)
//     {
//         [a,b]=[a,b].reverse();
//     }
//     for(let i=a; i<=b; i++)
//     {
//         sum += i;
//     }
//     console.log(sum);
// }
// sum1(arr[0],arr[1]);


// task
// given array value divide with 3 then add "Fizz" if value divide with 5 then add "Buzz" and if divide with both then add "FizzBuzz"
// let arr=[15,1,2,3,5,10,13,20,25,30]; // array
// let arr1 = arr.map((value)=>{
//     if(value%3 === 0 && value%5 === 0) // it will check that given value is divide with 3 and 5 both
//     {
//         return "FizzBuzz"; // if divide with 3 & 5 it return "FizzBuzz"
//     }
//     else if(value%3 === 0) // given value only divide with 3 then 
//     {
//         return "Fizz" // it will return "fizz"
//     }
//     else if(value%5 === 0) // given value only divide with 5 then
//     {
//         return "Buzz" //it will return buzz
//     }
//     else // if every condition is wrong then
//     {
//         return value; // it will return value
//     }
// })
// console.log(arr1);


// task
// let str="i.like.this";
// let str2=str.split(".").reverse().join('.');
// console.log(str2);


// task
// let str="12345";
// let arr=str.split("");
// console.log(arr);
// let sum=0;
// for(let i of arr)
// {
//     sum =sum+ i;
// }
// console.log(sum);


// task
// let str="match";
// str=str.split("").sort().join("");
// console.log(str);
// let str1="match";
// str1=str1.split("").sort().join("");
// console.log(str1);
// console.log(str1===str);


// task
// "pqr","apc" - 4 is number of element remove
// let a = "woman";
// let b = "showman";
// let c = [];
// function makeAnagram(a, b) {
//     a = a.split("").sort();
//     b = b.split("").sort();
//     if(a.length<b.length){
//         // console.log(a.length);
//         let d = a.filter((value) => {
//             for (let i = 0; i <= b.length; i++) {
//                 if (value === b[i]) {
//                     return value;
//                 }
//             }
//         })
//         console.log(d);
//         a = a.length - d.length;
//         b = b.length - d.length;
//         let sum = a + b;
//         return sum;
//     }
//     else
//     {
//         let d = b.filter((value) => {
//             for (let i = 0; i <= a.length; i++) {
//                 if (value === a[i]) {
//                     return value;
//                 }
//             }
//         })
//         console.log(d);
//         a = a.length - d.length;
//         b = b.length - d.length;
//         let sum = a + b;
//         return sum;
//     }
// }
// console.log(makeAnagram(a, b));


// task
// square bracket
// let user={};
// user["Like birds"]=true;
// console.log(user);

// function makeUser(name,age)
// {
//     return {
//         name : name,
//         age : age,
//     };
// }
// let user = makeUser("Johan",23);
// console.log(user.name);
// console.log(user.age);

// let user={};
// user.name="Johan";
// user.surname="Smith";
// console.log(user);
// user.name='Pete';
// delete user.name;
// console.log(user);

// let str="{}(<>)";
// let arr=[];
// let arr1=[];
// str=str.split("");
// arr.push(...str);
// console.log(arr);
// for(let i=0 ; i<=str.length; i++)
// {
//     for(let j=1; j<=arr.length;j++)
//     {
//         if(str[i] == "{" && arr[j] == "}")
//         {
//             arr.pop(i);
//             console.log(str);
//             str.pop(j);
//             console.log(str);
//         }
//         else if(str[i] == "<" && arr[j] == ">")
//         {
//             str.pop(i);
//             str.pop(j);
//         }
//         else if(str[i] == "[" && arr[j] == "]")
//         {    
//             str.pop(i);
//             str.pop(j);
//         }
//         else if(str[i] == "(" && arr[j] == ")")
//         {
//             str.pop(i);
//             str.pop(j);
//         }
//         else
//         {
//         }
//     }
// }
// console.log(str);

// find count repeated value and in that find second largest number
// let arr=[1,2,6,1,5,3,4,3,6,6,1];
// let count={};
// arr.forEach((value)=>{
//     count[value]=(count[value] || 0) +1;
// })
// console.log(count);
// let arr2=[...new Set(Object.values(count).sort((a,b)=>b-a))]
// console.log(Object.keys(count).find(key=>
//     count[key] === arr2[1]));

// 4rs have 1rs chocolate and if i give 3 chocolate wrapper then it will give 1 more chocolate
// function moreChocolate(have,amount)
// {
//     let get=0;
//     let extra=0;
//     let total=0;
//     if(have>amount)
//     {
//         get = have/amount;
//         if(get>=3)
//         {
//             extra=get/3;
//             total=get+extra;
//             return parseInt(total);
//         }
//         else
//         {
//             return get;
//         }
//     }
//     else
//     {
//         console.log("Less you have")
//     }
// }
// console.log(moreChocolate(100,1))

// const arr = [
//     {
//         city: "Mumbai",
//         state: "Maharastra"
//     },
//     {
//         city: "Jaipur",
//         state: "Rajasthan"
//     },
//     {
//         city: "Pune",
//         state: "Maharastra"
//     },
//     {
//         city: "Surat",
//         state: "Gujarat"
//     }
// ];
// let obj= arr.reduce((prev,curr)=>{
//     let {city,state} = curr;
//     if(!(prev[state]))
//     {
//         prev[state]=[];
//     }
//     prev[state].push(city);
//     return prev;
// },{});
// console.log(obj);

// const characters = [
//     { name: 'Jean-Luc Picard', age: 59 },
//     { name: 'Will Riker', age: 29 },
//     { name: 'Deanna Troi', age: 29 }
//   ];
// let obj = characters.reduce((prev,curr)=>{
//     let {name,age} = curr;
//     if(!prev[age])
//     {
//         prev[age]=[];
//     }
//     prev[age].push(name);
//     return prev;
// },{});
// console.log(obj);

// const array = [
//     {
//         name: 'John',
//         code: 24,
//         designation: 'Jr. Developer',
//         address: {
//             city: 'Surat',
//             country: 'IN'
//         }
//     },
//     {
//         name: 'Jack',
//         code: 36,
//         designation: 'Sr. Developer',
//         address: {
//             city: 'Mumbai',
//             country: 'IN'
//         }
//     },
//     {
//         name: 'Steve',
//         code: 12,
//         designation: 'CEO',
//         address: {
//             city: 'Dallas',
//             country: 'US'
//         }
//     },
//     {
//         name: 'Kristen',
//         code: 66,
//         designation: 'Business Analyst',
//         address: {
//             city: 'LA',
//             country: 'US'
//         }
//     },
//     {
//         name: 'Max',
//         code: 31,
//         designation: 'Jr. Developer',
//         address: {
//             city: 'Madrid',
//             country: 'ES'
//         }
//     },
// ];
// let arr=array.reduce((prev,curr)=>{
//     let {address}=curr;
//     if(!prev[address.country])
//     {
//         prev[address.country]=[];
//         console.log(prev);
//     }
//     prev[address.country].push(curr);
//     return prev;
// },{});
// console.log(arr);

// display object but if marks is same then check age who has older then display only that
// let obj = [
//     {
//         age: 18,
//         name: "Johan",
//         marks: "400"
//     },
//     {
//         age: 17,
//         name: "Johan",
//         marks: "400"
//     },
//     {
//         age: 16,
//         name: "Johan",
//         marks: "200"
//     },
//     {
//         age: 26,
//         name: "Johan",
//         marks: "300"
//     }
// ];
// let i = 0;
// let arr3 = [];
// let arr2 = Object.values(obj).sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(arr2);
// let result=arr2.reduce((prev, curr) => {
//     if (i == 0) {
//         prev[i] = curr;
//         arr3.push(curr.marks)
//         i++;
//     }

//     if (!arr3.includes(curr.marks)) {
//         prev[i] = curr;
//         arr3.push(curr.marks);
//         i++;
//     }
//     return prev;
// }, {});
// console.log(result);

// find max date
// let date=['2015/02/01','2022/05/01','2023/12/15','2021/05/12'];
// let max=new Date(0);
// let a=date.find((index)=>{
//     if(max< new Date(index))
//     {
//         max=new Date(index);
//     }
// })
// console.log(max);

// fibbonaci 
// let length = 5;
// let first = 0;
// let second = 1;
// let nextNum=0;
// for(let i=1; i<=length;i++)
// {
//     console.log(first);
//     nextNum = first+second;
//     first=second;
//     second=nextNum;
// }

// class Animal {

//     constructor(name) {
//         this.speed = 15;
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
//     print() {
//         console.log(this.name, this.earLength, this.speed);
//     }

// }

// now fine
// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name); // White Rabbit
// console.log(rabbit.earLength); // 10
// rabbit.print();

// const array = [
//     {
//         name: 'John',
//         code: 24,
//         designation: 'Jr. Developer',
//         address: {
//             city: 'Surat',
//             country: 'IN'
//         }
//     },
//     {
//         name: 'Jack',
//         code: 36,
//         designation: 'Sr. Developer',
//         address: {
//             city: 'Mumbai',
//             country: 'IN'
//         }
//     },
//     {
//         name: 'Steve',
//         code: 12,
//         designation: 'CEO',
//         address: {
//             city: 'Dallas',
//             country: 'US'
//         }
//     },
//     {
//         name: 'Kristen',
//         code: 66,
//         designation: 'Business Analyst',
//         address: {
//             city: 'LA',
//             country: 'US'
//         }
//     },
//     {
//         name: 'Max',
//         code: 31,
//         designation: 'Jr. Developer',
//         address: {
//             city: 'Madrid',
//             country: 'ES'
//         }
//     },
// ];
// let arr=array.reduce((prev,curr)=>{
//     let {name,code,designation,address:{city,country}}=curr;
//     if(!prev[country])
//     {
//         prev[country]=[];
//     }
//     prev[country].push({name,code,designation,address:`${city} ${country}`});3
//     return prev;
// },{});
// console.log(arr);

// {IN:[surat][surat]}
// let arr = array.reduce((prev,curr)=>{
//     let {name,code,designation,address:{city,country}}=curr;
//     if(!prev[country])
//     {
//         prev[country]=[];
//     }
//     prev[country].push([{name},{designation}]);
//     return prev;
// },{});
// console.log(arr);

// let arr=[[1,2,3,4],
//          [5,6,7,8],
//          [9,10,11,12],
//          [13,14,15,16]];
// let dami=[];
// function normal(arr,i){
//     if(i==arr.length-1){
//         arr[i].reverse();
//     }
//     for(let a of arr[i])
//     {
//             dami.push(a);
//     }
// }
// function last(arr){
//     for(let b of arr)
//     {
//         if(b!=arr[0])
//         {
//             dami.push(b.pop());
//         }
//     }
// };
// function vertical(arr)
// {
//     arr.reverse();
//     for(let b of arr)
//     {
//         if(b!=arr[0] && b!=arr[arr.length-1])
//         {
//             dami.push(b.shift());
//         }   
//     }
//     arr.reverse();
// }
// function normal2(arr,i)
// {
//     for(let a of arr[i])
//     {
//         dami.push(a);
//     }
// }
// normal(arr,0);
// last(arr);
// normal(arr,arr.length-1);
// vertical(arr);
// normal2(arr,1)
// normal2(arr,2)
// console.log(dami);

// let array = [1, 5, 3, 2, 10];
// let noIncludes = [];
// let includes = [];
// let array2 = array.sort((a, b) => {
//     return a - b;
// });
// let max = 0;
// for (let a of array2) {
//     if (a > max) {
//         max = a;
//     }
// }
// for (let i = array2[0]; i <= max; i++) {
//     if (!noIncludes.includes(i)) 
//     {
//         if(!array2.includes(i))
//         {
//         noIncludes.push(i);
//         }
//         else
//         {
//             includes.push(i);
//         }
//     }
// }
// console.log("Not Includes : ",noIncludes);
// console.log("Includes : ",includes);

// let array = [1, 5, 3, 2, 10, 2, 1, 4, 4];
// let array2=[];
// let array1 = [];
// let array3 =[];
// for(let a of array)
// {
//     if(!array2.includes(a))
//     {
//         array2.push(a);
//     }
//     else if(array2.includes(a))
//     {
//         array1.push(a);
//     }
// }
// console.log(array2);
// console.log(array1);

// {category:"electronic" average: }
// {category:"clothes" average: }
// let product =[
//     {name:"product1", price:20, category:"electronics"},
//     {name:"product2", price:30, category:"clothes"},
//     {name:"product3", price:50, category:"electronics"},
//     {name:"product4", price:60, category:"clothes"},
//     {name:"product5", price:70, category:"electronics"},
//     {name:"product6", price:80, category:"clothes"}
// ];
// let pr1=[];
// let pr=product.reduce((prev,curr)=>{
//     let {category}=curr;
//     if(!pr1.includes(curr.category))
//     {
//         pr1[curr.category]=[];
//     }
//     pr1[curr.category].push(curr);
//     return pr1;
// },{});
// console.log(pr);

// pr1.filter((value)=>{

// })

// str="shalin" //output="sshhaalliinn"
// let str="shalin";
// str=str.split("").map(item=>item.repeat(2)).join("");
// console.log(str);

// task
// let employees = [
//     { name: "Alice", department: "Engineering", salary: 80000 },
//     { name: "Bob", department: "Sales", salary: 60000 },
//     { name: "Charlie", department: "Engineering", salary: 90000 },
//     { name: "David", department: "Marketing", salary: 75000 },
//     { name: "Emily", department: "Sales", salary: 55000 },
//     { name: "Frank", department: "Engineering", salary: 85000 },
//     { name: "Grace", department: "Marketing", salary: 70000 },
//     { name: "Henry", department: "Sales", salary: 65000 },
// ];
// Output: [{department: "Engineering", averageSalary: 85000}, {department: "Marketing", averageSalary: 72500}]
// let threshold = 65000;

// task
// output:
// {
//   '2022-02-25': {
//     numOrders: 2,
//     totalRevenue: 42.5,
//     avgRevenue: 21.25
//   },
//   '2022-02-26': {
//     numOrders: 1,
//     totalRevenue: 25.0,
//     avgRevenue: 25.0
//   }
// }
// let orders = [
//   {
//     orderId: 1,
//     customerId: 1,
//     date: "2022-02-25",
//     items: [
//       { name: "Product 1", price: 10.0, quantity: 2 },
//       { name: "Product 2", price: 5.0, quantity: 3 },
//     ],
//   },
//   {
//     orderId: 3,
//     customerId: 1,
//     date: "2022-02-26",
//     items: [
//       { name: "Product 1", price: 10.0, quantity: 1 },
//       { name: "Product 3", price: 7.5, quantity: 2 },
//     ],
//   },
//   {
//     orderId: 2,
//     customerId: 2,
//     date: "2022-02-25",
//     items: [{ name: "Product 3", price: 7.5, quantity: 1 }],
//   },
// ];
// let a = orders.reduce((prev,curr)=>{ // take one by one elements in curr 
//     let {date,items}=curr; // destructure date and items
//     if(!prev[date]) // check if date not available in prev
//     {
//         prev[date]={numOrder:0, totalRevenue:0, avgRevenue:0}; // then create date element add 
//     }
//     console.log(items);
//     items.forEach((a)=>{
//         prev[date].totalRevenue +=  a.price * a.quantity;
//     })
//     prev[date].numOrder++;
//     prev[date].avgRevenue = prev[date].totalRevenue / prev[date].numOrder;
//     return prev;
// },{});
// console.log(a);

// task
// let code7 = [
//     {
//         id: "1",
//         amount: 100,
//         date: "2022-01-01",
//         category: "Food",
//         subcategory: "Groceries",
//         tags: ["groceries"],
//     },
//     {
//         id: "2",
//         amount: 50,
//         date: "2022-01-02",
//         category: "Transportation",
//         subcategory: "Metro",
//         tags: ["metro"],
//     },
//     {
//         id: "3",
//         amount: 200,
//         date: "2022-01-03",
//         category: "Food",
//         subcategory: "Restaurants",
//         tags: ["dining", "restaurants"],
//     },
//     {
//         id: "4",
//         amount: 150,
//         date: "2022-02-01",
//         category: "Entertainment",
//         subcategory: "Movies",
//         tags: ["movies"],
//     },
//     {
//         id: "5",
//         amount: 75,
//         date: "2022-02-02",
//         category: "Transportation",
//         subcategory: "Gas",
//         tags: ["gas"],
//     },
//     {
//         id: "6",
//         amount: 50,
//         date: "2022-02-03",
//         category: "Food",
//         subcategory: "Restaurants",
//         tags: ["dining", "restaurants"],
//     },
// ];
//output:
// {
//   Food: {
//     Groceries: {
//       "2022-01": {
//         total: 100,
//         count: 1,
//         avg: 100
//       }
//     },
//     Restaurants: {
//       "2022-01": {
//         total: 200,
//         count: 1,
//         avg: 200
//       },
//       "2022-02": {
//         total: 50,
//         count: 1,
//         avg: 50
//       }
//     }
//   },
//   Transportation: {
//     Metro: {
//       "2022-01": {
//         total: 50,
//         count: 1,
//         avg: 50
//       }
//     },
//     Gas: {
//       "2022-02": {
//         total: 75,
//         count: 1,
//         avg: 75
//       }
//     }
//   },
//   Entertainment: {
//     Movies: {
//       "2022-02": {
//         total: 150,
//         count: 1,
//         avg: 150
//       }
//     }
//   }
// }
// let a=code7.reduce((prev,curr)=>{
//     let {id,amount,date,category,subcategory,tags}=curr;
//     if(!prev[category])
//     {
//         prev[category]={};
//     }
//     if(!prev[category][subcategory]){
//         prev[category][subcategory] = {};
//     }
//     if(!prev[category][subcategory][date]){
//         prev[category][subcategory][date]={total:0,count:0,avg:0};
//     }
//     prev[category][subcategory][date].total += amount;
//     prev[category][subcategory][date].count++;
//     prev[category][subcategory][date].avg += prev[category][subcategory][date].total / prev[category][subcategory][date].count;

//     return prev;
// },{});
// console.log(a);

// task
// let code9 = [
//     {
//         id: "1",
//         name: "Alice",
//         department: "Engineering",
//         skills: ["JavaScript", "React"],
//         supervisorId: null,
//         subordinates: ["2", "3"],
//     },
//     {
//         id: "2",
//         name: "Bob",
//         department: "Engineering",
//         skills: ["JavaScript", "Java"],
//         supervisorId: "1",
//         subordinates: [],
//     },
//     {
//         id: "3",
//         name: "Charlie",
//         department: "Marketing",
//         skills: ["React", "Marketing"],
//         supervisorId: "1",
//         subordinates: ["4"],
//     },
//     {
//         id: "4",
//         name: "Dave",
//         department: "Marketing",
//         skills: ["Marketing"],
//         supervisorId: "3",
//         subordinates: [],
//     },
//     {
//         id: "5",
//         name: "Emily",
//         department: "Design",
//         skills: ["Photoshop"],
//         supervisorId: null,
//         subordinates: ["6"],
//     },
//     {
//         id: "6",
//         name: "Frank",
//         department: "Design",
//         skills: ["Illustrator"],
//         supervisorId: "5",
//         subordinates: [],
//     },
// ];
//output:
// {
//   Engineering: {
//     JavaScript: {
//       count: 2,
//       employeeIds: ["1", "2"]
//     },
//     React: {
//       count: 1,
//       employeeIds: ["1", "3"]
//     },
//     Java: {
//       count: 1,
//       employeeIds: ["2"]
//     }
//   },
//   Marketing: {
//     React: {
//       count: 1,
//       employeeIds: ["3"]
//     },
//     Marketing: {
//       count: 2,
//       employeeIds: ["3", "4"]
//     }
//   },
//   Design: {
//     Photoshop: {
//       count: 1,
//       employeeIds: ["5"]
//     },
//     Illustrator: {
//       count: 1,
//       employeeIds: ["6"]
//     }
//   }
// }
// let a = code9.reduce((prev, curr) => {
//     let { id, department, skills } = curr;
//     if (!prev[department]) {
//         prev[department] = {};
//     }
//     skills.forEach((item) => {
//         if (!prev[department][item]) {
//             prev[department][item] = { count: 0, employeesIds: [] };
//         }
//         prev[department][item].count++;
//         prev[department][item].employeesIds.push(id);
//     })
//     return prev;
// }, {});
// console.log(a);

// task
//question 10
// let code10 = [
//     {
//         id: "p1",
//         name: "Product 1",
//         category: "Category A",
//         price: 100,
//         relatedProducts: ["p2"],
//     },
//     {
//         id: "p2",
//         name: "Product 2",
//         category: "Category A",
//         price: 200,
//         relatedProducts: ["p3"],
//     },
//     {
//         id: "p3",
//         name: "Product 3",
//         category: "Category B",
//         price: 300,
//         relatedProducts: ["p4", "p5"],
//     },
//     {
//         id: "p4",
//         name: "Product 4",
//         category: "Category C",
//         price: 400,
//         relatedProducts: ["p5"],
//     },
//     {
//         id: "p5",
//         name: "Product 5",
//         category: "Category C",
//         price: 500,
//         relatedProducts: [],
//     },
//     {
//         id: "p6",
//         name: "Product 6",
//         category: "Category D",
//         price: 600,
//         relatedProducts: [],
//     },
// ];
//output:
// [
//   { id: "p1", relatedProducts: ["p2", "p3", "p4", "p5"] },
//   { id: "p2", relatedProducts: ["p3", "p4", "p5"] },
//   { id: "p3", relatedProducts: ["p4", "p5"] },
//   { id: "p4", relatedProducts: ["p5"] },
//   { id: "p5", relatedProducts: [] },
//   { id: "p6", relatedProducts: [] },
// ];
// let a = code10.map((values)=>{
//   let {id} = values; 
// })

// task
// let code13 = [
//     {
//         id: "u1",
//         name: "Alice",
//         friends: ["u2", "u3"],
//         age: 25,
//     },
//     {
//         id: "u2",
//         name: "Bob",
//         friends: ["u1", "u4"],
//         age: 30,
//     },
//     {
//         id: "u3",
//         name: "Charlie",
//         friends: ["u1", "u4"],
//         age: 35,
//     },
//     {
//         id: "u4",
//         name: "David",
//         friends: ["u2", "u3"],
//         age: 40,
//     },
// ];
//output:
// {
//   nodes: {
//     "u1": {
//       name: "Alice",
//       age: 25
//     },
//     "u2": {
//       name: "Bob",
//       age: 30
//     },
//     "u3": {
//       name: "Charlie",
//       age: 35
//     },
//     "u4": {
//       name: "David",
//       age: 40
//     }
//   },
//   edges: {
//     "u1": {
//       "u2": true,
//       "u3": true
//     },
//     "u2": {
//       "u1": true,
//       "u4": true
//     },
//     "u3": {
//       "u1": true,
//       "u4": true
//     },
//     "u4": {
//       "u2": true,
//       "u3": true
//     }
//   }
// }
// let arr = code13.reduce((prev, curr) => {
//     let { id, name, friends, age } = curr;
//     if (!prev.node[id]) {
//         prev.node[id] = {};
//     }
//     prev.node[id] = { name, age };
//     if (!prev.edges[id]) {
//         prev.edges[id] = {};
//     }
//     friends.forEach(item => {
//         if (!prev.edges[id][item]) {
//             prev.edges[id][item] = true;
//         }
//     })
//     return prev;
// }, { node: {}, edges: {} });
// console.log(arr);

// task
// const departments = [
//     { id: 1, name: "React", budget: 100000 },
//     { id: 2, name: "DotNet", budget: 80000 },
//     { id: 3, name: "Node", budget: 120000 },
// ];
// const employees = [
//     {
//         id: 1,
//         name: "Barney Stinson",
//         salary: 50000,
//         departmentId: 2,
//     },
//     {
//         id: 7,
//         name: "Ross Geller",
//         salary: 60000,
//         departmentId: 1,
//     },
//     {
//         id: 3,
//         name: "Michael Scott",
//         salary: 55000,
//         departmentId: 2,
//     },
//     {
//         id: 4,
//         name: "Ted Mosby",
//         salary: 70000,
//         departmentId: 1,
//     },
//     {
//         id: 5,
//         name: "Chandler Bing",
//         salary: 80000,
//         departmentId: 3,
//     },
//     {
//         id: 6,
//         name: "Rachel Green",
//         salary: 90000,
//         departmentId: 1,
//     },
//     {
//         id: 2,
//         name: "Lily Aldrin",
//         salary: 75000,
//         departmentId: 1,
//     },
//];
//output
// {
//   React: {
//     totalSalaries: 235000,
//     isWithinBudget: false
//   },
//   DotNet: {
//     totalSalaries: 105000,
//     isWithinBudget: true
//   },
//   Node: {
//     totalSalaries: 80000,
//     isWithinBudget: true
//   }
// }
// let a = departments.reduce((prev, curr) => {
//     let { id, name, budget } = curr;
//     if (!prev[name]) {
//         prev[name] = {};
//     }
//     prev[name] = { totalSalaries: 0, isWithinBudget: 0 };
//     employees.forEach((item) => {
//         if (id === item.departmentId) {
//             prev[name].totalSalaries += item.salary;
//         }
//     })
//     if (prev[name].totalSalaries <= budget) {
//         prev[name].isWithinBudget = true;
//     }
//     else {
//         prev[name].isWithinBudget = false;
//     }
//     return prev;
// }, {});
// console.log(a);

// task
// const departments = [
//     { id: 1, name: "React" },
//     { id: 2, name: "DotNet" },
//     { id: 3, name: "Node" },
// ];
// const employees = [
//     {
//         id: 1,
//         name: "Barney Stinson",
//         designation: "Manager",
//         departmentId: 2,
//     },
//     {
//         id: 7,
//         name: "Ross Geller",
//         designation: "Developer",
//         departmentId: 1,
//     },
//     {
//         id: 3,
//         name: "Michael Scott",
//         designation: "Developer",
//         departmentId: 2,
//     },
//     {
//         id: 4,
//         name: "Ted Mosby",
//         designation: "Developer",
//         departmentId: 1,
//     },
//     {
//         id: 5,
//         name: "Chandler Bing",
//         designation: "Manager",
//         departmentId: 3,
//     },
//     {
//         id: 6,
//         name: "Rachel Green",
//         designation: "Manager",
//         departmentId: 1,
//     },
//     {
//         id: 2,
//         name: "Lily Aldrin",
//         designation: "Developer",
//         departmentId: 1,
//     },
// ];
// Output:
// {
//   React: {
//     Developer: [
//       {
//         id: 4,
//         name: 'Ted Mosby',
//         designation: 'Developer',
//         departmentId: 1
//       },
//       {
//         id: 2,
//         name: 'Lily Aldrin',
//         designation: 'Developer',
//         departmentId: 1
//       }
//     ],
//     Manager: [
//       {
//         id: 6,
//         name: 'Rachel Green',
//         designation: 'Manager',
//         departmentId: 1
//       }
//     ]
//   },
//   DotNet: {
//     Manager: [
//       {
//         id: 1,
//         name: 'Barney Stinson',
//         designation: 'Manager',
//         departmentId: 2
//       }
//     ],
//     Developer: [
//       {
//         id: 3,
//         name: 'Michael Scott',
//         designation: 'Developer',
//         departmentId: 2
//       }
//     ]
//   },
//   Node: {
//     Manager: [
//       {
//         id: 5,
//         name: 'Chandler Bing',
//         designation: 'Manager',
//         departmentId: 3
//       }
//     ]
// }
// }
// let a = departments.reduce((prev,curr)=>{
//     let {name,id}=curr;
//     if(!prev[name])
//     {
//         prev[name]={};
//     }
//     employees.forEach(item=>{
//         let {designation,departmentId}=item;
//         if(!prev[name][designation])
//         {
//             prev[name][designation]=[];
//         }
//         if(departmentId===id){
//             prev[name][designation].push(item);
//         }
//     });
//     return prev;
// },{});
// console.log(a)

// task
// const orders = [
//     {
//         customer: "John Smith",
//         orderId: "12345",
//         products: [
//             { name: "Apples", quantity: 3, price: 0.5 },
//             { name: "Oranges", quantity: 2, price: 0.8 },
//             { name: "Bananas", quantity: 1, price: 0.2 },
//         ],
//     },
//     {
//         customer: "Jane Doe",
//         orderId: "67890",
//         products: [
//             { name: "Grapes", quantity: 2, price: 1.2 },
//             { name: "Blueberries", quantity: 1, price: 2.5 },
//         ],
//     },
//     {
//         customer: "John Smith",
//         orderId: "24680",
//         products: [
//             { name: "Pears", quantity: 4, price: 0.7 },
//             { name: "Peaches", quantity: 2, price: 1.2 },
//         ],
//     },
//     {
//         customer: "Jane Doe",
//         orderId: "13579",
//         products: [{ name: "Strawberries", quantity: 3, price: 2.0 }],
//     },
// ];
//output
// {
//   "John Smith": {
//     "12345": 2.1,
//     "24680": 5.0,
//     total: 7.1,
//   },
//   "Jane Doe": {
//     "67890": 3.9,
//     "13579": 6.0,
//     total: 9.9,
//   },
// }
// let a = orders.reduce((prev,curr)=>{
//     let {customer,orderId,products}=curr;
//     if(!prev[customer])
//     {
//         prev[customer]={};
//     }
//     let cost=0;
//     products.forEach((item)=>{
//         cost += item.quantity * item.price;
//     })
//     prev[customer][orderId]=cost;
//     prev[customer].total=0;
//     Object.values(prev[customer]).forEach(i=>{
//         prev[customer].total += i;
//     })
//     return prev;
// },{});
// console.log(a);

// task
// const users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 35 },
//     { id: 4, name: "David", age: 40 },
// ];

// const products = [
//     { id: 101, name: "Product A", price: 10 },
//     { id: 102, name: "Product B", price: 20 },
//     { id: 103, name: "Product C", price: 30 },
//     { id: 104, name: "Product D", price: 40 },
// ];

// const orders = [
//     {
//         id: 1,
//         customerId: 1,
//         items: [
//             { productId: 101, quantity: 2 },
//             { productId: 102, quantity: 1 },
//         ],
//     },
//     {
//         id: 2,
//         customerId: 2,
//         items: [
//             { productId: 102, quantity: 3 },
//             { productId: 103, quantity: 2 },
//         ],
//     },
//     {
//         id: 3,
//         customerId: 1,
//         items: [
//             { productId: 103, quantity: 1 },
//             { productId: 104, quantity: 2 },
//         ],
//     },
//     {
//         id: 4,
//         customerId: 3,
//         items: [
//             { productId: 101, quantity: 4 },
//             { productId: 103, quantity: 1 },
//         ],
//     },
//     {
//         id: 5,
//         customerId: 4,
//         items: [
//             { productId: 102, quantity: 2 },
//             { productId: 104, quantity: 3 },
//         ],
//     },
// ];
//output
// {Alice: 150, Bob: 120, Charlie: 70, David: 160}
// let a = users.reduce((acc, curr) => {
//     let cost = 0;
//     if (!acc[curr.name]) {

//         acc[curr.name] = 0;
//     }
//     let total = 0;
//     orders.forEach((values1) => {
//         values1.items.forEach((values2) => {
//             products.forEach((values3) => {
//                 if (curr.id === values1.customerId) {
//                     if (values2.productId === values3.id) {
//                         cost = values3.price * values2.quantity;
//                         console.log(cost);
//                         total += cost;
//                     }
//                 }
//             })
//             acc[curr.name] = total;
//         })
//     })
//     return acc;
// }, {});
// console.log(a);


// task
// const orders = [
//     {
//         oid: 1,
//         customer: "John",
//         items: [
//             { id: 101, quantity: 2 },
//             { id: 102, quantity: 1 },
//         ]
//     },
//     {
//         oid: 2,
//         customer: "Mary",
//         items: [
//             { id: 101, quantity: 1 },
//             { id: 104, quantity: 3 },
//         ]
//     },
//     {
//         oid: 3,
//         customer: "Bob",
//         items:
//         [{ id: 103, quantity: 4 }]
//     }
// ];
// const products = [
//     { pid: 101, name: "Product A", price: 10 },
//     { pid: 102, name: "Product B", price: 20 },
//     { pid: 103, name: "Product C", price: 30 },
//     { pid: 104, name: "Product D", price: 40 }
// ];
// output:
// {
//      "John":{
//          "totalCost":40,
//      },
//      "Mary":{
//          "totalCost":130,
//      },
//      "Bob":{
//          "totalCost":120,
//      }
// }
// let a = orders.reduce((prev,curr)=>
// {
//     let {customer,items}=curr;
//     if(!prev[customer])
//     {
//         prev[customer]={};
//     }
//     prev[customer]={totalcost:0};
//     let cost = 0;
//     items.forEach((item)=>{
//         // console.log(item);
//         products.forEach((values)=>{
//             // console.log(values);
//             if(item.id === values.pid)
//             {
//                 cost= values.price * item.quantity;
//                 console.log(cost);
//             }
//         })
//         prev[customer].totalcost += cost;
//     })
//     return prev;
// },{});
// console.log(a);

// task
// const departments = [
//   { id: 1, name: "React" },
//   { id: 2, name: "DotNet" },
//   { id: 3, name: "Node" },
// ];
// const employees = [
//   {
//     id: 1,
//     name: "Barney Stinson",
//     designation: "Manager",
//     departmentId: 2,
//   },
//   {
//     id: 7,
//     name: "Ross Geller",
//     designation: "Developer",
//     departmentId: 1,
//   },
//   {
//     id: 3,
//     name: "Michael Scott",
//     designation: "Developer",
//     departmentId: 2,
//   },
//   {
//     id: 4,
//     name: "Ted Mosby",
//     designation: "Developer",
//     departmentId: 1,
//   },
//   {
//     id: 5,
//     name: "Chandler Bing",
//     designation: "Manager",
//     departmentId: 3,
//   },
//   {
//     id: 8,
//     name: "Meet",
//     designation: "Developer",
//     departmentId: 3,
//   },
//   {
//     id: 6,
//     name: "Rachel Green",
//     designation: "Manager",
//     departmentId: 1,
//   },
//   {
//     id: 2,
//     name: "Lily Aldrin",
//     designation: "Developer",
//     departmentId: 1,
//   },
// ];
// Output:
// {
//   React: {
//     Developer: [
//       {
//         id: 4,
//         name: 'Ted Mosby',
//         designation: 'Developer',
//         departmentId: 1
//       },
//       {
//         id: 2,
//         name: 'Lily Aldrin',
//         designation: 'Developer',
//         departmentId: 1
//       }
//     ],
//     Manager: [
//       {
//         id: 6,
//         name: 'Rachel Green',
//         designation: 'Manager',
//         departmentId: 1
//       }
//     ]
//   },
//   DotNet: {
//     Manager: [
//       {
//         id: 1,
//         name: 'Barney Stinson',
//         designation: 'Manager',
//         departmentId: 2
//       }
//     ],
//     Developer: [
//       {
//         id: 3,
//         name: 'Michael Scott',
//         designation: 'Developer',
//         departmentId: 2
//       }
//     ]
//   },
//   Node: {
//     Manager: [
//       {
//         id: 5,
//         name: 'Chandler Bing',
//         designation: 'Manager',
//         departmentId: 3
//       }
//     ]
//   }
// }
// let b = Object.values(employees).sort((a,b)=>a.id-b.id);
// let a = departments.reduce((prev,curr)=>{
//   // let {id}=curr;
//   if(!prev[curr.name])
//   {
//     prev[curr.name]={};
//   }
//   b.forEach((item)=>{
//     let {designation,departmentId}=item;
//     if(!prev[curr.name][designation])
//     {
//       prev[curr.name][designation]=[];
//     }
//     if(curr.id===departmentId)
//     {
//       prev[curr.name][designation].push(item);
//     }
//   })
//   return prev;
// },{});
// console.log(a);


// task
// const users = [
//   { id: "u1", name: "Alice" },
//   { id: "u2", name: "Bob" },
//   { id: "u3", name: "Charlie" },
// ];
// const transactions = [
//   { id: "t1", userId: "u1", productId: "p1", amount: 10 },
//   { id: "t2", userId: "u1", productId: "p2", amount: 20 },
//   { id: "t3", userId: "u2", productId: "p3", amount: 30 },
//   { id: "t4", userId: "u3", productId: "p4", amount: 40 },
//   { id: "t5", userId: "u3", productId: "p5", amount: 50 },
// ];
//output
// [
//   {
//     id: "u1",
//     name: "Alice",
//     totalSpent: 30,
//     transactions: [
//       { id: "t1", productId: "Product 1", amount: 10 },
//       { id: "t2", productId: "Product 2", amount: 20 },
//     ],
//   },
//   {
//     id: "u2",
//     name: "Bob",
//     totalSpent: 30,
//     transactions: [{ id: "t3", productId: "Product 3", amount: 30 }],
//   },
//   {
//     id: "u3",
//     name: "Charlie",
//     totalSpent: 90,
//     transactions: [
//       { id: "t4", productId: "Product 4", amount: 40 },
//       { id: "t5", productId: "Product 5", amount: 50 },
//     ],
//   },
// ]
// let output=users.map(user=>{
//   let {id,name}=user;
//   let result={id,name,totalSpent:0,transactions:[]}
//   transactions.forEach(transaction=>{
//     let {userId,amount}=transaction;
//     if(id===userId){
//       result.totalSpent+=amount;
//       result.transactions.push(transaction);
//     }
//   })
//   return result;
// })
// console.log(output);

// task
// const users = [
//   { id: "u1", name: "Alice" },
//   { id: "u2", name: "Bob" },
//   { id: "u3", name: "Charlie" },
// ];
// const transactions = [
//   { id: "t1", userId: "u1", productId: "p1", amount: 10 },
//   { id: "t2", userId: "u1", productId: "p2", amount: 20 },
//   { id: "t3", userId: "u2", productId: "p3", amount: 30 },
//   { id: "t4", userId: "u3", productId: "p4", amount: 40 },
//   { id: "t5", userId: "u3", productId: "p5", amount: 50 },
// ];
// output
// {
//   "name": totalamount;
//   "name1":totalamount;
// }
// let a = users.reduce((prev,curr)=>{
//   let{id}=curr;
//   if(!prev[id])
//   {
//     prev[id]=0;
//   }
//   console.log(prev[id]);
//   let cost=0;
//   transactions.forEach((item)=>{
//     let {userId,amount}=item;
//     if(id===userId)
//     {
//       cost += amount;
//     }
//   })
//   prev[id] = cost;
//   return prev;
// },{});
// console.log(a);


//task
// let product=[
//   { productName: "Product A", quantitySold: 10, pricePerUnit: 50 },
//   { productName: "Product B", quantitySold: 20, pricePerUnit: 75 },
//   { productName: "Product A", quantitySold: 5, pricePerUnit: 45 },
//   { productName: "Product C", quantitySold: 15, pricePerUnit: 100 },
//   { productName: "Product B", quantitySold: 10, pricePerUnit: 80 },
// ];
// output:
// [
//   { productName: "Product A", totalRevenue: 725 },
//   { productName: "Product B", totalRevenue: 1750 },
//   { productName: "Product C", totalRevenue: 1500 },
// ] 
// let a = product.reduce((prev,curr)=>{
//   let {productName,quantitySold,pricePerUnit}=curr;
//   if(!prev[productName])
//   {
//     prev[productName]=0;
//   }
//   prev[productName]+=quantitySold*pricePerUnit;
//   return prev;
// },{});
// let result=[];
// Object.entries(a).forEach(([productName,totalRevenue])=>{
//   result.push({productName,totalRevenue});
// })
// console.log(result);


// task
// let demographic = [
//   { age: 35, gender: "Male", location: "New York" },
//   { age: 42, gender: "Female", location: "San Francisco" },
//   { age: 28, gender: "Male", location: "New York" },
//   { age: 31, gender: "Male", location: "Chicago" },
//   { age: 29, gender: "Female", location: "Chicago" },
// ];
//output:
// [
//   { averageAge: 33, percentageMale: 60, percentageFemale: 40, location: 'New York' },
//   { averageAge: 36, percentageMale: 0, percentageFemale: 100, location: 'San Francisco' },
//   { averageAge: 30, percentageMale: 50, percentageFemale: 50, location: 'Chicago' }
// ]
// let a = demographic.reduce((prev,curr)=>{
//   let {location,age,gender}=curr;
//   if(!prev[location])
//   {
//     prev[location]={totalAge:0,person:0,maleCount:0};
//   }
//   prev[location].totalAge += age;
//   prev[location].person++;
//   if(gender === "Male")
//   {
//     prev[location].maleCount++;
//   }
//   return prev;
// },{});
// let final=[];
// Object.entries(a).forEach((item)=>{
//   let result={averageAge:0, percentageMale:0, percentageFemale:0, location:item[0]};
//   result.averageAge=item[1].totalAge/item[1].person;
//   result.percentageMale = item[1].maleCount*100/item[1].person;
//   result.percentageFemale = 100 - result.percentageMale;
//   final.push(result); 
//   // return result;
// })
// console.log(final);

// const employees = [
//   { id: 1, name: "Alice", department: "Sales", salary: 50000 },
//   { id: 2, name: "Bob", department: "Marketing", salary: 60000 },
//   { id: 3, name: "Charlie", department: "Sales", salary: 55000 },
//   { id: 4, name: "David", department: "Engineering", salary: 70000 },
//   { id: 5, name: "Emily", department: "Marketing", salary: 65000 },
//   { id: 6, name: "Frank", department: "Engineering", salary: 75000 },
//   { id: 7, name: "Grace", department: "Sales", salary: 60000 },
//   { id: 8, name: "Henry", department: "Marketing", salary: 70000 },
// ];
//output:
// {
//   departmentCount: {
//     Sales: 3,
//     Marketing: 3,
//     Engineering: 2
//   },
//   departmentSalary: {
//     Sales: 55000,
//     Marketing: 65000,
//     Engineering: 72500
//   }
// }
// let a = employees.reduce((prev,curr)=>{
//     let {department}=curr;
//     if(!prev[department])
//     {
//       prev[department]={};
//       prev[department].count=0
//       prev[department].salary=0
//     }
//     prev[department].count ++;
//     prev[department].salary += curr.salary; 
//   return prev;
// },{});
// console.log(a);
// let b = Object.entries(a).reduce((prev,curr)=>{
//   let [name,obj] = [...curr];
//   prev.departmentCount[name]=obj.count;
//   prev.departmentSalary[name]=obj.salary/obj.count;
//   return prev;
// },{departmentCount:{},departmentSalary:{}})
// console.log(b);


// task
// const employees = [
//   { id: 1, name: "John", department: "Sales" },
//   { id: 2, name: "Mary", department: "Marketing" },
//   { id: 3, name: "Bob", department: "Sales" },
//   { id: 4, name: "Jane", department: "Marketing" }
// ];
// const departments = [
//   { id: 1, name: "Sales", managerId: 1 },
//   { id: 2, name: "Marketing", managerId: 2 }
// ];
// const salaries = [
//   { id: 1, employeeId: 1, amount: 50000 },
//   { id: 2, employeeId: 2, amount: 60000 },
//   { id: 3, employeeId: 3, amount: 55000 },
//   { id: 4, employeeId: 4, amount: 65000 }
// ];
// const managers = [
//   { id: 2, name: "Sarah" },
//   { id: 1, name: "David" }
// ]; 
//output:
// [
//  {id: 1, name: 'Sales', totalSpent: 105000, ManagerName:'David'},
//  {id: 2, name: 'Marketing', totalSpent: 125000, ManagerName:'Sarah'}
// ]
// let a = managers.map((values)=>{
//   let {id}=values;
//   let result={id,name,totalspent:0,ManagerName:""}
//   result.id = values.id;
//   let cost=0;
//   departments.forEach((item)=>{
//     if(values.id === item.managerId)
//     {
//       result.name = item.name;
//       result.ManagerName = values.name;
//     }
//     employees.forEach((item1)=>{
//       salaries.forEach((item2)=>{ //employees = item1, salaries=item2, managers=values, department=item
//         if(item1.id === item2.employeeId)
//         {
//           if(item1.department === item.name)
//           {
//             if(item.managerId === values.id)
//             {
//               cost += item2.amount;
//             }
//           }
//         }
//       })
//     })
//   })
//    result.totalspent=cost;
//   return result;
// });
// console.log(a);

// const users = [
//   { id: 1, name: "Alice", friends: [2, 3, 4] },
//   { id: 2, name: "Bob", friends: [1, 3] },
//   { id: 3, name: "Charlie", friends: [1, 2, 4] },
//   { id: 4, name: "David", friends: [1, 3] },
// ];
// const messages = [
//   { id: 1, 
//     senderId: 1, 
//     recipientId: 2, 
//     content: "Hey Bob, how are you?" 
//   },
//   {
//     id: 2,
//     senderId: 2,
//     recipientId: 1,
//     content: "I'm good, thanks. How about you?"
//   },
//   { id: 3, 
//     senderId: 1, 
//     recipientId: 3, 
//     content: "Hey Charlie, what's up?" 
//   },
//   {
//     id: 4,
//     senderId: 3,
//     recipientId: 1,
//     content: "Not much, just hanging out."
//   },
//   { id: 5, 
//     senderId: 4, 
//     recipientId: 2, 
//     content: "Hey Bob, can we talk?" 
//   },
//   { id: 6, 
//     senderId: 2, 
//     recipientId: 4, 
//     content: "Sure, what's up?" 
//   },
// ];
//output:
// {
//   1: [
//     { sender: "Charlie", content: "Not much, just hanging out." },
//     { sender: "Bob", content: "I'm good, thanks. How about you?" }
//   ],
//   2: [
//     { sender: "David", content: "Hey Bob, can we talk?" },
//     { sender: "Alice", content: "Hey Bob, how are you?" }
//   ],
//   3: [
//     { sender: "Alice", content: "Hey Charlie, what's up?" }
//   ],
//   4: [
//     { sender: "Bob", content: "Sure, what's up?" }
//   ]
// }
// let a = users.reduce((prev,curr)=>{
//   let {id} = curr;
//   if(!prev[id])
//   {
//     prev[id]=[];
//   }
//   messages.forEach((values)=>{
//     users.forEach((values1)=>{
//     if(id === values.recipientId)
//     {
//         if(values.senderId === values1.id)
//         {
//           prev[id].push({sender:values1.name, content:values.content});
//         }
//       }
//     })
//   })
//   return prev;
// },{})
// console.log(a);


// task
// const users = [
//   { id: 1, name: 'Alice', orderIds: [1, 2] },
//   { id: 2, name: 'Bob', orderIds: [3] },
//   { id: 3, name: 'Charlie', orderIds: [4, 5, 6] },
// ];
// const orders = [
//   { id: 1, userId: 1, productIds: [1, 2] },
//   { id: 2, userId: 1, productIds: [2, 3, 4] },
//   { id: 3, userId: 2, productIds: [1, 3] },
//   { id: 4, userId: 3, productIds: [2, 4, 5] },
//   { id: 5, userId: 3, productIds: [1, 3] },
//   { id: 6, userId: 3, productIds: [4] },
// ];
// const products = [
//   { id: 1, name: 'Product A', price: 10 },
//   { id: 2, name: 'Product B', price: 20 },
//   { id: 3, name: 'Product C', price: 30 },
//   { id: 4, name: 'Product D', price: 40 },
//   { id: 5, name: 'Product E', price: 50 },
// ];
// output:
// {
//   'Alice': { totalOrderValue: 120, 
//               products: [ 'Product A', 'Product B', 'Product C', 'Product D' ] 
//             },
//   'Bob': { totalOrderValue: 40, 
//             products: [ 'Product A', 'Product C' ] 
//           },
//   'Charlie': { totalOrderValue: 190, 
//                 products: [ 'Product B', 'Product D', 'Product E', 'Product A', 'Product C' ] 
//               }
// }
// let a = users.reduce((prev,curr)=>{
//   let {name,id}=curr;
//   if(!prev[name])
//   {
//     prev[name]={};
//   }
//   prev[name]={totalOrderValue:0, products:[]};
//   orders.forEach((order)=>{
//     let {userId}=order;
//     if(id === userId)
//     {
//       products.forEach((products)=>{
//         order.productIds.forEach((values)=>{
//           if(values === products.id)
//           {
            
//             prev[name].totalOrderValue += products.price;
//             prev[name].products.push(products.name);
//           }
//         })
//       })
//     }
//   })
//   prev[name].products=[...new Set(prev[name].products)];
//   return prev;
// },{});
// console.log(a);


// task
// const orders = [
//   { id: 1, customer_id: 1, items: [101, 102], status: "pending" },
//   { id: 2, customer_id: 2, items: [103], status: "delivered" },
//   { id: 3, customer_id: 1, items: [104, 105], status: "pending" },
//   { id: 4, customer_id: 3, items: [106, 107, 108], status: "pending" },
// ];
// const customers = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];
// const items = [
//   { id: 101, name: "Widget A", price: 10 },
//   { id: 102, name: "Widget B", price: 20 },
//   { id: 103, name: "Widget C", price: 15 },
//   { id: 104, name: "Widget D", price: 25 },
//   { id: 105, name: "Widget E", price: 30 },
//   { id: 106, name: "Widget F", price: 40 },
//   { id: 107, name: "Widget G", price: 35 },
//   { id: 108, name: "Widget H", price: 45 },
// ];
// Expected output:
// {
//   "Alice": {
//     "totalRevenue": 85,
//     "orders": [
//       {
//         "id": 1,
//         "totalRevenue": 30,
//         "itemCount": 2
//       },
//       {
//         "id": 3,
//         "totalRevenue": 55,
//         "itemCount": 2
//       }
//     ]
//   },
//   "Bob": {
//     "totalRevenue": 15,
//     "orders": [
//       {
//         "id": 2,
//         "totalRevenue": 15,
//         "itemCount": 1
//       }
//     ]
//   },
//   "Charlie": {
//     "totalRevenue": 120,
//     "orders": [
//       {
//         "id": 4,
//         "totalRevenue": 120,
//         "itemCount": 3
//       }
//     ]
//   }
// }
// let a = customers.reduce((prev,curr)=>{
//   let count=0;
//   if(!prev[curr.name])
//   {
//     prev[curr.name]={totalRevenue:0, orders:[]}
//   }
//   let total = 0;
//   orders.forEach((orders)=>{
//     if(curr.id === orders.customer_id)
//     {
//       orders.items.forEach((values)=>{
//         items.forEach((items)=>{
//           if(values === items.id)
//           {
//             prev[curr.name].totalRevenue += items.price;
//             total += items.price
//           }
//         })
//       })
//       prev[curr.name].orders.push({id:orders.id, totalRevenue:total,itemCount: count })
//     }
//   })
//   return prev;
// },{});
// console.log(a);
// let a=customers.reduce((prev,curr)=>{
//   let total=0;
//   if(!prev[curr.name])
//   {
//     prev[curr.name]={totalRevenue:0, orders:[]}
//   }

//   return prev;
// },{})
// console.log(a);


// task
/* 
- remove all whose name starts with 'je' and last character is not a vowel
- order the result in descending by age 
- if age is same then order them in ascending by name
- final out should be an object in below format 
 { name1: age1, name2: age2, ... } 
*/
// const arr = [
//   { id: 1, name: "John", age: 22 },
//   { id: 4, name: "Jenny", age: 21 },
//   { id: 3, name: "Jim", age: 24 },
//   { id: 6, name: "Jonathan", age: 25 },
//   { id: 2, name: "Jane", age: 24 },
//   { id: 5, name: "Jennifer", age: 21 },
//   { id: 7, name: "Jesicca", age: 26 },
//   { id: 8, name: "Jey", age: 28 }
// ];
//output:
// {
//   name1:age1;
//   name2:age2;
// }
// let vowel = ["a", "e", "i", "o", "u","A","E","I","O","U"];
// let b = arr.filter((a) => {
//   let x=a.name.length;
//   let c;
//   if ((a.name.charAt(0) === "J" || a.name.charAt(0) === "j") && (a.name.charAt(1) === "e"|| a.name.charAt(0) === "j") &&  !(vowel.includes(a.name[a.name.length-1]))) 
//   {
//         c = a.name;
//   }
//   return c;
// });
// console.log(b);
// let d = b.reduce((prev,curr)=>{
//   if(!prev[curr.name])
//   {
//     prev[curr.name]=curr.age;
//   }
//   return prev;
// },{});
// console.log(d);

// const orders = [
//   {
//     customer: "Alice",
//     items: [
//       { name: "apple", quantity: 3 },
//       { name: "banana", quantity: 2 },
//       { name: "orange", quantity: 1 },
//     ],
//   },
//   {
//     customer: "Bob",
//     items: [
//       { name: "banana", quantity: 1 },
//       { name: "orange", quantity: 2 },
//       { name: "pear", quantity: 3 },
//     ],
//   },
//   {
//     customer: "Charlie",
//     items: [
//       { name: "apple", quantity: 1 },
//       { name: "orange", quantity: 3 },
//     ],
//   },
// ];
// {
//   "orange": 6,
//   "apple": 4,
//   "pear": 3,
//   "banana": 3
// }  
// let a = orders.reduce((prev,curr)=>{
//   curr.items.forEach((values)=>{
//     if(!prev[values.name])
//     {
//       prev[values.name] = 0;
//     }
//     prev[values.name] += values.quantity;
//   })
//   return prev;
// },{});
// console.log(a);
// let b = Object.fromEntries(Object.entries(a).sort((a,b)=>{
//   return b[1]-a[1];
// }))
// console.log(b);


// task
// const data = [
//   {
//     id: 1,
//     name: "John",
//     age: 30,
//     hobbies: ["guitar", "hiking", "reading"],
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "CA",
//       zip: "12345",
//     },
//   },
//   {
//     id: 2,
//     name: "Jane",
//     age: 25,
//     hobbies: ["painting", "cooking", "traveling"],
//     address: {
//       street: "456 Elm St",
//       city: "Othertown",
//       state: "NY",
//       zip: "67890",
//     },
//   },
// ];
// 1. Create a new array that contains the names of all people in the data array.
// 2. Find the oldest person in the data array and log their name and age to the console.
// 3. Create a new object that groups people by state (using the state abbreviation as the key), and for each state, create an array of objects that contain the name, age, and hobbies of each person.

//TASK
// Your task is to create a new array of objects containing only the books published in the year 2000 or later, 
// sorted in descending order by the author's last name, and formatted in a specific way. Here are the requirements for the output format:
// Each book should be represented as an object with two properties: "title" and "author".
// The "title" property should be a string containing the book's title, followed by a comma and a space, 
// followed by the publisher's name in parentheses.
// The "author" property should be a string containing the author's last name, 
// followed by a comma and a space, followed by the author's first name.
// const books = [
//   {
//     title: "The Great Gatsby",
//     author: { firstName: "F. Scott", lastName: "Fitzgerald" },
//     publisher: { name: "Scribner" },
//     publicationYear: 1925,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: { firstName: "Harper", lastName: "Lee" },
//     publisher: { name: "Lippincott" },
//     publicationYear: 1960,
//   },
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     author: { firstName: "J.K.", lastName: "Rowling" },
//     publisher: { name: "Bloomsbury" },
//     publicationYear: 1997,
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: { firstName: "J.D.", lastName: "Salinger" },
//     publisher: { name: "Little, Brown and Company" },
//     publicationYear: 1951,
//   },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     author: { firstName: "Stieg", lastName: "Larsson" },
//     publisher: { name: "Norstedts Förlag" },
//     publicationYear: 2005,
//   },
//   {
//     title: "The Hunger Games",
//     author: { firstName: "Suzanne", 
//               lastName: "Collins" },
//     publisher: { name: "Scholastic" },
//     publicationYear: 2008,
//   },
// ];
// output:
// [
//   { title: "The Hunger Games, Scholastic", author: "Collins, Suzanne" },
//   { title: "The Girl with the Dragon Tattoo, Norstedts Förlag", author: "Larsson, Stieg" },
//   { title: "Harry Potter and the Philosopher's Stone, Bloomsbury", author: "Rowling, J.K." }
// ]
// let a = books.filter((item)=>{
//   if(item.publicationYear >= 2000)
//   {
//     return item;
//   }
// });
// console.log(a);
// a=a.sort((a,b)=>{
//  return a.author.lastName-b.author.lastName;
// })
// console.log(a);
// let result=[];
// a = a.reduce((prev,curr)=>{
//   let {title,author,publisher}=curr;
//   let b=Object.values(author).toString();
//   let c=Object.values(publisher).toString();
//   console.log(c);
//   result.push({title:`${title}, ${c}`,author:b});
//   return result;
// },[]);
// console.log(a);


// task
// let marks = [  { name: "Alice", courses: ["Math", "English", "History"], grades: [80, 85, 90] },
//   { name: "Bob", courses: ["Math", "Physics", "Chemistry"], grades: [95, 90, 85] },
//   { name: "Charlie", courses: ["Biology", "Geography", "History"], grades: [75, 85, 95] },
//   { name: "Dave", courses: ["Math", "Physics", "English"], grades: [90, 80, 95] }
// ]
//  [
//    { name: "Bob", averageGrade: 90, numCoursesAbove90: 2, coursesAbove90: ["Math", "Physics"] },
//    { name: "Dave", averageGrade: 88.3, numCoursesAbove90: 2, coursesAbove90: ["Math", "English"] },
//    { name: "Alice", averageGrade: 85, numCoursesAbove90: 1, coursesAbove90: ["History"] },
//    { name: "Charlie", averageGrade: 85, numCoursesAbove90: 1, coursesAbove90: ["History"] }
//  ]
// let result = [];
// let a = marks.reduce((prev,curr)=>{
//   let {name,courses}=curr;
//   let total = 0;
//   let above = 0;
//   let i=0;
//   let courses1 = [];
//   curr.grades.forEach((values)=>{
//     total += values;
//     if(values>=90)
//     {
//       above++;
//       i = curr.grades.indexOf(values);
//       courses1.push(courses[i]);
//     }
//   })
//   total = (total*100) /(curr.grades.length*100);
//   result.push({name, averageGrade:total, numCourseAbove:above, courses:courses1})
//   return result;
// },[]);
// console.log(a);
// console.log(a.sort((a,b)=>{
//   return b.averageGrade-a.averageGrade
// }));

// task
// let users=[
//   {
//     name: "Alice",
//     age: 25,
//     friends: [
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 20 },
//     ],
//   },
//   {
//     name: "Bob",
//     age: 30,
//     friends: [
//       { name: "Alice", age: 25 },
//       { name: "Dave", age: 35 },
//     ],
//   },
//   {
//     name: "Charlie",
//     age: 20,
//     friends: [
//       { name: "Alice", age: 25 },
//       { name: "Eve", age: 18 },
//     ],
//   },
//   {
//     name: "Dave",
//     age: 35,
//     friends: [
//       { name: "Bob", age: 30 },
//       { name: "Eve", age: 18 },
//     ],
//   },
//   {
//     name: "Eve",
//     age: 18,
//     friends: [
//       { name: "Charlie", age: 20 },
//       { name: "Dave", age: 35 },
//     ],
//   },
// ]
// You are given an array of objects, where each object represents a user and has the 
// following properties: name (string), age (number), and friends (array of objects, where each object represents a friend and has the properties name and age). 
// Write a function that takes this array and returns a new array that contains only the users who have at least one friend who is older than them. The returned array should be sorted by age, with the youngest user first.
//output:
// [
//   ({
//     name: "Alice",
//     age: 25,
//     friends: [
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 20 },
//     ],
//   },
//   {
//     name: "Dave",
//     age: 35,
//     friends: [
//       { name: "Bob", age: 30 },
//       { name: "Eve", age: 18 },
//     ],
//   })
// ];
// let result = [];
// let a = users.filter((values)=>{
//   let count=0;
//   values.friends.forEach((item)=>{
//     if(values.age<item.age)
//     {
//       count++;
//     }
//   })
//   if(count > 0)
//   {
//     // result.push(values);
//     return values;
//   }
// })
// a.sort((a,b)=>{
//   return a.age-b.age;
// })
// console.log(a);


// task
// Remove all employees who have a salary less than or equal to 50000.
// Convert the remaining employees' names to all uppercase.
// Remove duplicate skills across all employees.
// Sort the employees by department, then by salary (in descending order), then by name (in ascending order).
// Calculate the total salary for each department and return an object where the keys are the department names and 
// the values are the total salaries for that department.

// const employeess = [
//   {
//     id: 1,
//     name: "Alice",
//     department: "HR",
//     salary: 60000,
//     skills: ["communication", "leadership"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     department: "IT",
//     salary: 70000,
//     skills: ["programming", "testing"],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     department: "HR",
//     salary: 55000,
//     skills: ["communication", "writing"],
//   },
//   {
//     id: 4,
//     name: "David",
//     department: "IT",
//     salary: 65000,
//     skills: ["programming", "debugging"],
//   },
//   {
//     id: 5,
//     name: "Eva",
//     department: "Marketing",
//     salary: 75000,
//     skills: ["marketing", "communication"],
//   },
//   {
//     id: 6,
//     name: "Frank",
//     department: "Marketing",
//     salary: 40000,
//     skills: ["sales", "leadership"],
//   },
// ];
// let a = employeess.filter((values)=>{
//   let {skills,department}=values
//   if(values.salary > 50000)
//   {
//     values.name=values.name.toUpperCase();
//     values.skills=[...new Set(values.skills)]
//     return values;
//   }
// })
// console.log(a);
// a.sort((a,b)=>a.department.localeCompare(b.department)||b.salary-a.salary||a.name.localeCompare(b.name));
// let b=a.reduce((prev,curr)=>{
//   let cost=0;
//   if(!prev[curr.department])
//   {
//     prev[curr.department]=0;
//   }
//   a.forEach((values)=>{
//     if(values.department === curr.department)
//     {
//       cost += values.salary;
//     }
//   })
//   prev[curr.department]=cost;
//   return prev;
// },[])
// console.log(b);

// task
// The name of the student with the highest overall score.
// The name of the student with the highest average score.
// An array of objects representing the students who scored below 80 on any test, sorted by name in ascending order.
// const students = [
//   { name: "Alice", scores: [85, 90, 92] },
//   { name: "Bob", scores: [78, 82, 80] },
//   { name: "Charlie", scores: [90, 85, 94] },
//   { name: "David", scores: [67, 73, 75] },
//   { name: "Eve", scores: [95, 92, 98] }, 
//   { name: "Frank", scores: [80, 88, 83] },
//   { name: "Grace", scores: [92, 91, 89] },
//   { name: "Hannah", scores: [84, 87, 88] },
//   { name: "Isaac", scores: [95, 96, 94] }, 
//   { name: "John", scores: [75, 80, 77] },
// ];
// let score = 0;
// let highName;
// let a = students.filter((values)=>{
//   let total=0
//   values.scores.forEach((values1)=>{
//     total += values1;
//   })
//   if(total>score)
//   {
//     score = total;
//     highName = values.name;
//   }
// })
// console.log(score,highName);
// let lowScore = score;
// let lowName;
// let b = students.filter((values)=>{
//   let total = 0;
//   values.scores.forEach((values2)=>{
//     total += values2
//   })
//   if(total<lowScore)
//   {
//     lowScore=total;
//     lowName = values.name;
//   }
// })
// console.log(lowScore,lowName);
// let below = [];
// let c = students.filter((values3)=>{
//   values3.scores.forEach((values4)=>{
//     if(values4<=80)
//     {
//       below.push(values3.name);
//     }
//   })
// })
// below = [...new Set(below)].sort((a,b)=>a>b);
// console.log(below);


// task
// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publicationDate: 1960 },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publicationDate: 2005 },
//   { title: '1984', author: 'George Orwell', genre: 'Fiction', publicationDate: 1949 },
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', publicationDate: 1951 },
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', genre: 'Fiction', publicationDate: 2010 },
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', publicationDate: 1937 },
//   { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction', publicationDate: 1813 },
// ];
// You want to filter out any books that were published before the year 2000, 
// and then sort the remaining books by publication date in descending order.
// let a = books.filter((values)=>{
//   if(values.publicationDate<2000)
//   {
//     return values;
//   }
// })
// console.log(a);
// a = a.sort((a,b)=>b.publicationDate-a.publicationDate);
// console.log(a);