"use strict";

// task
// const districts = [
//   {
//     id: 5,
//     name: "surat"
//   },
//   {
//     id: 16,
//     name: "bharuch"
//   },
//   {
//     id: 1,
//     name: "ahmedabad"
//   }
// ];

// const arr = [
//   {
//     name: "abc",
//     age: 26,
//     address: {
//       code: 16
//     }
//   },
//   {
//     name: "xyz",
//     age: 18,
//     address: {
//       code: 5
//     }
//   },
//   {
//     name: "mno",
//     age: 30,
//     address: {
//       code: 1
//     }
//   },
//   {
//     name: "pqr",
//     age: 55,
//     address: {}
//   }
// ];
// Output
/*
[
    {
        "name": "mno",
        "age": 30,
        "address": {
            "code": 1,
            "district": "ahmedabad"
        }
    },
    {
        "name": "abc",
        "age": 26,
        "address": {
            "code": 16,
            "district": "bharuch"
        }
    }
]
*/
// let result=arr.filter((item)=>item.age>20 && item.address?.code).sort((a,b)=>a.address.code-b.address.code).map((item)=>{
//   return{
//       ...item,
//       address:{
//           ...item.address,
//           district : districts.find(district=>district.id===item.address.code).name
//       }
//   }
// });
// console.log(result);

// task
// let grades = [
//   { name: 'John', subject: 'Math', grade: 85 },
//   { name: 'John', subject: 'English', grade: 75 },
//   { name: 'Mary', subject: 'Math', grade: 90 },
//   { name: 'Mary', subject: 'English', grade: 80 },
//   { name: 'Bob', subject: 'Math', grade: 95 },
//   { name: 'Bob', subject: 'English', grade: 85 }
// ];
// output
// {
//   John: { Math: 85, English: 75 },
//   Mary: { Math: 90, English: 80 },
//   Bob: { Math: 95, English: 85 }
// }
// let b = grades.reduce((prev,curr)=>{
//   if(!prev[curr.name])
//   {
//     prev[curr.name]={
//     Math:grades.find(values=>values.name===curr.name && values.subject==="Math").grade,
//     English:grades.find(values=>values.name===curr.name && values.subject==="English").grade};
//   }
// return prev;
// },{})
// console.log(b);

// task
// const students = [
//     {name: 'Alice', age: 20, grade: 85},
//     {name: 'Bob', age: 17, grade: 65},
//     {name: 'Charlie', age: 19, grade: 90},
//     {name: 'Dave', age: 18, grade: 75},
//     {name: 'Eve', age: 21, grade: 80}
//   ];
// approch:
// Their age is greater than or equal to 18.
// Their grade is greater than or equal to 70.
// Output: [{name: 'Alice', grade: 85}, {name: 'Eve', grade: 80}, {name: 'Dave', grade: 75}]
// console.log(students.filter(values=>values.age>=18 && values.grade>=70).map(values1=>{return {name:values1.name, Grade:values1.grade}}));

// const books = [
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { title: '1984', author: 'George Orwell', year: 1949 },
//     { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//     { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }
//   ];
//   const year = 1950;
//   approch
// first check publish year is more then or equal 1950;
// output
// [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
// ]
// console.log(books.filter(values=>values.year>=1950).map(values1=> {return {...values1}}))

// task
// const customers = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
//   const orders = [
//     { customerId: 1, productId: 'A', price: 10 },
//     { customerId: 1, productId: 'B', price: 20 },
//     { customerId: 2, productId: 'A', price: 30 },
//     { customerId: 2, productId: 'B', price: 40 },
//     { customerId: 2, productId: 'C', price: 50 },
//     { customerId: 3, productId: 'A', price: 60 },
//     { customerId: 3, productId: 'C', price: 70 }
//   ];
// output
// [
//     { customerId: 2, name: 'Bob', revenue: 120 },
//     { customerId: 3, name: 'Charlie', revenue: 130 },
//     { customerId: 1, name: 'Alice', revenue: 30 }
//   ]
// let a = customers.map((values)=>{
//     let total=0;
//     let {id}=values;
//     orders.find((values1)=>{
//         if(values1.customerId===id)
//         {
//             total += values1.price;
//         }
//     })
//     return {customerId:id,name: values.name, Revenue: total};
// })
// console.log(a.sort((a,b)=>b.Revenue-a.Revenue));

// task
// const books = [
//     { author: 'George Orwell', title: '1984', rating: 4 },
//     { author: 'George Orwell', title: 'Animal Farm', rating: 5 },
//     { author: 'J.K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', rating: 5 },
//     { author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', rating: 4 },
//     { author: 'J.K. Rowling', title: 'Harry Potter and the Prisoner of Azkaban', rating: 4 },
//     { author: 'J.R.R. Tolkien', title: 'The Lord of the Rings', rating: 5 },
//     { author: 'J.R.R. Tolkien', title: 'The Hobbit', rating: 4 }
//   ];
// output
// [
//   { author: 'George Orwell', averageRating: 4.5 },
//   { author: 'J.K. Rowling', averageRating: 4.33 },
//   { author: 'J.R.R. Tolkien', averageRating: 4.5 }
// ]
// let a = books.reduce((prev,curr)=>{
//    prev.push({authour:curr.author,averageRating: books.find(values=>values.author === curr.author)})
//    return prev;
// },[])
// console.log(a);

// let string="ShalinKikaganeshwala";
// let output=string.split("")
// let mapping=output.map((values)=>{
//     if(values===values.toUpperCase()){
//         return values.toLowerCase();
//     }else{
//         return values.toUpperCase();
//     }
// }).join("");
// console.log(mapping);

// let str="JavaScript"
// console.log(str.split("").filter((values)=>values===values.toLowerCase()).length);

// const purchases = [
//     { id: 1, customer: 'Alice', amount: 50 },
//     { id: 2, customer: 'Bob', amount: 75 },
//     { id: 3, customer: 'Charlie', amount: 100 },
//     { id: 4, customer: 'David', amount: 25 },
//     { id: 5, customer: 'Alice', amount: 125 },
//     { id: 6, customer: 'Eva', amount: 90 },
//     { id: 7, customer: 'Bob', amount: 35 },
//     { id: 8, customer: 'Frank', amount: 60 },
//     { id: 9, customer: 'Alice', amount: 75 },
//     { id: 10, customer: 'Charlie', amount: 200 },
//     { id: 11, customer: 'David', amount: 10 },
//     { id: 12, customer: 'Eva', amount: 50 },
//     { id: 13, customer: 'Bob', amount: 20 },
//     { id: 14, customer: 'Frank', amount: 80 }
// ];
// let a = purchases.reduce((prev,curr)=>{
//     let count=0;
//     let totalAmount=0;
//     let {customer,amount}=curr;
//     if(!prev[customer])
//     {
//         prev[customer]={total:0,average:0}
//     }
//     purchases.find((values)=>{
//         if(values.customer === customer)
//         {
//             totalAmount += values.amount;
//             count++;
//         }
//     })
//     prev[customer]={total:totalAmount,average:(totalAmount/count).toFixed(2)}
//     return prev;
// },{})
// console.log(a);

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
// let result=[];
// obj=obj.sort((a,b)=>{
//     if(a.marks===b.marks)
//     {
//         b.age-a.age
//     }
//     else
//     {
//         a.age-b.age;
//     }
// });
// let a = obj.reduce((prev,curr)=>{
//     if(!prev[curr.marks])
//     {
//         prev[curr.marks]=curr;
//     }
//     return prev;
// },[])
// console.log(Object.values(a))

// const people = [
//     {
//       name: "Jason",
//       employeeId: 22,
//       designation: "Manager",
//       adrress: {
//         city: "Surat",
//         state: "Gujarat"
//       }
//     },
//     {
//       name: "John",
//       employeeId: 40,
//       designation: "Sr. Developer",
//       adrress: {
//         city: "Ahmedabad",
//         state: "Gujarat"
//       }
//     },
//     {
//       name: "Steve",
//       employeeId: 36,
//       designation: "Jr. Developer",
//       adrress: {
//         city: "Mumbai",
//         state: "Maharastra"
//       }
//     },
//     {
//       name: "James",
//       employeeId: 89,
//       designation: "Jr. Developer",
//       adrress: {
//         city: "Pune",
//         state: "Maharastra"
//       }
//     },
//     {
//       name: "Sami",
//       employeeId: 15,
//       designation: "CTO",
//       adrress: {
//         city: "Ahmedabad",
//         state: "Gujarat"
//       }
//     },
//     {
//       name: "David",
//       employeeId: 25,
//       designation: "CEO",
//       adrress: {
//         city: "Pune",
//         state: "Maharastra"
//       }
//     }
//   ];

/* 
  - Group these data first by state and then by city. 
  - Output should only contains those employees 
    whose name contains more than 1 vowels.
  
  Final Output Format:
  {
    Gujarat: {
      Ahmedabad: [],
      Surat: []
    },
    Maharastra: {
      Mumbai: [],
      Pune: []
    }
  }
  
  */
//  let vowel=['a','e','i','o','u']
// let filterOut=people.filter((values)=>{
//     let count=0;
//     let {name}=values;
//     let spliting=name.split("");
//     spliting.filter((values1)=>{
//         if(vowel.includes(values1.toLowerCase()))
//         {
//             count++;
//         }
//     })
//     if(count>0)
//     {
//         return values;
//     }
// })
// let group = filterOut.reduce((prev,curr)=>{
//     let {name,adrress:{city,state}}=curr;
//     if(!prev[state])
//     {
//         prev[state]={};
//     }
//     if(!prev[state][city])
//     {
//         prev[state][city]=[name];
//     }
//     return prev;
// },{});
// console.log(group);

// const orders = [
//   {
//     orderID: 1,
//     customerName: "Alice",
//     items: [
//       { productID: 1, productName: "Widget", price: 9.99, quantity: 2 },
//       { productID: 2, productName: "Gizmo", price: 5.99, quantity: 3 },
//       { productID: 3, productName: "Doodad", price: 3.99, quantity: 4 },
//     ],
//   },
//   {
//     orderID: 2,
//     customerName: "Bob",
//     items: [
//       { productID: 2, productName: "Gizmo", price: 5.99, quantity: 1 },
//       { productID: 3, productName: "Doodad", price: 3.99, quantity: 2 },
//       { productID: 4, productName: "Thingamajig", price: 7.99, quantity: 3 },
//     ],
//   },
//   {
//     orderID: 3,
//     customerName: "Charlie",
//     items: [
//       { productID: 1, productName: "Widget", price: 9.99, quantity: 1 },
//       { productID: 3, productName: "Doodad", price: 3.99, quantity: 2 },
//       {
//         productID: 5,
//         productName: "Whatchamacallit",
//         price: 11.99,
//         quantity: 1,
//       },
//     ],
//   },
// ];

// array as a parameter and returns an object containing the following information:
// The total revenue for all orders.
// The top-selling product (i.e., the product that appears the most frequently in all orders).
// The customer who has spent the most money, along with the total amount they have spent.

// output
// {
//   totalRevenue: 121.81,
//   topSellingProduct: { productID: 123, productName: "Widget", price: 9.99 },
//   topSpendingCustomer: { name: "Alice", totalSpent: 567.89 }
// }

// let totalRevenue=0;
// let topSpendingCustomer={name:"",totalSpent:0};
// let topSellingProduct={productID:0,productName:"",price:0};
// let count1=0;
// let result=orders.map((values)=>{
//   let cost=0;
//   let count=0;
//   values.items.filter((values1)=>{
//     cost += values1.price * values1.quantity
//     values.items.find((values2)=>{
//       if(values2.productName === values1.productName)
//       {
//         count+=values2.quantity;
//       }
//     })
//     if(count>count1)
//     {
//       count1=count;
//       topSellingProduct.productID=values1.productID;
//       topSellingProduct.productName=values1.productName;
//       topSellingProduct.price=values1.price;
//     }
//   })
//   totalRevenue += cost;
//   if(cost>topSpendingCustomer.totalSpent)
//   {
//     topSpendingCustomer.totalSpent=cost;
//     topSpendingCustomer.name=values.customerName;
//   }
//   return totalRevenue;
// })
// console.log({totalRevenue,topSellingProduct,topSpendingCustomer})

// let arr = [
//   { id: 1, name: "John Doe", department: "Marketing", salary: 50000 },
//   { id: 2, name: "Jane Smith", department: "Finance", salary: 70000 },
//   { id: 3, name: "Bob Johnson", department: "Marketing", salary: 60000 },
//   { id: 4, name: "Mary Johnson", department: "HR", salary: 55000 },
//   { id: 5, name: "David Lee", department: "IT", salary: 80000 },
//   { id: 6, name: "Sarah Kim", department: "IT", salary: 65000 },
//   { id: 7, name: "Kevin Park", department: "Finance", salary: 75000 },
//   { id: 8, name: "Emily Chen", department: "Marketing", salary: 55000 },
// ];
//Output
// {
//   'Marketing': {
//     totalEmployees: 3,
//     averageSalary: 56666.67,
//     highestSalary: 60000,
//     lowestSalary: 50000,
//     employees: [
//       { id: 3, name: 'Bob Johnson', department: 'Marketing', salary: 60000 },
//       { id: 1, name: 'John Doe', department: 'Marketing', salary: 50000 },
//       { id: 8, name: 'Emily Chen', department: 'Marketing', salary: 55000 }
//     ]
//   },
//   'Finance': {
//     totalEmployees: 2,
//     averageSalary: 72500,
//     highestSalary: 75000,
//     lowestSalary: 70000,
//     employees: [
//       { id: 7, name: 'Kevin Park', department: 'Finance', salary: 75000 },
//       { id: 2, name: 'Jane Smith', department: 'Finance', salary: 70000 }
//     ]
//   },
//   'HR': {
//     totalEmployees: 1,
//     averageSalary: 55000,
//     highestSalary: 55000,
//     lowestSalary: 55000,
//     employees: [
//       { id: 4, name: 'Mary Johnson', department: 'HR', salary: 55000 }
//     ]
//   },
//   'IT': {
//     totalEmployees: 2,
//     averageSalary: 72500,
//     highestSalary: 80000,
//     lowestSalary: 65000,
//     employees: [
//       { id: 5, name: 'David Lee', department: 'IT', salary: 80000 },
//       { id: 6, name: 'Sarah Kim', department: 'IT', salary: 65000 }
//     ]
//   }
// }
// let dataManipulation = arr.reduce((prev,curr)=>{
//   let {department,salary}=curr;
//   let totalSalary=0;
//   let count=0;
//   if(!prev[department])
//   {
//     prev[department]={"totalEmployees":0,"averageSalary":0,"heighestSalary":0,"lowestSalary":Infinity,"employees":[]};
//   }
//   prev[department].totalEmployees++;
//   prev[department].heighestSalary = Math.max(prev[department].heighestSalary,salary)
//   prev[department].lowestSalary = Math.min(prev[department].lowestSalary,salary);
//   prev[department].employees.push(curr);
//   arr.filter((values)=>{
//     if(values.department === department)
//     {
//       count++;
//       totalSalary += values.salary
//     }
//   })
//   prev[department].averageSalary= totalSalary / count;
//   return prev;
// },{})
// console.log(dataManipulation);

// const bakery = [
//   {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//         { id: "1003", type: "Blueberry" },
//         { id: "1004", type: "Devil's Food" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5007", type: "Powdered Sugar" },
//       { id: "5006", type: "Chocolate with Sprinkles" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0002",
//     type: "donut",
//     name: "Raised",
//     ppu: 0.55,
//     batters: {
//       batter: [{ id: "1001", type: "Regular" }],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0003",
//     type: "donut",
//     name: "Old Fashioned",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
// ];
// let result=[];
// bakery.forEach(item=>{
//   result.push(...item.batters.batter.filter(i=>i.type==="Chocolate"))
//   result.push(...item.topping.filter(i=>i.type==="Chocolate"))
// })
// console.log(result);

// const departments = [
//   { id: 0, name: "Trainee" },
//   { id: 1, name: "Management" },
//   { id: 2, name: "Marketing" },
//   { id: 3, name: "Devloper" },
// ];

// const Employeedata = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//       "department-id": 1,
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//       "department-id": 2,
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: null,
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//       "department-id": 3,
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "julianne.oconner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//       "department-id": 0,
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//       "department-id": 3,
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "karley_dach@jasper.info",
//     address: null,
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//       "department-id": 2,
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "telly.hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "1-556654-326",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//       "department-id": 1,
//     },
//   },
// ];
//we want anly truthy data and group data based on department
// and then sort data by employeeName

// const students = [
//   { name: 'Alice', math: 80, science: 90, english: 75 },
//   { name: 'Bob', math: 90, science: 40, english: 85 },
//   { name: 'Charlie', math: 60, science: 80, english: 70 },
//   { name: 'David', math: 75, science: 85, english: 80 },
//   { name: 'Eve', math: 95, science: 75, english: 40 }
// ];

//frist check that student got less then 45 and remove that student
// then find average marks of it
// sort in descending using average
// let a=[];
// let filterData = students.filter((values)=>{
//   let {math,science,english}=values;
//   if(math>45 && science>45 && english>45)
//   {
//     return values;
//   }
// })
// console.log(filterData);
// let average=filterData.map((values)=>{
//   let {name,math,science,english}=values;
//   let averageMarks=(math+science+english)/3;
//   return {name,averageMarks};
// })
// console.log(average.sort((a,b)=>b.averageMarks-a.averageMarks))

// const studentGrades = [
//   { name: 'John', grade: 85 },
//   { name: 'Jane', grade: 90 },
//   { name: 'Bob', grade: 75 },
//   { name: 'Alice', grade: 95 },
//   { name: 'Alex', grade: 80 },
//   { name: 'Kate', grade: 85 },
//   { name: 'Joe', grade: 70 },
//   { name: 'Chris', grade: 88 },
//   { name: 'David', grade: 93 },
//   { name: 'Lisa', grade: 82 },
// ];
// let averageGrade = 0, count = 0, heighestGrade = 0, heighestGradeName , lowestGrade=Infinity, lowestGradeName;
// let average = studentGrades.find((values)=>{
//   averageGrade += values.grade
//   count++;
//   if(heighestGrade<values.grade)
//   {
//     heighestGrade = values.grade
//     heighestGradeName = values.name;
//   }
//   if(lowestGrade>values.grade)
//   {
//     lowestGrade = values.grade;
//     lowestGradeName = values.name;
//   }
// })
// console.log(averageGrade/count);
// console.log("Heigest Grade : ",heighestGrade, `(${heighestGradeName})`);
// console.log("Lowest Grade : ",lowestGrade,`(${lowestGradeName})`);

// let output={averageGrade:0, heighestGrade:0, heighestGradeName:"" , lowestGrade:Infinity , lowestGradeName:""};
// let average = studentGrades.find((values)=>{
//   output.averageGrade += values.grade
//   if(output.heighestGrade<values.grade)
//   {
//     output.heighestGrade = values.grade
//     output.heighestGradeName = values.name;
//   }
//   if(output.lowestGrade>values.grade)
//   {
//     output.lowestGrade = values.grade;
//     output.lowestGradeName = values.name;
//   }
// })
// output.averageGrade = output.averageGrade/studentGrades.length;
// console.log(output)

// let books = [
//   {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
//   {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
//   {title: "1984", author: "George Orwell", year: 1949},
//   {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
//   {title: "Brave New World", author: "Aldous Huxley", year: 1932},
//   {title: "Animal Farm", author: "George Orwell", year: 1945},
//   {title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954}
// ];

// //output:-

// {
//   numBooks: 7,
//   booksByAuthor: {
//     "F. Scott Fitzgerald": 1,
//     "Harper Lee": 1,
//     "George Orwell": 2,
//     "J.D. Salinger": 1,
//     "Aldous Huxley": 1,
//     "J.R.R. Tolkien": 1
//   },
//   avgPublicationYear: 1949.857142857143,
//   closestToAvg: "The Catcher in the Rye"
// }
// let avgPublicationYear=0,numBooks=0;
// let closestBookToAvg;
// let closestToAvg=Infinity;
// let min=Infinity;
// let result = books.reduce((prev,curr)=>{
//         let {title,author,year} =  curr;
//         let count=0;
//         numBooks = books.length
//         if(!(prev[author])){
//           prev[author] = {}
//         }
//         avgPublicationYear +=year/numBooks
//         books.find((item)=>{
//           if(item.author===author){
//             count++;

//           }
//         })
//         prev[author] = count
//         return prev;
// },{});
// books = books.sort((a,b)=>a.year-b.year)
// console.log(books)
// let a=Math.round(avgPublicationYear)
// books.find((values)=>{
//   if(a === values.year)
//   {
//    return closestBookToAvg = values.title;
//   }
//   else
//   {
//     if(avgPublicationYear>values.year)
//     {
//       closestToAvg = avgPublicationYear-values.year
//       console.log(closestToAvg,values.title)
//       if(min>closestBookToAvg)
//       {
//         min=closestToAvg;
//         closestBookToAvg = values.title
//       }
//     }
//     else
//     {
//       closestToAvg = values.year-avgPublicationYear
//       if(min>closestToAvg)
//       {
//         min=closestToAvg;
//         closestBookToAvg =values.title
//       }
//     }
//   }
// })
// console.log({result,numBooks,a,closestBookToAvg});

// const data = [
//   {
//     Id: 3297,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T11:38:30.717-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"80042591-0003-fc00-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":550,"ApprovalId":292,"Status":"Pending","StatusBy":"Kristen","StatusDate":"2023-03-14T11:37:35.0530000","Level":1,"Approver":"CCE Director","ApproverTitle":"CCE Director","Comments":null,"IsDeleted":false,"Approval":null},"Current":{"Id":550,"ApprovalId":292,"Status":"Approved","StatusBy":"Kristen","StatusDate":"2023-03-14T11:38:30.3422145-05:00","Level":1,"Approver":"CCE Director","ApproverTitle":"CCE Director","Comments":"Approving as the CCE Director","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3298,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T11:38:30.74-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"80042591-0003-fc00-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":551,"ApprovalId":292,"Status":"Added","StatusBy":null,"StatusDate":null,"Level":2,"Approver":"CCE Officer","ApproverTitle":"CCE Officer","Comments":null,"IsDeleted":false,"Approval":null},"Current":{"Id":551,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T11:38:30.3422145-05:00","Level":2,"Approver":"CCE Officer","ApproverTitle":"CCE Officer","Comments":null,"IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3300,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:33:10.8-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"80049429-0000-f700-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":551,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T11:38:30.3430000","Level":2,"Approver":"CCE Officer","ApproverTitle":"CCE Officer","Comments":null,"IsDeleted":false,"Approval":null},"Current":{"Id":551,"ApprovalId":292,"Status":"Approved","StatusBy":"Kristen","StatusDate":"2023-03-14T12:33:10.5951369-05:00","Level":2,"Approver":"CCE Officer","ApproverTitle":"CCE Officer","Comments":"Approving as the CCE Officer","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3301,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:33:10.84-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"80049429-0000-f700-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":552,"ApprovalId":292,"Status":"Added","StatusBy":null,"StatusDate":null,"Level":3,"Approver":"Kristen","ApproverTitle":"Director, Project Management PMO","Comments":"Allen Touchet, Allen.Touchet@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":552,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:33:10.5951369-05:00","Level":3,"Approver":"Kristen","ApproverTitle":"Director, Project Management PMO","Comments":"Allen Touchet, Allen.Touchet@cheniere.com","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3303,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:34:41.213-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"8004947e-0000-f700-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":552,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:33:10.5970000","Level":3,"Approver":"Kristen","ApproverTitle":"Director, Project Management PMO","Comments":"Allen Touchet, Allen.Touchet@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":552,"ApprovalId":292,"Status":"Approved","StatusBy":"Kristen","StatusDate":"2023-03-14T12:34:41.1366885-05:00","Level":3,"Approver":"Kristen","ApproverTitle":"Director, Project Management PMO","Comments":"Approving as the business director.","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3304,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:34:41.217-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"8004947e-0000-f700-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":553,"ApprovalId":292,"Status":"Added","StatusBy":null,"StatusDate":null,"Level":4,"Approver":"Kristen","ApproverTitle":"Vice President and Chief Information Officer","Comments":"Brandon Smith, Brandon.Smith@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":553,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:34:41.1366885-05:00","Level":4,"Approver":"Kristen","ApproverTitle":"Vice President and Chief Information Officer","Comments":"Brandon Smith, Brandon.Smith@cheniere.com","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3306,
//     Message: "Giver was Modified By Admin",
//     MessageTemplate: "{Entity:l} was {State:l} By Admin",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:35:19.03-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"Giver","State":"Modified","SourceContext":"GnEGivenController","ActionId":"4e48776a-299b-4ca6-87c6-ad833b8f6533","ActionName":"API.Controllers.GnEGivenController.GnEGiven (API)","RequestId":"800426aa-0000-f600-b63f-84710c7967bb","RequestPath":"/api/GnEGiven/GnEGiven","Record":{"Before":"{\\r\\n  \\"Id\\": 2263,\\r\\n  \\"projectId\\": \\"1889\\",\\r\\n  \\"EventId\\": null,\\r\\n  \\"CurrencyId\\": 11,\\r\\n  \\"LocalAmount\\": 750.01,\\r\\n  \\"ExchangeRate\\": 1.00,\\r\\n  \\"MarketValue\\": 750.01,\\r\\n  \\"GiverName\\": \\"Kristen\\",\\r\\n  \\"FirstName\\": \\"Kristen\\",\\r\\n  \\"LastName\\": \\"\\",\\r\\n  \\"Email\\": \\"Kristen.@cheniere.com\\",\\r\\n  \\"Title\\": \\"Supervisor, Enterprise Content Management\\",\\r\\n  \\"Organization\\": \\"Shared Services\\",\\r\\n  \\"SubOrganization\\": \\"IT\\",\\r\\n  \\"IsNotInAd\\": false,\\r\\n  \\"Status\\": \\"Pending\\",\\r\\n  \\"BusinessStatus\\": \\"Pending on Kristen\\",\\r\\n  \\"ComplianceStatus\\": \\"Approved\\",\\r\\n  \\"GivenDate\\": \\"2023-03-14T05:00:00\\",\\r\\n  \\"IsSupplyChainVpapproved\\": true,\\r\\n  \\"Comment\\": null,\\r\\n  \\"Description\\": \\"Gift Given: same day or after; at least one recipient is government official; gift $750.01 and above, no entertainment\\\\t\\\\t\\\\t\\\\t\\\\t\\\\n\\",\\r\\n  \\"ComplianceNote\\": null,\\r\\n  \\"IsArchive\\": false,\\r\\n  \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n  \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n  \\"Currency\\": null,\\r\\n  \\"GiverAttachments\\": [\\r\\n    {\\r\\n      \\"Id\\": 364,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"Title\\": \\"2000cargo.png\\",\\r\\n      \\"SharePoint\\": \\"https://cheniere.sharepoint.com/teams/GnErepo/Dev%20GnE/1889/2000cargo.png\\",\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n      \\"IsDeleted\\": false\\r\\n    }\\r\\n  ],\\r\\n  \\"GiverRecipients\\": [\\r\\n    {\\r\\n      \\"Id\\": 8623,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"CompanyId\\": 11,\\r\\n      \\"FirstName\\": \\"Jane\\",\\r\\n      \\"LastName\\": \\"Doe\\",\\r\\n      \\"Email\\": \\"Jane.doe@cheniere.com\\",\\r\\n      \\"Title\\": \\"\\",\\r\\n      \\"GovtAffiliation\\": \\"Yes\\",\\r\\n      \\"EventAttended\\": \\"N/A\\",\\r\\n      \\"GiftAmount\\": 750.01,\\r\\n      \\"EntertainmentAmount\\": 0.00,\\r\\n      \\"IsArchive\\": false,\\r\\n      \\"IsDeleted\\": false,\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T11:37:27.523\\",\\r\\n      \\"Company\\": null\\r\\n    }\\r\\n  ],\\r\\n  \\"GiverDetails\\": [\\r\\n    {\\r\\n      \\"Id\\": 1817,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"CategoryId\\": 11,\\r\\n      \\"Description\\": null,\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n      \\"CategoryType\\": null\\r\\n    }\\r\\n  ]\\r\\n}","Current":"{\\r\\n  \\"Id\\": 2263,\\r\\n  \\"projectId\\": \\"1889\\",\\r\\n  \\"EventId\\": null,\\r\\n  \\"CurrencyId\\": 11,\\r\\n  \\"LocalAmount\\": 750.01,\\r\\n  \\"ExchangeRate\\": 1.00,\\r\\n  \\"MarketValue\\": 750.01,\\r\\n  \\"GiverName\\": \\"Kristen\\",\\r\\n  \\"FirstName\\": \\"Kristen\\",\\r\\n  \\"LastName\\": \\"\\",\\r\\n  \\"Email\\": \\"Kristen.@cheniere.com\\",\\r\\n  \\"Title\\": \\"Supervisor, Enterprise Content Management\\",\\r\\n  \\"Organization\\": \\"Shared Services\\",\\r\\n  \\"SubOrganization\\": \\"IT\\",\\r\\n  \\"IsNotInAd\\": false,\\r\\n  \\"Status\\": \\"Draft\\",\\r\\n  \\"BusinessStatus\\": \\"Pending on Kristen\\",\\r\\n  \\"ComplianceStatus\\": \\"Approved\\",\\r\\n  \\"GivenDate\\": \\"2023-03-14T10:00:00Z\\",\\r\\n  \\"IsSupplyChainVpapproved\\": true,\\r\\n  \\"Comment\\": \\"\\",\\r\\n  \\"Description\\": \\"Gift Given: same day or after; at least one recipient is government official; gift $750.01 and above, no entertainment\\\\t\\\\t\\\\t\\\\t\\\\t\\\\n\\",\\r\\n  \\"ComplianceNote\\": \\"Supporting documents for the G&E\\",\\r\\n  \\"IsArchive\\": false,\\r\\n  \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n  \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n  \\"Currency\\": null,\\r\\n  \\"GiverAttachments\\": [\\r\\n    {\\r\\n      \\"Id\\": 364,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"Title\\": \\"2000cargo.png\\",\\r\\n      \\"SharePoint\\": \\"https://cheniere.sharepoint.com/teams/GnErepo/Dev%20GnE/1889/2000cargo.png\\",\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n      \\"IsDeleted\\": false\\r\\n    },\\r\\n    {\\r\\n      \\"Id\\": 0,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"Title\\": \\"Astros_thumbnail.png\\",\\r\\n      \\"SharePoint\\": \\"https://cheniere.sharepoint.com/teams/GnErepo/Dev%20GnE/1889/Astros_thumbnail.png\\",\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T12:35:16.5378059-05:00\\",\\r\\n      \\"IsDeleted\\": false\\r\\n    }\\r\\n  ],\\r\\n  \\"GiverRecipients\\": [],\\r\\n  \\"GiverDetails\\": [\\r\\n    {\\r\\n      \\"Id\\": 1817,\\r\\n      \\"GiverId\\": 2263,\\r\\n      \\"CategoryId\\": 11,\\r\\n      \\"Description\\": null,\\r\\n      \\"CreatedBy\\": \\"Kristen.@cheniere.com\\",\\r\\n      \\"CreatedOn\\": \\"2023-03-14T11:37:27.46\\",\\r\\n      \\"CategoryType\\": {\\r\\n        \\"Id\\": 11,\\r\\n        \\"Category\\": \\"Apparel (Shirts, Jackets, Hats, etc.)\\",\\r\\n        \\"Type\\": \\"Gift\\",\\r\\n        \\"Description\\": null,\\r\\n        \\"IsDeleted\\": false,\\r\\n        \\"GiverDetails\\": [],\\r\\n        \\"ReceiverDetails\\": []\\r\\n      }\\r\\n    }\\r\\n  ]\\r\\n}"},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"Giver"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3310,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:37:15.903-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"800426bf-0000-f600-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":553,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:34:41.1370000","Level":4,"Approver":"Kristen","ApproverTitle":"Vice President and Chief Information Officer","Comments":"Brandon Smith, Brandon.Smith@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":553,"ApprovalId":292,"Status":"Approved","StatusBy":"Kristen","StatusDate":"2023-03-14T12:37:15.8212409-05:00","Level":4,"Approver":"Kristen","ApproverTitle":"Vice President and Chief Information Officer","Comments":"Approving as the VP","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3311,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:37:15.917-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"800426bf-0000-f600-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":554,"ApprovalId":292,"Status":"Added","StatusBy":null,"StatusDate":null,"Level":5,"Approver":"Kristen","ApproverTitle":"Senior Vice President, Shared Services","Comments":"Michael Dove, Michael.Dove@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":554,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:37:15.8212409-05:00","Level":5,"Approver":"Kristen","ApproverTitle":"Senior Vice President, Shared Services","Comments":"Michael Dove, Michael.Dove@cheniere.com","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
//   {
//     Id: 3313,
//     Message: "ApprovalDetail was Modified",
//     MessageTemplate: "{Entity:l} was {State:l}",
//     Level: "Information",
//     TimeStamp: "2023-03-14T12:37:57.477-05:00",
//     Exception: null,
//     LogEvent:
//       '{"Properties":{"Entity":"ApprovalDetail","State":"Modified","SourceContext":"WorkflowController","ActionId":"632a1788-2592-4bd3-8b82-cbe15c5a1dae","ActionName":"API.Controllers.WorkflowController.Workflow (API)","RequestId":"80051a96-0001-f900-b63f-84710c7967bb","RequestPath":"/api/Workflow/Workflow","Record":{"Before":{"Id":554,"ApprovalId":292,"Status":"Pending","StatusBy":null,"StatusDate":"2023-03-14T12:37:15.8200000","Level":5,"Approver":"Kristen","ApproverTitle":"Senior Vice President, Shared Services","Comments":"Michael Dove, Michael.Dove@cheniere.com","IsDeleted":false,"Approval":null},"Current":{"Id":554,"ApprovalId":292,"Status":"Approved","StatusBy":"Kristen","StatusDate":"2023-03-14T12:37:57.4549587-05:00","Level":5,"Approver":"Kristen","ApproverTitle":"Senior Vice President, Shared Services","Comments":"Approving as the EVP/SVP","IsDeleted":false,"Approval":null}},"LoggingType":"AuditGE","projectId":"1889","UserName":"Kristen"},"Renderings":{"Entity":[{"Format":"l","Rendering":"ApprovalDetail"}],"State":[{"Format":"l","Rendering":"Modified"}]}}',
//     UserName: "Kristen",
//     projectId: "1889",
//   },
// ];

//display those data whose satus is approved ,
//which you will find in LogEvent[properties][Record][Current] and show data in given format

// o/p
// [{
//   Id: 550,
// ApprovalId: 292,
// Status: "Approved",
// StatusBy: "Kristen",
// StatusDate: "2023-03-14T11:38:30.3422145-05:00",
// Level: 1,
// Approver: "CCE Director",
// ApproverTitle: "CCE Director",
// Comments: "Approving as the CCE Director",
// IsDeleted: false,
// Approval: null,
// Message: "ApprovalDetail was Modified",
// UserName: "Kristen",
// projectId: "1889"
// },
// ....]
// let temp=[];
// let a=[];
// let filterOut=data.filter((values)=>{
//   let convertToObject=JSON.parse(values.LogEvent)
// })
// if(convertToObject.Properties.Record.Current.Status === "Approved")
// {
//   temp.push({Id:values.Id,ApprovalId:convertToObject.LogEvent,Status:convertToObject.Properties.Record.Current.Status,StatusBy: convertToObject.Properties.UserName});
// }
//   console.log(convertToObject);
//   convertToObject.map((values)=>{

// })
// console.log(filterOut)
// console.log(temp)
// let mapping = temp.map((values)=>{
//   a.push({Id:values.Id,ApprovalId:values?.Properties.Record.Current.ApprovalId})
// })
// console.log(mapping)

// const data1 = [
//   {
//     id: 1094,
//     documentGroupId: "19f0eff5-f0b0-4493-9b05-dfb2c0d08516",
//     documentType: {
//       id: 10,
//       name: "List of Company Directors",
//     },
//     document: {
//       id: 1055,
//       displayName: "Document.com(2)",
//       systemName: "19f0eff5-f0b0-4493-9b05-dfb2c0d08516.com(2)",
//       location:
//         "D:\\Dipesh\\KYC-Document\\KYC-00000001\\19f0eff5-f0b0-4493-9b05-dfb2c0d08516.com(2)",
//       createdBy: "shalinkikaganeshwala15@gmail.com",
//       createdOn: "2023-05-01T14:07:26.9",
//     },
//     createdBy: "shalinkikaganeshwala15@gmail.com",
//     createdOn: "2023-05-01T14:07:26.9",
//   },
//   {
//     id: 1102,
//     documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
//     documentType: {
//       id: 8,
//       name: "Copy of Passport",
//     },
//     document: {
//       id: 1061,
//       displayName: "refere.com (1)",
//       systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       location:
//         "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       createdBy: "shalinkikaganeshwala15@gmail.com",
//       createdOn: "2023-05-02T16:02:50.913",
//     },
//     createdBy: "shalinkikaganeshwala15@gmail.com",
//     createdOn: "2023-05-02T16:02:50.917",
//   },
//   {
//     id: 1103,
//     documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
//     documentType: {
//       id: 9,
//       name: "Legal Structure Diagram",
//     },
//     document: {
//       id: 1061,
//       displayName: "refere.com (1)",
//       systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       location:
//         "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       createdBy: "shalinkikaganeshwala15@gmail.com",
//       createdOn: "2023-05-02T16:02:50.913",
//     },
//     createdBy: "shalinkikaganeshwala15@gmail.com",
//     createdOn: "2023-05-02T16:02:50.917",
//   },
//   {
//     id: 1104,
//     documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
//     documentType: {
//       id: 10,
//       name: "List of Company Directors",
//     },
//     document: {
//       id: 1061,
//       displayName: "refere.com (1)",
//       systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       location:
//         "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
//       createdBy: "shalinkikaganeshwala15@gmail.com",
//       createdOn: "2023-05-02T16:02:50.913",
//     },
//     createdBy: "shalinkikaganeshwala15@gmail.com",
//     createdOn: "2023-05-02T16:02:50.917",
//   },
// ];

// const groupBy = data1.reduce((prev, curr) => {
//   if (!prev[curr.document.displayName]) {
//     prev[curr.document.displayName] = [];
//   }
//   prev[curr.document.displayName].push(curr.documentType.name);
//   return prev;
// }, []);
// console.log(groupBy);

const data = [
  {
    id: 1,
    referenceRequestId: null,
    kycId: "KYC-00000001",
    requesterName: "Mukund",
    counterpartyName: "Shiv Industries",
    approvalDate: null,
    createdBy: "Dipesh",
    createdOn: "2023-03-14T18:08:05.25",
    requestContact: {
      id: 1,
      firstName: "Manav",
      lastName: "Gohil",
      email: "manav43@gmail.com",
      streetAddress: "Opp. Rashtriya Shala, TrikonBaug",
      city: "Rajkot",
      state: "Gujarat",
      country: "India",
      postalCode: "360020",
      contact: 9087654678,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [
      {
        id: 1094,
        documentGroupId: "19f0eff5-f0b0-4493-9b05-dfb2c0d08516",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 1055,
          displayName: "Document.com(2)",
          systemName: "19f0eff5-f0b0-4493-9b05-dfb2c0d08516.com(2)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\19f0eff5-f0b0-4493-9b05-dfb2c0d08516.com(2)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T14:07:26.9",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T14:07:26.9",
      },
      {
        id: 1102,
        documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1061,
          displayName: "refere.com (1)",
          systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T16:02:50.913",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T16:02:50.917",
      },
      {
        id: 1103,
        documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 1061,
          displayName: "refere.com (1)",
          systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T16:02:50.913",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T16:02:50.917",
      },
      {
        id: 1104,
        documentGroupId: "5a644490-d6c1-4aee-8e95-15abc0aeeded",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 1061,
          displayName: "refere.com (1)",
          systemName: "5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\5a644490-d6c1-4aee-8e95-15abc0aeeded.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T16:02:50.913",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T16:02:50.917",
      },
      {
        id: 1127,
        documentGroupId: "11a13503-4bf4-40cc-a07f-45fc69d16531",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1083,
          displayName: "refere.com",
          systemName: "11a13503-4bf4-40cc-a07f-45fc69d16531.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\11a13503-4bf4-40cc-a07f-45fc69d16531.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T16:53:29.477",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T16:53:29.477",
      },
      {
        id: 1128,
        documentGroupId: "11a13503-4bf4-40cc-a07f-45fc69d16531",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 1083,
          displayName: "refere.com",
          systemName: "11a13503-4bf4-40cc-a07f-45fc69d16531.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000001\\11a13503-4bf4-40cc-a07f-45fc69d16531.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T16:53:29.477",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T16:53:29.477",
      },
    ],
    requestReviews: [
      {
        id: 1062,
        department: "Treasury",
        status: "Department Approval",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T12:34:27.547",
        comments: null,
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:07:06.207",
      },
      {
        id: 1063,
        department: "Tax",
        status: "Department Approval",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T12:34:27.547",
        comments: null,
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:07:06.207",
      },
      {
        id: 1064,
        department: "Compliance",
        status: "Department Approval",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T12:34:27.547",
        comments: null,
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:13:56.75",
      },
    ],
  },
  {
    id: 2,
    referenceRequestId: null,
    kycId: "KYC-00000002",
    requesterName: "Avadh Patel",
    counterpartyName: "AC Agro Technology",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-15T18:34:14.21",
    requestContact: {
      id: 2,
      firstName: "Parth",
      lastName: "Patel",
      email: "parth2@gmail.com",
      streetAddress: "Rajkot",
      city: "Rajkot",
      state: "Gujarat",
      country: "India",
      postalCode: "360020",
      contact: 9875643789,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1065,
        department: "Treasury",
        status: "Department Approval",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-04-11T18:16:07.687",
        comments: null,
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:16:07.687",
      },
      {
        id: 1066,
        department: "Tax",
        status: "Needs More Document",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-05T16:34:20.557",
        comments: "No documents are upload",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:16:07.687",
      },
    ],
  },
  {
    id: 4,
    referenceRequestId: null,
    kycId: "KYC-00000004",
    requesterName: "Abhay",
    counterpartyName: "Bhojawala",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-16T12:28:30.707",
    requestContact: {
      id: 4,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet23@gmail.com",
      streetAddress: "Katargam",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390002",
      contact: 9087645634,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 5,
    referenceRequestId: null,
    kycId: "KYC-00000005",
    requesterName: "Harsh Purohit",
    counterpartyName: "Harsh skill",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-16T14:33:13.467",
    requestContact: {
      id: 5,
      firstName: "Pranit",
      lastName: "Patil",
      email: "pranit22@gmail.com",
      streetAddress: "Udhna",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390005",
      contact: 9087654321,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 6,
    referenceRequestId: null,
    kycId: "KYC-00000006",
    requesterName: "Meet Patel",
    counterpartyName: "MP Industries",
    approvalDate: "2023-04-19T11:46:33.17",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-16T15:00:01.453",
    requestContact: {
      id: 6,
      firstName: "Meet",
      lastName: "Chudasama",
      email: "meet@gmail.com",
      streetAddress: "Adajan",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390002",
      contact: 9087656798,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1058,
        department: "Compliance",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-04-12T18:50:21.013",
        comments: "test test",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T17:09:48.973",
      },
      {
        id: 1059,
        department: "Treasury",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-04-12T18:52:14.897",
        comments: "TEST DATA",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T17:09:53.933",
      },
    ],
  },
  {
    id: 7,
    referenceRequestId: null,
    kycId: "KYC-00000007",
    requesterName: "Dipesh Kavaiya",
    counterpartyName: "DK Group of Company",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-16T16:38:25.797",
    requestContact: {
      id: 7,
      firstName: "Avadh",
      lastName: "Paghadar",
      email: "avadh23@gmail.com",
      streetAddress: "Junagadh",
      city: "Junagadh",
      state: "Gujarat",
      country: "India",
      postalCode: "380002",
      contact: 9087654321,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 20,
    referenceRequestId: null,
    kycId: "KYC-00000020",
    requesterName: "Meet",
    counterpartyName: "Patel",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-16T19:00:28.88",
    requestContact: {
      id: 20,
      firstName: "Abhay",
      lastName: "Bhojawala",
      email: "abhay23@gmail.com",
      streetAddress: "Bhestan",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390546",
      contact: 9870652134,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 21,
    referenceRequestId: null,
    kycId: "KYC-00000021",
    requesterName: "Parth Parmar",
    counterpartyName: "PP Industries",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T15:10:34.41",
    requestContact: {
      id: 21,
      firstName: "Ajay",
      lastName: "Shah",
      email: "ajay3@gmail.com",
      streetAddress: "Chandlodiya",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      postalCode: "382480",
      contact: 9081434567,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 22,
    referenceRequestId: null,
    kycId: "KYC-00000022",
    requesterName: "Kenil Bhikadiya",
    counterpartyName: "XOZO",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T15:19:13.153",
    requestContact: {
      id: 22,
      firstName: "Ashish",
      lastName: "Manani",
      email: "ashish21@gmail.com",
      streetAddress: "Lal Darwaja",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390002",
      contact: 8756798324,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 23,
    referenceRequestId: null,
    kycId: "KYC-00000023",
    requesterName: "Parth Panchal",
    counterpartyName: "Parth Industries",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T15:23:17.477",
    requestContact: {
      id: 23,
      firstName: "Ajay",
      lastName: "Shah",
      email: "ajay3@gmail.com",
      streetAddress: "Chandlodiya",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      postalCode: "382480",
      contact: 9081434567,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 24,
    referenceRequestId: null,
    kycId: "KYC-00000024",
    requesterName: "Shalin Patel",
    counterpartyName: "SP Industries",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T15:30:03.27",
    requestContact: {
      id: 24,
      firstName: "Yash",
      lastName: "Soni",
      email: "yash78@gmail.com",
      streetAddress: "Muli",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363330",
      contact: 9087654321,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [],
  },
  {
    id: 25,
    referenceRequestId: null,
    kycId: "KYC-00000025",
    requesterName: "Jainee Shah",
    counterpartyName: "JS Industries",
    approvalDate: "2023-04-21T12:48:35.39",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T15:40:27.293",
    requestContact: {
      id: 25,
      firstName: "Dip",
      lastName: "Mistry",
      email: "dip7@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 9081470774,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1078,
        documentGroupId: "7559afa3-f335-4d40-b7ce-94319bea2e5e",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1047,
          displayName: "Request25.jfif",
          systemName: "7559afa3-f335-4d40-b7ce-94319bea2e5e.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000025\\7559afa3-f335-4d40-b7ce-94319bea2e5e.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T12:16:08.587",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T12:16:08.59",
      },
      {
        id: 1079,
        documentGroupId: "7559afa3-f335-4d40-b7ce-94319bea2e5e",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1047,
          displayName: "Request25.jfif",
          systemName: "7559afa3-f335-4d40-b7ce-94319bea2e5e.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000025\\7559afa3-f335-4d40-b7ce-94319bea2e5e.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T12:16:08.587",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T12:16:08.59",
      },
    ],
    requestReviews: [
      {
        id: 1,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:18:05.397",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T15:40:43.747",
      },
      {
        id: 2,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:18:54.243",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T15:41:00.123",
      },
      {
        id: 3,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:19:02.91",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T15:41:02.71",
      },
    ],
  },
  {
    id: 26,
    referenceRequestId: null,
    kycId: "KYC-00000026",
    requesterName: "Jenish Modi",
    counterpartyName: "JM Industries",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-17T16:22:09.977",
    requestContact: {
      id: 26,
      firstName: "Meet",
      lastName: "Sheta",
      email: "meet54@gmail.com",
      streetAddress: "Madhav Kunj, Katargam",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "378900",
      contact: 4563217099,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 4,
        department: "Treasury",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:21:02.66",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T16:22:23.91",
      },
      {
        id: 5,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:25:08.44",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T16:22:42.473",
      },
      {
        id: 6,
        department: "Legal",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:25:15.043",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-17T16:22:45.283",
      },
    ],
  },
  {
    id: 27,
    referenceRequestId: null,
    kycId: "KYC-00000027",
    requesterName: "Ravi Shah",
    counterpartyName: "Bigscal",
    approvalDate: "2023-04-19T11:45:45.92",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-20T18:45:48.713",
    requestContact: {
      id: 27,
      firstName: "Parth",
      lastName: "Mithaiwala",
      email: "parth78@gmail.com",
      streetAddress: "Adajan",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398002",
      contact: 7819087543,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1027,
        documentGroupId: "3fb4fe26-ad94-4e1d-8ca6-8703b5b41666",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 23,
          displayName: "Test Picture.jpg",
          systemName: "3fb4fe26-ad94-4e1d-8ca6-8703b5b41666.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\3fb4fe26-ad94-4e1d-8ca6-8703b5b41666.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T18:14:04.797",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-06T11:14:15.583",
      },
      {
        id: 1028,
        documentGroupId: "3fb4fe26-ad94-4e1d-8ca6-8703b5b41666",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 23,
          displayName: "Test Picture.jpg",
          systemName: "3fb4fe26-ad94-4e1d-8ca6-8703b5b41666.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\3fb4fe26-ad94-4e1d-8ca6-8703b5b41666.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T18:14:04.797",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-06T11:14:20.637",
      },
      {
        id: 1029,
        documentGroupId: "4b5663f7-81a6-40e4-a9bf-7e075fffbe77",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 21,
          displayName: "Image.jfif",
          systemName: "4b5663f7-81a6-40e4-a9bf-7e075fffbe77.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\4b5663f7-81a6-40e4-a9bf-7e075fffbe77.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T16:43:57.09",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-06T11:17:29.947",
      },
      {
        id: 1030,
        documentGroupId: "4b5663f7-81a6-40e4-a9bf-7e075fffbe77",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 21,
          displayName: "Image.jfif",
          systemName: "4b5663f7-81a6-40e4-a9bf-7e075fffbe77.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\4b5663f7-81a6-40e4-a9bf-7e075fffbe77.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T16:43:57.09",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-06T11:17:29.947",
      },
      {
        id: 1031,
        documentGroupId: "39222349-3de2-411d-bbc1-cd86e1c3dac7",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1016,
          displayName: "Test.png",
          systemName: "39222349-3de2-411d-bbc1-cd86e1c3dac7.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\39222349-3de2-411d-bbc1-cd86e1c3dac7.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-10T17:08:27.56",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-10T17:08:27.563",
      },
      {
        id: 1032,
        documentGroupId: "91532917-3803-408d-9606-1a09287c8306",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1017,
          displayName: "Test Document.jfif",
          systemName: "91532917-3803-408d-9606-1a09287c8306.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\91532917-3803-408d-9606-1a09287c8306.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-10T17:10:54.523",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-10T17:10:54.523",
      },
      {
        id: 1033,
        documentGroupId: "7dd81aa5-1207-4348-a7e8-b4c0a181cfbf",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1018,
          displayName: "Test Test.jpg",
          systemName: "7dd81aa5-1207-4348-a7e8-b4c0a181cfbf.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027\\7dd81aa5-1207-4348-a7e8-b4c0a181cfbf.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-10T17:13:22.6",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-10T17:13:22.6",
      },
    ],
    requestReviews: [
      {
        id: 7,
        department: "Compliance",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-04-12T18:59:01.783",
        comments: "test datas",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-20T18:46:37.873",
      },
      {
        id: 8,
        department: "Treasury",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-04-12T19:14:23.697",
        comments: "Testing Purpose",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-20T18:46:37.873",
      },
      {
        id: 9,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-18T18:08:03.36",
        comments: "Testing Purpose",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-20T18:46:37.873",
      },
    ],
  },
  {
    id: 28,
    referenceRequestId: null,
    kycId: "KYC-00000028",
    requesterName: "Hiren Pokar",
    counterpartyName: "HP Industries",
    approvalDate: "2023-04-19T11:47:49.367",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-21T00:00:09.763",
    requestContact: {
      id: 28,
      firstName: "Deep",
      lastName: "Vador",
      email: "deep34@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9874569733,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1,
        documentGroupId: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1,
          displayName: "Document.png",
          systemName: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028\\4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T00:04:44.147",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T00:04:56.9",
      },
      {
        id: 2,
        documentGroupId: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1,
          displayName: "Document.png",
          systemName: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028\\4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T00:04:44.147",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T00:04:58.983",
      },
      {
        id: 3,
        documentGroupId: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 1,
          displayName: "Document.png",
          systemName: "4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028\\4f6b230f-08a3-4f8c-a5e6-5b5faa847d37.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T00:04:44.147",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T00:05:01.36",
      },
    ],
    requestReviews: [
      {
        id: 20,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-14T15:08:10.6",
        comments: "We review this request and that's secure to work with us...",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-23T11:53:13.58",
      },
      {
        id: 21,
        department: "Legal",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-14T15:10:54.69",
        comments: "Testing purpose for email sending",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-23T11:53:16.907",
      },
    ],
  },
  {
    id: 29,
    referenceRequestId: null,
    kycId: "KYC-00000029",
    requesterName: "Deep Vador",
    counterpartyName: "DV Group",
    approvalDate: "2023-03-28T11:02:05.647",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-21T10:41:29.327",
    requestContact: {
      id: 29,
      firstName: "Hiren",
      lastName: "Pokar",
      email: "hiren32@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9087634523,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 4,
        documentGroupId: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 2,
          displayName: "KYC Database.png",
          systemName: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T10:43:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T10:43:33.573",
      },
      {
        id: 5,
        documentGroupId: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 2,
          displayName: "KYC Database.png",
          systemName: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T10:43:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T10:43:34.65",
      },
      {
        id: 6,
        documentGroupId: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 2,
          displayName: "KYC Database.png",
          systemName: "c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\c96ec1a9-c40b-4342-a9f1-d33269ced4f8.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T10:43:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T10:43:35.603",
      },
      {
        id: 16,
        documentGroupId: "39ff22aa-ea46-446b-a4db-fa1529d1aa54",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 7,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-30T14:11:40.913",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-30T14:11:41.217",
      },
      {
        id: 17,
        documentGroupId: "39ff22aa-ea46-446b-a4db-fa1529d1aa54",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 7,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-30T14:11:40.913",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-30T14:11:41.217",
      },
      {
        id: 18,
        documentGroupId: "39ff22aa-ea46-446b-a4db-fa1529d1aa54",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 7,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029\\39ff22aa-ea46-446b-a4db-fa1529d1aa54.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-30T14:11:40.913",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-30T14:11:41.217",
      },
    ],
    requestReviews: [
      {
        id: 13,
        department: "Treasury",
        status: "Approved",
        statusBy: "parth02@gmail.com",
        statusOn: "2023-03-24T15:20:52.727",
        comments: "that secure to work with us.",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T10:41:36.037",
      },
      {
        id: 14,
        department: "Tax",
        status: "Approved",
        statusBy: "khanjan24@gmail.com",
        statusOn: "2023-03-24T16:10:57.627",
        comments: "that secure to work with us.",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T10:41:36.037",
      },
    ],
  },
  {
    id: 30,
    referenceRequestId: null,
    kycId: "KYC-00000030",
    requesterName: "Yash Parmar",
    counterpartyName: "Inox ",
    approvalDate: "2023-03-28T11:49:13.35",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-21T16:09:50.453",
    requestContact: {
      id: 30,
      firstName: "Hiren",
      lastName: "Pokar",
      email: "hiren32@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9084356789,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 7,
        documentGroupId: "5fe7430f-abff-4bb4-94f0-da1ae4631112",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 3,
          displayName: "KYC Database.png",
          systemName: "5fe7430f-abff-4bb4-94f0-da1ae4631112.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030\\5fe7430f-abff-4bb4-94f0-da1ae4631112.png",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-21T16:09:57.82",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T16:09:57.88",
      },
    ],
    requestReviews: [
      {
        id: 15,
        department: "Treasury",
        status: "Approved",
        statusBy: "khanjan24@gmail.com",
        statusOn: "2023-03-24T16:34:49.793",
        comments: "that secure to work with us.",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-21T16:09:56.987",
      },
    ],
  },
  {
    id: 31,
    referenceRequestId: null,
    kycId: "KYC-00000031",
    requesterName: "Bhumi Boda",
    counterpartyName: "BB Industries",
    approvalDate: "2023-03-28T11:49:50.527",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-22T10:20:52.983",
    requestContact: {
      id: 31,
      firstName: "Ankita",
      lastName: "Khant",
      email: "ankita23@gmail.com",
      streetAddress: "Motera",
      city: "Ahmedabad",
      state: "Guajrat",
      country: "India",
      postalCode: "380482",
      contact: 9098764543,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 16,
        department: "Treasury",
        status: "Approved",
        statusBy: "parth02@gmail.com",
        statusOn: "2023-03-27T10:35:07.693",
        comments: "Done",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-22T10:20:57.377",
      },
      {
        id: 17,
        department: "Tax",
        status: "Approved",
        statusBy: "khanjan24@gmail.com",
        statusOn: "2023-03-27T10:39:25.033",
        comments: "Done",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-22T10:21:00.873",
      },
      {
        id: 18,
        department: "Legal",
        status: "Approved",
        statusBy: "renish01@gmail.com",
        statusOn: "2023-03-27T10:41:01.663",
        comments: "Done",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-22T10:21:03.423",
      },
    ],
  },
  {
    id: 32,
    referenceRequestId: null,
    kycId: "KYC-00000032",
    requesterName: "Harsh",
    counterpartyName: "Radhe Shyam ",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-27T16:41:26.55",
    requestContact: {
      id: 32,
      firstName: "Pranit",
      lastName: "Patil",
      email: "pranit23@gmail.com",
      streetAddress: "Uttran",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "396190",
      contact: 9052369852,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [
      {
        id: 12,
        documentGroupId: "93970df6-4885-422b-9dec-00ecf6c281d1",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 5,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "93970df6-4885-422b-9dec-00ecf6c281d1.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000032\\93970df6-4885-422b-9dec-00ecf6c281d1.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-27T16:45:14.753",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T16:46:14.44",
      },
    ],
    requestReviews: [
      {
        id: 22,
        department: "Compliance",
        status: "Rejected",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-03-28T10:54:53.25",
        comments: "Not secure to work with us",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T16:41:35.513",
      },
      {
        id: 23,
        department: "Treasury",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-03-28T10:55:33.923",
        comments: "secure to work with us",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T16:41:48.407",
      },
    ],
  },
  {
    id: 33,
    referenceRequestId: null,
    kycId: "KYC-00000033",
    requesterName: "Manish",
    counterpartyName: "amazon",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-27T18:00:00.047",
    requestContact: {
      id: 33,
      firstName: "Manish",
      lastName: "Singh",
      email: "manish23@gmail.com",
      streetAddress: "Athwa",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "396190",
      contact: 9082536987,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 7,
      name: "Cancelled",
    },
    requestDocuments: [
      {
        id: 13,
        documentGroupId: "954b9d2e-54c3-490d-a3c9-f6e78f4de603",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 6,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000033\\954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-27T18:00:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T18:00:02.32",
      },
      {
        id: 14,
        documentGroupId: "954b9d2e-54c3-490d-a3c9-f6e78f4de603",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 6,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000033\\954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-27T18:00:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T18:00:02.32",
      },
      {
        id: 15,
        documentGroupId: "954b9d2e-54c3-490d-a3c9-f6e78f4de603",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 6,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000033\\954b9d2e-54c3-490d-a3c9-f6e78f4de603.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-03-27T18:00:02.293",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T18:00:02.32",
      },
    ],
    requestReviews: [
      {
        id: 24,
        department: "Compliance",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-03-28T11:44:01.097",
        comments: "Secure to work with us",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T18:00:00.05",
      },
      {
        id: 25,
        department: "Tax",
        status: "Approved",
        statusBy: "dip16@gmail.com",
        statusOn: "2023-03-28T11:11:03.73",
        comments: "Secure to work with us",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-27T18:00:00.05",
      },
    ],
  },
  {
    id: 34,
    referenceRequestId: null,
    kycId: "KYC-00000034",
    requesterName: "Jenish Modi",
    counterpartyName: "JS",
    approvalDate: "2023-04-21T12:49:24.29",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-03-31T11:32:03.137",
    requestContact: {
      id: 34,
      firstName: "Parth",
      lastName: "Mithaiwala",
      email: "parth098@gmail.com",
      streetAddress: "Surat",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "392150",
      contact: 9025836598,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1080,
        documentGroupId: "62e424ee-a4fa-41e1-865d-725e0570793d",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1048,
          displayName: "For Testing.jfif",
          systemName: "62e424ee-a4fa-41e1-865d-725e0570793d.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000034\\62e424ee-a4fa-41e1-865d-725e0570793d.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T12:46:34.597",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T12:46:34.597",
      },
      {
        id: 1081,
        documentGroupId: "62e424ee-a4fa-41e1-865d-725e0570793d",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1048,
          displayName: "For Testing.jfif",
          systemName: "62e424ee-a4fa-41e1-865d-725e0570793d.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000034\\62e424ee-a4fa-41e1-865d-725e0570793d.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T12:46:34.597",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T12:46:34.597",
      },
    ],
    requestReviews: [
      {
        id: 26,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:47:16.417",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-31T11:32:06.443",
      },
      {
        id: 27,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:28:57.413",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-03-31T11:32:09.66",
      },
    ],
  },
  {
    id: 44,
    referenceRequestId: "29",
    kycId: "KYC-00000029",
    requesterName: "Deep Vador",
    counterpartyName: "DV Group",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-04T14:47:16.243",
    requestContact: {
      id: 44,
      firstName: "Hiren",
      lastName: "Pokar",
      email: "hiren32@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9087634523,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 21,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 14,
          displayName: "KYC Database.png",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          createdBy: "System",
          createdOn: "2023-04-04T14:47:25.947",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:47:27.887",
      },
      {
        id: 22,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 14,
          displayName: "KYC Database.png",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          createdBy: "System",
          createdOn: "2023-04-04T14:47:25.947",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:47:27.887",
      },
      {
        id: 23,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 14,
          displayName: "KYC Database.png",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.png",
          createdBy: "System",
          createdOn: "2023-04-04T14:47:25.947",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:47:27.887",
      },
      {
        id: 24,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 15,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          createdBy: "System",
          createdOn: "2023-04-04T14:48:38.97",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:48:42.797",
      },
      {
        id: 25,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 15,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          createdBy: "System",
          createdOn: "2023-04-04T14:48:38.97",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:48:42.797",
      },
      {
        id: 26,
        documentGroupId: "1c2c3472-1d08-4365-bc9a-52c83fcba18a",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 15,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000029_ReApproval_04-04-2023\\1c2c3472-1d08-4365-bc9a-52c83fcba18a.jpg",
          createdBy: "System",
          createdOn: "2023-04-04T14:48:38.97",
        },
        createdBy: "System",
        createdOn: "2023-04-04T14:48:42.797",
      },
    ],
    requestReviews: [
      {
        id: 46,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-04T14:47:16.243",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-04T14:47:16.243",
      },
      {
        id: 47,
        department: "Tax",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-04T14:47:16.243",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-04T14:47:16.243",
      },
    ],
  },
  {
    id: 47,
    referenceRequestId: "30",
    kycId: "KYC-00000030",
    requesterName: "Yash Parmar",
    counterpartyName: "Inox ",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-05T09:46:03.397",
    requestContact: {
      id: 47,
      firstName: "Hiren",
      lastName: "Pokar",
      email: "hiren32@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9084356789,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 27,
        documentGroupId: "65ae7b2f-4037-45e2-bde9-b5ee10705bb5",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 16,
          displayName: "KYC Database.png",
          systemName: "65ae7b2f-4037-45e2-bde9-b5ee10705bb5.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\65ae7b2f-4037-45e2-bde9-b5ee10705bb5.png",
          createdBy: "System",
          createdOn: "2023-04-05T09:46:03.813",
        },
        createdBy: "System",
        createdOn: "2023-04-05T09:46:03.817",
      },
      {
        id: 28,
        documentGroupId: "627c3cf7-6da2-437c-b3d3-20ee161d37b1",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 17,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:27:37.05",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:27:41.533",
      },
      {
        id: 29,
        documentGroupId: "627c3cf7-6da2-437c-b3d3-20ee161d37b1",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 17,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:27:37.05",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:27:43.847",
      },
      {
        id: 30,
        documentGroupId: "627c3cf7-6da2-437c-b3d3-20ee161d37b1",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 17,
          displayName: "istockphoto-1437794686-2048x2048.jpg",
          systemName: "627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\627c3cf7-6da2-437c-b3d3-20ee161d37b1.jpg",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:27:37.05",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:27:46.3",
      },
      {
        id: 32,
        documentGroupId: "5291bba5-4904-40c3-b4e3-9da73c81a143",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 19,
          displayName: "download.jfif",
          systemName: "5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:42:32.077",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:42:32.077",
      },
      {
        id: 33,
        documentGroupId: "5291bba5-4904-40c3-b4e3-9da73c81a143",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 19,
          displayName: "download.jfif",
          systemName: "5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:42:32.077",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:42:32.077",
      },
      {
        id: 34,
        documentGroupId: "5291bba5-4904-40c3-b4e3-9da73c81a143",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 19,
          displayName: "download.jfif",
          systemName: "5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\5291bba5-4904-40c3-b4e3-9da73c81a143.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:42:32.077",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:42:32.077",
      },
      {
        id: 35,
        documentGroupId: "00229f5d-158e-4c7c-a6c9-eb716dc35dd2",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 20,
          displayName: "List of Directors.jfif",
          systemName: "00229f5d-158e-4c7c-a6c9-eb716dc35dd2.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000030_ReApproval_05-04-2023\\00229f5d-158e-4c7c-a6c9-eb716dc35dd2.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-05T12:56:56.08",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-05T12:56:56.083",
      },
    ],
    requestReviews: [
      {
        id: 50,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-05T09:46:03.397",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-05T09:46:03.397",
      },
    ],
  },
  {
    id: 48,
    referenceRequestId: "31",
    kycId: "KYC-00000031",
    requesterName: "Bhumi Boda",
    counterpartyName: "BB Industries",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-05T11:29:46.95",
    requestContact: {
      id: 48,
      firstName: "Ankita",
      lastName: "Khant",
      email: "ankita23@gmail.com",
      streetAddress: "Motera",
      city: "Ahmedabad",
      state: "Guajrat",
      country: "India",
      postalCode: "380482",
      contact: 9098764543,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 51,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-05T11:29:49.25",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-05T11:29:49.93",
      },
      {
        id: 52,
        department: "Tax",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-05T11:29:52.247",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-05T11:29:52.93",
      },
      {
        id: 53,
        department: "Legal",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-05T11:29:55.077",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-05T11:29:55.87",
      },
    ],
  },
  {
    id: 49,
    referenceRequestId: null,
    kycId: "KYC-00000049",
    requesterName: "qwerty",
    counterpartyName: "qwerty123",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-06T10:07:12.947",
    requestContact: {
      id: 49,
      firstName: "abcd",
      lastName: "xyz",
      email: "abc@gmail.com",
      streetAddress: "pqr,street",
      city: "def",
      state: "ghh",
      country: "oiuy",
      postalCode: "456123",
      contact: 9876543210,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 55,
        department: "Compliance",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:30:36.287",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-06T10:07:12.947",
      },
    ],
  },
  {
    id: 1046,
    referenceRequestId: null,
    kycId: "KYC-00001046",
    requesterName: "Abhay",
    counterpartyName: "Meet",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-08T11:05:28.853",
    requestContact: {
      id: 1046,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet@gmail.com",
      streetAddress: "abcd",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395001",
      contact: 9874561230,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1048,
        department: "Treasury",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:32:07.897",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-08T11:05:47.143",
      },
    ],
  },
  {
    id: 1052,
    referenceRequestId: null,
    kycId: "KYC-00001052",
    requesterName: "Abhay",
    counterpartyName: "Meet",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-10T16:58:05.39",
    requestContact: {
      id: 1052,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet@gmail.com",
      streetAddress: "abcd",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395001",
      contact: 9874561230,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1049,
        department: "Compliance",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:33:25.557",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-10T16:58:05.39",
      },
      {
        id: 1050,
        department: "Treasury",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:33:34.013",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-10T16:58:05.39",
      },
    ],
  },
  {
    id: 1054,
    referenceRequestId: null,
    kycId: "KYC-00001054",
    requesterName: "Mukund",
    counterpartyName: "Meet",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-11T15:18:54.567",
    requestContact: {
      id: 1054,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet@gmail.com",
      streetAddress: "abcd",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9874561230,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1054,
        department: "Treasury",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:34:50.777",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T15:18:56.007",
      },
      {
        id: 1055,
        department: "Compliance",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:34:59.21",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T15:18:56.3",
      },
    ],
  },
  {
    id: 1056,
    referenceRequestId: null,
    kycId: "KYC-00001056",
    requesterName: "Dip",
    counterpartyName: "Dip Corporate",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-11T16:53:02.83",
    requestContact: {
      id: 1056,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet@gmail.com",
      streetAddress: "abcd",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395009",
      contact: 7845123690,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 6,
      name: "Final Varification",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1056,
        department: "Tax",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:36:00.247",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T16:53:02.83",
      },
      {
        id: 1057,
        department: "Legal",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:36:14.383",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T16:53:02.83",
      },
    ],
  },
  {
    id: 1057,
    referenceRequestId: null,
    kycId: "KYC-00001057",
    requesterName: "Avadh",
    counterpartyName: "Shiv",
    approvalDate: null,
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-11T18:01:30.57",
    requestContact: {
      id: 1057,
      firstName: "Meet",
      lastName: "Patel",
      email: "meet@gmail.com",
      streetAddress: "abcd",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395001",
      contact: 7894561227,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 4,
      name: "Rejected",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1060,
        department: "Tax",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:37:10.487",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:01:30.57",
      },
      {
        id: 1061,
        department: "Treasury",
        status: "Rejected",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:37:16.567",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-11T18:01:30.57",
      },
    ],
  },
  {
    id: 1058,
    referenceRequestId: null,
    kycId: "KYC-00001058",
    requesterName: "Nisarg",
    counterpartyName: "ABC Company",
    approvalDate: "2023-04-21T12:49:34.467",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-12T12:03:57.333",
    requestContact: {
      id: 1058,
      firstName: "XYZ",
      lastName: "PQR",
      email: "xyz@gmail.com",
      streetAddress: "Station",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390006",
      contact: 9028536925,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1034,
        documentGroupId: "44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1019,
          displayName: "Testing Document.jfif",
          systemName: "44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001058\\44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-12T12:04:38.3",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-12T12:04:43.2",
      },
      {
        id: 1035,
        documentGroupId: "44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1019,
          displayName: "Testing Document.jfif",
          systemName: "44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001058\\44ce2d3b-a6f1-4db7-9f3c-4bca4458fffa.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-12T12:04:38.3",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-12T12:04:46.437",
      },
    ],
    requestReviews: [
      {
        id: 1067,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:38:36.177",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-12T12:03:57.333",
      },
      {
        id: 1068,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:38:44.167",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-12T12:03:57.337",
      },
    ],
  },
  {
    id: 1059,
    referenceRequestId: null,
    kycId: "KYC-00001059",
    requesterName: "Juhil Moradiya",
    counterpartyName: "Mission11",
    approvalDate: "2023-04-21T12:49:39.17",
    createdBy: "dip16@gmail.com",
    createdOn: "2023-04-13T15:19:00.113",
    requestContact: {
      id: 1059,
      firstName: "Juhil",
      lastName: "Moradiya",
      email: "juhilmoradiya5250@gmail.com",
      streetAddress: "Shreejikrupa Society, Hirabaug",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395006",
      contact: 9173230023,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1036,
        documentGroupId: "18637e34-bee1-4cf8-820c-331514c15e76",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1020,
          displayName: "Testing Document.jfif",
          systemName: "18637e34-bee1-4cf8-820c-331514c15e76.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001059\\18637e34-bee1-4cf8-820c-331514c15e76.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-13T15:21:47.683",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-13T15:21:47.683",
      },
      {
        id: 1037,
        documentGroupId: "18637e34-bee1-4cf8-820c-331514c15e76",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1020,
          displayName: "Testing Document.jfif",
          systemName: "18637e34-bee1-4cf8-820c-331514c15e76.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001059\\18637e34-bee1-4cf8-820c-331514c15e76.jfif",
          createdBy: "dip16@gmail.com",
          createdOn: "2023-04-13T15:21:47.683",
        },
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-13T15:21:47.683",
      },
    ],
    requestReviews: [
      {
        id: 1069,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:39:56.977",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-13T15:19:07.927",
      },
      {
        id: 1070,
        department: "Legal",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:40:05.623",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dip16@gmail.com",
        createdOn: "2023-04-13T15:19:46.313",
      },
    ],
  },
  {
    id: 1093,
    referenceRequestId: null,
    kycId: "KYC-00001093",
    requesterName: "requester4",
    counterpartyName: "couterparty2",
    approvalDate: "2023-04-21T12:48:51.477",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-17T11:36:56.677",
    requestContact: {
      id: 1093,
      firstName: "rcfn",
      lastName: "rcfn",
      email: "rcfqwe@gmail.com",
      streetAddress: "rcfn",
      city: "rcfn",
      state: "rcfn",
      country: "sdgsdg",
      postalCode: "987456",
      contact: 9874561230,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1056,
        documentGroupId: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1034,
          displayName: "displayName1.txt",
          systemName: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001093\\17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T11:36:57.53",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T11:36:57.533",
      },
      {
        id: 1057,
        documentGroupId: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1034,
          displayName: "displayName1.txt",
          systemName: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001093\\17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T11:36:57.53",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T11:36:57.533",
      },
      {
        id: 1058,
        documentGroupId: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1034,
          displayName: "displayName1.txt",
          systemName: "17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001093\\17a82353-5f3b-4f15-a894-d8d7d6e6c00f.txt",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T11:36:57.53",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T11:36:57.533",
      },
    ],
    requestReviews: [
      {
        id: 1106,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:41:14.44",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T11:36:57.077",
      },
      {
        id: 1107,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:41:23.05",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T11:44:58.273",
      },
    ],
  },
  {
    id: 1094,
    referenceRequestId: null,
    kycId: "KYC-00001094",
    requesterName: "Moradiya Juhil",
    counterpartyName: "MJ",
    approvalDate: "2023-04-19T14:55:16.263",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-17T14:35:57.723",
    requestContact: {
      id: 1094,
      firstName: "Dipesh",
      lastName: "Kavaiya",
      email: "dip@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 9258736987,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1059,
        documentGroupId: "0c8b20f4-e425-4fe7-9d62-242558f86928",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1035,
          displayName: "Test.jfif",
          systemName: "0c8b20f4-e425-4fe7-9d62-242558f86928.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001094\\0c8b20f4-e425-4fe7-9d62-242558f86928.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T14:35:59.287",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T14:35:59.287",
      },
      {
        id: 1060,
        documentGroupId: "0c8b20f4-e425-4fe7-9d62-242558f86928",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1035,
          displayName: "Test.jfif",
          systemName: "0c8b20f4-e425-4fe7-9d62-242558f86928.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001094\\0c8b20f4-e425-4fe7-9d62-242558f86928.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T14:35:59.287",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T14:35:59.287",
      },
    ],
    requestReviews: [
      {
        id: 1108,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-18T15:29:19.58",
        comments: "Testing Purpose",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T14:35:58.59",
      },
      {
        id: 1109,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-18T15:31:27.63",
        comments: "Testing Purpose",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T14:35:58.59",
      },
    ],
  },
  {
    id: 1095,
    referenceRequestId: null,
    kycId: "KYC-00001095",
    requesterName: "Rohit ",
    counterpartyName: "JB",
    approvalDate: "2023-04-21T12:49:12.417",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-17T16:00:52.723",
    requestContact: {
      id: 1095,
      firstName: "Hitesh",
      lastName: "Parmar",
      email: "hit@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 812878952,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1061,
        documentGroupId: "35ecb96f-d697-4229-9473-931d834b05b8",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1036,
          displayName: "JB.jfif",
          systemName: "35ecb96f-d697-4229-9473-931d834b05b8.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001095\\35ecb96f-d697-4229-9473-931d834b05b8.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T16:00:54.443",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:00:54.443",
      },
      {
        id: 1062,
        documentGroupId: "35ecb96f-d697-4229-9473-931d834b05b8",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1036,
          displayName: "JB.jfif",
          systemName: "35ecb96f-d697-4229-9473-931d834b05b8.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001095\\35ecb96f-d697-4229-9473-931d834b05b8.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T16:00:54.443",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:00:54.443",
      },
    ],
    requestReviews: [
      {
        id: 1110,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:42:14.977",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:00:53.583",
      },
      {
        id: 1111,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:42:19.69",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:00:53.583",
      },
      {
        id: 1112,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:42:27.133",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:00:53.583",
      },
    ],
  },
  {
    id: 1096,
    referenceRequestId: null,
    kycId: "KYC-00001096",
    requesterName: "Hitesh",
    counterpartyName: "Jay Bhavani Welding Works",
    approvalDate: "2023-04-21T12:49:00.65",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-17T16:20:11.44",
    requestContact: {
      id: 1096,
      firstName: "Rohit",
      lastName: "Parmar",
      email: "rohit@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 9566825698,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1063,
        documentGroupId: "a3732dd3-fdb5-4c1a-bd0f-f68e52a2d0e9",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1037,
          displayName: "First.jfif",
          systemName: "a3732dd3-fdb5-4c1a-bd0f-f68e52a2d0e9.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001096\\a3732dd3-fdb5-4c1a-bd0f-f68e52a2d0e9.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-17T16:20:12.96",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:20:12.963",
      },
    ],
    requestReviews: [
      {
        id: 1113,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:43:12.23",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:20:12.317",
      },
      {
        id: 1114,
        department: "Legal",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T12:43:19.46",
        comments: "Testing Purpose For Database Cleanup",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-17T16:20:12.317",
      },
    ],
  },
  {
    id: 1097,
    referenceRequestId: "6",
    kycId: "KYC-00000006",
    requesterName: "Meet Patel",
    counterpartyName: "MP Industries",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-19T12:30:55.793",
    requestContact: {
      id: 1097,
      firstName: "Meet",
      lastName: "Chudasama",
      email: "meet@gmail.com",
      streetAddress: "Adajan",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "390002",
      contact: 9087656798,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1115,
        department: "Compliance",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T12:30:58.953",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T12:30:59.873",
      },
      {
        id: 1116,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T12:31:02.727",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T12:31:03.727",
      },
    ],
  },
  {
    id: 1101,
    referenceRequestId: "27",
    kycId: "KYC-00000027",
    requesterName: "Ravi Shah",
    counterpartyName: "Bigscal",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-19T12:55:14.237",
    requestContact: {
      id: 1101,
      firstName: "Parth",
      lastName: "Mithaiwala",
      email: "parth78@gmail.com",
      streetAddress: "Adajan",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398002",
      contact: 7819087543,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1064,
        documentGroupId: "15a22388-8c1f-4088-ba05-ac4b6d464e37",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1038,
          displayName: "Test Picture.jpg",
          systemName: "15a22388-8c1f-4088-ba05-ac4b6d464e37.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\15a22388-8c1f-4088-ba05-ac4b6d464e37.jpg",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:18.753",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:18.753",
      },
      {
        id: 1065,
        documentGroupId: "15a22388-8c1f-4088-ba05-ac4b6d464e37",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1038,
          displayName: "Test Picture.jpg",
          systemName: "15a22388-8c1f-4088-ba05-ac4b6d464e37.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\15a22388-8c1f-4088-ba05-ac4b6d464e37.jpg",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:18.753",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:18.753",
      },
      {
        id: 1066,
        documentGroupId: "c47d9231-c15a-40a7-a4ce-1200ad8e8513",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1039,
          displayName: "Image.jfif",
          systemName: "c47d9231-c15a-40a7-a4ce-1200ad8e8513.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\c47d9231-c15a-40a7-a4ce-1200ad8e8513.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:28.727",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:28.727",
      },
      {
        id: 1067,
        documentGroupId: "c47d9231-c15a-40a7-a4ce-1200ad8e8513",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 1039,
          displayName: "Image.jfif",
          systemName: "c47d9231-c15a-40a7-a4ce-1200ad8e8513.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\c47d9231-c15a-40a7-a4ce-1200ad8e8513.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:28.727",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:28.727",
      },
      {
        id: 1068,
        documentGroupId: "81325dab-a1d8-4aaf-ba7f-3e214ed69d2d",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1040,
          displayName: "Test.png",
          systemName: "81325dab-a1d8-4aaf-ba7f-3e214ed69d2d.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\81325dab-a1d8-4aaf-ba7f-3e214ed69d2d.png",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:30.437",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:30.437",
      },
      {
        id: 1069,
        documentGroupId: "98fa64be-063a-4345-8cd4-4d2f0e27482e",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1041,
          displayName: "Test Document.jfif",
          systemName: "98fa64be-063a-4345-8cd4-4d2f0e27482e.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\98fa64be-063a-4345-8cd4-4d2f0e27482e.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:33.68",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:33.68",
      },
      {
        id: 1070,
        documentGroupId: "37ed8408-68b6-4a1d-a327-2b47a0d965e1",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1042,
          displayName: "Test Test.jpg",
          systemName: "37ed8408-68b6-4a1d-a327-2b47a0d965e1.jpg",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000027_ReApproval_19-04-2023\\37ed8408-68b6-4a1d-a327-2b47a0d965e1.jpg",
          createdBy: "System",
          createdOn: "2023-04-19T12:55:46.78",
        },
        createdBy: "System",
        createdOn: "2023-04-19T12:55:46.78",
      },
    ],
    requestReviews: [
      {
        id: 1126,
        department: "Compliance",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T12:55:14.237",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T12:55:14.237",
      },
      {
        id: 1127,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T12:55:14.237",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T12:55:14.237",
      },
      {
        id: 1128,
        department: "Tax",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T12:55:14.237",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T12:55:14.237",
      },
    ],
  },
  {
    id: 1106,
    referenceRequestId: "28",
    kycId: "KYC-00000028",
    requesterName: "Hiren Pokar",
    counterpartyName: "HP Industries",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-19T14:19:37.35",
    requestContact: {
      id: 1106,
      firstName: "Deep",
      lastName: "Vador",
      email: "deep34@gmail.com",
      streetAddress: "Athwagate",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "398420",
      contact: 9874569733,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1071,
        documentGroupId: "22041650-e0e2-4cac-b686-d9248d5299a4",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1043,
          displayName: "Document.png",
          systemName: "22041650-e0e2-4cac-b686-d9248d5299a4.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028_ReApproval_19-04-2023\\22041650-e0e2-4cac-b686-d9248d5299a4.png",
          createdBy: "System",
          createdOn: "2023-04-19T14:19:42.167",
        },
        createdBy: "System",
        createdOn: "2023-04-19T14:19:42.17",
      },
      {
        id: 1072,
        documentGroupId: "22041650-e0e2-4cac-b686-d9248d5299a4",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1043,
          displayName: "Document.png",
          systemName: "22041650-e0e2-4cac-b686-d9248d5299a4.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028_ReApproval_19-04-2023\\22041650-e0e2-4cac-b686-d9248d5299a4.png",
          createdBy: "System",
          createdOn: "2023-04-19T14:19:42.167",
        },
        createdBy: "System",
        createdOn: "2023-04-19T14:19:42.17",
      },
      {
        id: 1073,
        documentGroupId: "22041650-e0e2-4cac-b686-d9248d5299a4",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 1043,
          displayName: "Document.png",
          systemName: "22041650-e0e2-4cac-b686-d9248d5299a4.png",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00000028_ReApproval_19-04-2023\\22041650-e0e2-4cac-b686-d9248d5299a4.png",
          createdBy: "System",
          createdOn: "2023-04-19T14:19:42.167",
        },
        createdBy: "System",
        createdOn: "2023-04-19T14:19:42.17",
      },
    ],
    requestReviews: [
      {
        id: 1137,
        department: "Compliance",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T14:19:37.35",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T14:19:37.35",
      },
      {
        id: 1138,
        department: "Legal",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T14:19:37.35",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T14:19:37.35",
      },
    ],
  },
  {
    id: 1107,
    referenceRequestId: null,
    kycId: "KYC-00001107",
    requesterName: "Dipesh",
    counterpartyName: "Abc",
    approvalDate: "2023-04-19T14:35:06.95",
    createdBy: "bboda922@rku.ac.in",
    createdOn: "2023-04-19T14:26:49.877",
    requestContact: {
      id: 1107,
      firstName: "xyz",
      lastName: "test",
      email: "test@gmail.com",
      streetAddress: "acx",
      city: "xsd",
      state: "xsd",
      country: "hjk",
      postalCode: "369852",
      contact: 9874563210,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1074,
        documentGroupId: "4c722ac8-e7cf-4ebd-9046-2127bcfb59ef",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1044,
          displayName: "Testing.jfif",
          systemName: "4c722ac8-e7cf-4ebd-9046-2127bcfb59ef.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001107\\4c722ac8-e7cf-4ebd-9046-2127bcfb59ef.jfif",
          createdBy: "bboda922@rku.ac.in",
          createdOn: "2023-04-19T14:27:47.08",
        },
        createdBy: "bboda922@rku.ac.in",
        createdOn: "2023-04-19T14:27:47.083",
      },
    ],
    requestReviews: [
      {
        id: 1139,
        department: "Treasury",
        status: "Approved",
        statusBy: "bboda922@rku.ac.in",
        statusOn: "2023-04-19T14:28:16.007",
        comments: "esting",
        createdBy: "bboda922@rku.ac.in",
        createdOn: "2023-04-19T14:26:50.69",
      },
    ],
  },
  {
    id: 1109,
    referenceRequestId: "1107",
    kycId: "KYC-00001107",
    requesterName: "Dipesh",
    counterpartyName: "Abc",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-19T14:47:30.04",
    requestContact: {
      id: 1109,
      firstName: "xyz",
      lastName: "test",
      email: "test@gmail.com",
      streetAddress: "acx",
      city: "xsd",
      state: "xsd",
      country: "hjk",
      postalCode: "369852",
      contact: 9874563210,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1075,
        documentGroupId: "54ee3bac-689a-4094-be1c-27683b75f2c6",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1045,
          displayName: "Testing.jfif",
          systemName: "54ee3bac-689a-4094-be1c-27683b75f2c6.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001107_ReApproval_19-04-2023\\54ee3bac-689a-4094-be1c-27683b75f2c6.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T14:47:38.473",
        },
        createdBy: "System",
        createdOn: "2023-04-19T14:47:38.477",
      },
    ],
    requestReviews: [
      {
        id: 1141,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T14:47:30.04",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T14:47:30.04",
      },
    ],
  },
  {
    id: 1112,
    referenceRequestId: "1094",
    kycId: "KYC-00001094",
    requesterName: "Moradiya Juhil",
    counterpartyName: "MJ",
    approvalDate: null,
    createdBy: "System",
    createdOn: "2023-04-19T15:06:53.417",
    requestContact: {
      id: 1112,
      firstName: "Dipesh",
      lastName: "Kavaiya",
      email: "dip@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 9258736987,
    },
    riskLevel: null,
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1076,
        documentGroupId: "e038d923-5688-4cc3-ad3b-0ef146e5f5af",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1046,
          displayName: "Test.jfif",
          systemName: "e038d923-5688-4cc3-ad3b-0ef146e5f5af.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001094_ReApproval_19-04-2023\\e038d923-5688-4cc3-ad3b-0ef146e5f5af.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T15:07:06.59",
        },
        createdBy: "System",
        createdOn: "2023-04-19T15:07:12.397",
      },
      {
        id: 1077,
        documentGroupId: "e038d923-5688-4cc3-ad3b-0ef146e5f5af",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1046,
          displayName: "Test.jfif",
          systemName: "e038d923-5688-4cc3-ad3b-0ef146e5f5af.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001094_ReApproval_19-04-2023\\e038d923-5688-4cc3-ad3b-0ef146e5f5af.jfif",
          createdBy: "System",
          createdOn: "2023-04-19T15:07:06.59",
        },
        createdBy: "System",
        createdOn: "2023-04-19T15:07:17.443",
      },
    ],
    requestReviews: [
      {
        id: 1146,
        department: "Treasury",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T15:06:53.417",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T15:06:53.417",
      },
      {
        id: 1147,
        department: "Tax",
        status: "Draft",
        statusBy: "System",
        statusOn: "2023-04-19T15:06:53.417",
        comments: null,
        createdBy: "System",
        createdOn: "2023-04-19T15:06:53.417",
      },
    ],
  },
  {
    id: 1113,
    referenceRequestId: null,
    kycId: "KYC-00001113",
    requesterName: "Dipesh Kavaiya",
    counterpartyName: "Shiv Industries",
    approvalDate: "2023-04-21T15:51:19.35",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-21T15:39:29.74",
    requestContact: {
      id: 1113,
      firstName: "Vishal",
      lastName: "Kavaiya",
      email: "dkavaiya239@rku.ac.in",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Gujarat",
      country: "India",
      postalCode: "363510",
      contact: 9084785356,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1082,
        documentGroupId: "6f3507bd-30a1-4f0f-83c1-71f4313e31d3",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1049,
          displayName: "Testing.jfif",
          systemName: "6f3507bd-30a1-4f0f-83c1-71f4313e31d3.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001113\\6f3507bd-30a1-4f0f-83c1-71f4313e31d3.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T15:50:19.97",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:50:19.97",
      },
      {
        id: 1083,
        documentGroupId: "6f3507bd-30a1-4f0f-83c1-71f4313e31d3",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1049,
          displayName: "Testing.jfif",
          systemName: "6f3507bd-30a1-4f0f-83c1-71f4313e31d3.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001113\\6f3507bd-30a1-4f0f-83c1-71f4313e31d3.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T15:50:19.97",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:50:19.97",
      },
      {
        id: 1084,
        documentGroupId: "3f610ade-b905-4409-90bd-0b6a15e5a82c",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1050,
          displayName: "Testing 1.jfif",
          systemName: "3f610ade-b905-4409-90bd-0b6a15e5a82c.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001113\\3f610ade-b905-4409-90bd-0b6a15e5a82c.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T15:50:44.46",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:50:44.46",
      },
      {
        id: 1085,
        documentGroupId: "3f610ade-b905-4409-90bd-0b6a15e5a82c",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 1050,
          displayName: "Testing 1.jfif",
          systemName: "3f610ade-b905-4409-90bd-0b6a15e5a82c.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001113\\3f610ade-b905-4409-90bd-0b6a15e5a82c.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-21T15:50:44.46",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:50:44.46",
      },
    ],
    requestReviews: [
      {
        id: 1148,
        department: "Compliance",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T15:51:07.68",
        comments: "I'll Do it forgive me",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:39:29.793",
      },
      {
        id: 1149,
        department: "Treasury",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T15:51:01.097",
        comments: "I'll Do it forgive me",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:39:29.793",
      },
      {
        id: 1150,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-21T15:50:52.62",
        comments: "I'll Do it forgive me",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-21T15:39:29.793",
      },
    ],
  },
  {
    id: 1114,
    referenceRequestId: null,
    kycId: "KYC-00001114",
    requesterName: "Shalin Kikaganeshwala",
    counterpartyName: "The Monk",
    approvalDate: "2023-04-25T15:37:23.77",
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-25T15:20:40.27",
    requestContact: {
      id: 1114,
      firstName: "Dipesh",
      lastName: "Kavaiya",
      email: "dip@gmail.com",
      streetAddress: "Sarla",
      city: "Surendranagar",
      state: "Guajrat",
      country: "India",
      postalCode: "363510",
      contact: 9015878569,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 3,
      name: "Approved",
    },
    requestDocuments: [
      {
        id: 1086,
        documentGroupId: "54821345-8f10-4d5a-a248-f2d19dd9e60d",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1051,
          displayName: "Test.com(2)",
          systemName: "54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001114\\54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-25T15:28:56.52",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-25T15:28:56.52",
      },
      {
        id: 1087,
        documentGroupId: "54821345-8f10-4d5a-a248-f2d19dd9e60d",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1051,
          displayName: "Test.com(2)",
          systemName: "54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001114\\54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-25T15:28:56.52",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-25T15:28:56.52",
      },
      {
        id: 1088,
        documentGroupId: "54821345-8f10-4d5a-a248-f2d19dd9e60d",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 1051,
          displayName: "Test.com(2)",
          systemName: "54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001114\\54821345-8f10-4d5a-a248-f2d19dd9e60d.com(2)",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-25T15:28:56.52",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-25T15:28:56.52",
      },
    ],
    requestReviews: [
      {
        id: 1151,
        department: "Tax",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-25T15:36:41.45",
        comments: "Testing Purpose",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-25T15:20:40.317",
      },
      {
        id: 1152,
        department: "Legal",
        status: "Approved",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-25T15:36:51.967",
        comments: "Testing Purpose",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-25T15:20:40.317",
      },
    ],
  },
  {
    id: 1121,
    referenceRequestId: null,
    kycId: "KYC-00001121",
    requesterName: "Hiren Khunt",
    counterpartyName: "Dream11",
    approvalDate: null,
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-27T16:41:03.327",
    requestContact: {
      id: 1121,
      firstName: "Jenish",
      lastName: "Paladiya",
      email: "jenishpaladiya82@gmail.com",
      streetAddress: "Dabholi",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "296005",
      contact: 9845632145,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [
      {
        id: 1089,
        documentGroupId: "55813652-ef4d-445e-b1a3-114ddf8679b2",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1052,
          displayName: "Test1.jfif",
          systemName: "55813652-ef4d-445e-b1a3-114ddf8679b2.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001121\\55813652-ef4d-445e-b1a3-114ddf8679b2.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-27T16:42:04.257",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:42:04.26",
      },
      {
        id: 1090,
        documentGroupId: "55813652-ef4d-445e-b1a3-114ddf8679b2",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1052,
          displayName: "Test1.jfif",
          systemName: "55813652-ef4d-445e-b1a3-114ddf8679b2.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001121\\55813652-ef4d-445e-b1a3-114ddf8679b2.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-27T16:42:04.257",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:42:04.26",
      },
      {
        id: 1091,
        documentGroupId: "f3879151-91a0-4ebc-9a02-4dcbd782cb4f",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1053,
          displayName: "Test2.jfif",
          systemName: "f3879151-91a0-4ebc-9a02-4dcbd782cb4f.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001121\\f3879151-91a0-4ebc-9a02-4dcbd782cb4f.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-27T16:42:21.72",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:42:21.72",
      },
      {
        id: 1092,
        documentGroupId: "f3879151-91a0-4ebc-9a02-4dcbd782cb4f",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1053,
          displayName: "Test2.jfif",
          systemName: "f3879151-91a0-4ebc-9a02-4dcbd782cb4f.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001121\\f3879151-91a0-4ebc-9a02-4dcbd782cb4f.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-04-27T16:42:21.72",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:42:21.72",
      },
    ],
    requestReviews: [
      {
        id: 1161,
        department: "Tax",
        status: "Department Approval",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-04-27T16:41:03.343",
        comments: null,
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:41:03.343",
      },
      {
        id: 1162,
        department: "Legal",
        status: "Needs More Document",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-04T16:37:26.42",
        comments: "Few documents like bank documents are not proper",
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-04-27T16:41:03.343",
      },
    ],
  },
  {
    id: 1123,
    referenceRequestId: null,
    kycId: "KYC-00001123",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-04-27T16:48:00.25",
    requestContact: {
      id: 1123,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1121,
        documentGroupId: "54d32ef6-4bb1-4aa2-98d1-9bc328442cd7",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1077,
          displayName: "refere.com (3)",
          systemName: "54d32ef6-4bb1-4aa2-98d1-9bc328442cd7.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001123\\54d32ef6-4bb1-4aa2-98d1-9bc328442cd7.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T12:11:59.28",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T12:11:59.28",
      },
    ],
    requestReviews: [
      {
        id: 2229,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-05T10:25:06.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-05T10:25:06.613",
      },
      {
        id: 2230,
        department: "Legal",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-05T10:25:06.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-05T10:25:06.613",
      },
    ],
  },
  {
    id: 1124,
    referenceRequestId: null,
    kycId: "KYC-00001124",
    requesterName: "Hiral",
    counterpartyName: "HK Group",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-27T16:49:35.573",
    requestContact: {
      id: 1124,
      firstName: "Hiral",
      lastName: "Kadachha",
      email: "kadachhahiral310@gmail.com",
      streetAddress: "RANAVADVALA, NAVAPARA",
      city: "PORBANDAR",
      state: "GUJARAT",
      country: "India",
      postalCode: "360570",
      contact: 56864564,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1163,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-27T16:49:35.603",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-27T16:49:35.603",
      },
      {
        id: 1164,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-27T16:49:35.603",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-27T16:49:35.603",
      },
    ],
  },
  {
    id: 1125,
    referenceRequestId: null,
    kycId: "KYC-00001125",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T12:42:28.63",
    requestContact: {
      id: 1125,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1122,
        documentGroupId: "c6512270-9440-4a75-b32c-6b2b35ac3cd7",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1078,
          displayName: "Document2.com(1)",
          systemName: "c6512270-9440-4a75-b32c-6b2b35ac3cd7.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001125\\c6512270-9440-4a75-b32c-6b2b35ac3cd7.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T12:16:16.54",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T12:16:16.54",
      },
      {
        id: 1123,
        documentGroupId: "5f7c8083-a067-41f6-99e5-0a9e142f4942",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1079,
          displayName: "Document3.com (3)",
          systemName: "5f7c8083-a067-41f6-99e5-0a9e142f4942.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001125\\5f7c8083-a067-41f6-99e5-0a9e142f4942.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T12:18:56.417",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T12:18:56.417",
      },
      {
        id: 1108,
        documentGroupId: "65460227-e160-498e-ac66-6e2cc15ca48d",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1065,
          displayName: "Bank.com(1)",
          systemName: "65460227-e160-498e-ac66-6e2cc15ca48d.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001125\\65460227-e160-498e-ac66-6e2cc15ca48d.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T18:01:27.8",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:01:27.8",
      },
    ],
    requestReviews: [
      {
        id: 1220,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-02T18:02:20.12",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:02:20.12",
      },
      {
        id: 1221,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-02T18:02:20.12",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:02:20.12",
      },
    ],
  },
  {
    id: 1126,
    referenceRequestId: null,
    kycId: "KYC-00001126",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T12:58:54.513",
    requestContact: {
      id: 1126,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1109,
        documentGroupId: "8dafe1f5-e1ef-4add-ad55-9892dfe69f86",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1066,
          displayName: "refere.com (1)",
          systemName: "8dafe1f5-e1ef-4add-ad55-9892dfe69f86.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001126\\8dafe1f5-e1ef-4add-ad55-9892dfe69f86.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T18:06:24.143",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:06:24.143",
      },
    ],
    requestReviews: [
      {
        id: 1222,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-02T18:06:48",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:06:48",
      },
      {
        id: 1223,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-02T18:06:48",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:06:48",
      },
    ],
  },
  {
    id: 1127,
    referenceRequestId: null,
    kycId: "KYC-00001127",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:07:59.79",
    requestContact: {
      id: 1127,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1110,
        documentGroupId: "b7709aaa-241a-4e66-af0b-cdd8e1142d39",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1067,
          displayName: "Document1.com (3)",
          systemName: "b7709aaa-241a-4e66-af0b-cdd8e1142d39.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001127\\b7709aaa-241a-4e66-af0b-cdd8e1142d39.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T18:11:33.923",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:11:33.923",
      },
      {
        id: 1111,
        documentGroupId: "a7c6fdf2-54a7-44cc-86ee-c606cdc309b1",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1068,
          displayName: "Document.com(1)",
          systemName: "a7c6fdf2-54a7-44cc-86ee-c606cdc309b1.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001127\\a7c6fdf2-54a7-44cc-86ee-c606cdc309b1.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T18:13:24.817",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:13:24.817",
      },
    ],
    requestReviews: [
      {
        id: 1224,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-02T18:11:48.427",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T18:11:48.427",
      },
    ],
  },
  {
    id: 1128,
    referenceRequestId: null,
    kycId: "KYC-00001128",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:08:35.133",
    requestContact: {
      id: 1128,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1112,
        documentGroupId: "e4558124-5b35-4bd5-9ee8-8c3e5b59d4dc",
        documentType: {
          id: 7,
          name: "Certificate of Registration",
        },
        document: {
          id: 1069,
          displayName: "Document.com (3)",
          systemName: "e4558124-5b35-4bd5-9ee8-8c3e5b59d4dc.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001128\\e4558124-5b35-4bd5-9ee8-8c3e5b59d4dc.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:17:37.033",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:17:37.033",
      },
      {
        id: 1113,
        documentGroupId: "009b319d-bcaf-4811-a126-79df96534802",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 1070,
          displayName: "refere.com (3)",
          systemName: "009b319d-bcaf-4811-a126-79df96534802.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001128\\009b319d-bcaf-4811-a126-79df96534802.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:22:53.7",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:22:53.7",
      },
      {
        id: 1114,
        documentGroupId: "c476e4a2-98ea-40a5-a050-26934705d7d6",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 1071,
          displayName: "List of Direction.com(1)",
          systemName: "c476e4a2-98ea-40a5-a050-26934705d7d6.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001128\\c476e4a2-98ea-40a5-a050-26934705d7d6.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:25:04.143",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:25:04.143",
      },
      {
        id: 1115,
        documentGroupId: "1aeb3824-f7c6-4283-b43d-8a618af66b86",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1072,
          displayName: "Bank.com(1)",
          systemName: "1aeb3824-f7c6-4283-b43d-8a618af66b86.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001128\\1aeb3824-f7c6-4283-b43d-8a618af66b86.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:31:37.69",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:31:37.69",
      },
    ],
    requestReviews: [],
  },
  {
    id: 1129,
    referenceRequestId: null,
    kycId: "KYC-00001129",
    requesterName: "shalin",
    counterpartyName: "SK group",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:15:02.203",
    requestContact: {
      id: 1129,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1165,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:15:02.217",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:15:02.217",
      },
      {
        id: 1166,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:15:02.217",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:15:02.217",
      },
      {
        id: 1167,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:15:02.217",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:15:02.217",
      },
    ],
  },
  {
    id: 1130,
    referenceRequestId: null,
    kycId: "KYC-00001130",
    requesterName: "Hiral",
    counterpartyName: "HK Group",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T14:32:45.597",
    requestContact: {
      id: 1130,
      firstName: "Hiral",
      lastName: "Kadachha",
      email: "kadachhahiral310@gmail.com",
      streetAddress: "RANAVADVALA, NAVAPARA",
      city: "PORBANDAR",
      state: "GUJARAT",
      country: "India",
      postalCode: "360570",
      contact: 56864564,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1168,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T14:32:45.62",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T14:32:45.62",
      },
    ],
  },
  {
    id: 1131,
    referenceRequestId: null,
    kycId: "KYC-00001131",
    requesterName: "Hiral",
    counterpartyName: "HK Group Of Comany",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T14:33:24.277",
    requestContact: {
      id: 1131,
      firstName: "Hiral",
      lastName: "Kadachha",
      email: "kadachhahiral310@gmail.com",
      streetAddress: "RANAVADVALA, NAVAPARA",
      city: "PORBANDAR",
      state: "GUJARAT",
      country: "India",
      postalCode: "360570",
      contact: 56864564,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1169,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T14:33:24.28",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T14:33:24.28",
      },
    ],
  },
  {
    id: 1132,
    referenceRequestId: null,
    kycId: "KYC-00001132",
    requesterName: "shalin",
    counterpartyName: "SK sons",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:41:20.833",
    requestContact: {
      id: 1132,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1124,
        documentGroupId: "2a0898e7-789a-4a88-8e76-fdf72a8ed1b4",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1080,
          displayName: "Document1.com",
          systemName: "2a0898e7-789a-4a88-8e76-fdf72a8ed1b4.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001132\\2a0898e7-789a-4a88-8e76-fdf72a8ed1b4.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T12:21:53.753",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T12:21:53.753",
      },
      {
        id: 1125,
        documentGroupId: "841c6f81-dd29-4bb9-9cc6-81929177389f",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1081,
          displayName: "refere.com (3)",
          systemName: "841c6f81-dd29-4bb9-9cc6-81929177389f.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001132\\841c6f81-dd29-4bb9-9cc6-81929177389f.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T12:24:39.603",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T12:24:39.603",
      },
    ],
    requestReviews: [
      {
        id: 1170,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:41:20.843",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:41:20.843",
      },
      {
        id: 1171,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:41:20.843",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:41:20.843",
      },
      {
        id: 1172,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:41:20.843",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:41:20.843",
      },
    ],
  },
  {
    id: 1133,
    referenceRequestId: null,
    kycId: "KYC-00001133",
    requesterName: "shalin",
    counterpartyName: "SK son",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:44:27.053",
    requestContact: {
      id: 1133,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1173,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:44:27.07",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:44:27.07",
      },
      {
        id: 1174,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:44:27.07",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:44:27.07",
      },
      {
        id: 1175,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:44:27.07",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:44:27.07",
      },
    ],
  },
  {
    id: 1134,
    referenceRequestId: null,
    kycId: "KYC-00001134",
    requesterName: "shalin",
    counterpartyName: "SK Brothers",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:50:00.77",
    requestContact: {
      id: 1134,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1176,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:50:00.783",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:50:00.783",
      },
      {
        id: 1177,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:50:00.783",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:50:00.783",
      },
      {
        id: 1178,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:50:00.783",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:50:00.783",
      },
    ],
  },
  {
    id: 1135,
    referenceRequestId: null,
    kycId: "KYC-00001135",
    requesterName: "Vinit",
    counterpartyName: "Sk Industry",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:52:58.583",
    requestContact: {
      id: 1135,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1179,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:03:53.583",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:52:58.603",
      },
      {
        id: 1180,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:03:53.583",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:52:58.603",
      },
      {
        id: 1181,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:03:53.583",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:52:58.603",
      },
    ],
  },
  {
    id: 1136,
    referenceRequestId: null,
    kycId: "KYC-00001136",
    requesterName: "shalin",
    counterpartyName: "Sk Heights",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:54:21.613",
    requestContact: {
      id: 1136,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1182,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:54:21.627",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:54:21.627",
      },
      {
        id: 1183,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:54:21.627",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:54:21.627",
      },
      {
        id: 1184,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:54:21.627",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:54:21.627",
      },
    ],
  },
  {
    id: 1137,
    referenceRequestId: null,
    kycId: "KYC-00001137",
    requesterName: "shalin",
    counterpartyName: "Sk Heights",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:55:20.627",
    requestContact: {
      id: 1137,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1185,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:55:20.63",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:55:20.63",
      },
      {
        id: 1186,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:55:20.63",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:55:20.63",
      },
      {
        id: 1187,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:55:20.63",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:55:20.63",
      },
      {
        id: 1188,
        department: "Legal",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:55:20.63",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:55:20.63",
      },
    ],
  },
  {
    id: 1138,
    referenceRequestId: null,
    kycId: "KYC-00001138",
    requesterName: "shalin",
    counterpartyName: "Sk Industry",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T14:56:59.947",
    requestContact: {
      id: 1138,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1116,
        documentGroupId: "e783e1c4-fd6e-4cc5-a2d0-924bc523632f",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1073,
          displayName: "Document1.com (3)",
          systemName: "e783e1c4-fd6e-4cc5-a2d0-924bc523632f.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001138\\e783e1c4-fd6e-4cc5-a2d0-924bc523632f.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:41:47.207",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:41:47.207",
      },
      {
        id: 1117,
        documentGroupId: "e783e1c4-fd6e-4cc5-a2d0-924bc523632f",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1073,
          displayName: "Document1.com (3)",
          systemName: "e783e1c4-fd6e-4cc5-a2d0-924bc523632f.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001138\\e783e1c4-fd6e-4cc5-a2d0-924bc523632f.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T10:41:47.207",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T10:41:47.207",
      },
      {
        id: 1105,
        documentGroupId: "28d08d87-f00a-44a3-bf33-91b812ceeefc",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1062,
          displayName: "Document.com(1)",
          systemName: "28d08d87-f00a-44a3-bf33-91b812ceeefc.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001138\\28d08d87-f00a-44a3-bf33-91b812ceeefc.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T16:52:58.95",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T16:52:58.95",
      },
    ],
    requestReviews: [
      {
        id: 1189,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:56:59.95",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:56:59.95",
      },
      {
        id: 1190,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T14:56:59.95",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T14:56:59.95",
      },
    ],
  },
  {
    id: 1139,
    referenceRequestId: null,
    kycId: "KYC-00001139",
    requesterName: "Hiral Kadachha",
    counterpartyName: "HK Group Of Comany",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T15:03:26.36",
    requestContact: {
      id: 1139,
      firstName: "Hiral",
      lastName: "Kadachha",
      email: "kadachhahiral310@gmail.com",
      streetAddress: "Ranavav",
      city: "Porbandar",
      state: "Gujrat",
      country: "India",
      postalCode: "360570",
      contact: 897979464,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1191,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:14:38.203",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T15:03:26.4",
      },
      {
        id: 1211,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:14:38.203",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T16:14:38.203",
      },
    ],
  },
  {
    id: 1140,
    referenceRequestId: null,
    kycId: "KYC-00001140",
    requesterName: "smit",
    counterpartyName: "Sk Industry",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:06:32.923",
    requestContact: {
      id: 1140,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1192,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:06:32.94",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:06:32.94",
      },
      {
        id: 1193,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:06:32.94",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:06:32.94",
      },
    ],
  },
  {
    id: 1141,
    referenceRequestId: null,
    kycId: "KYC-00001141",
    requesterName: "smit",
    counterpartyName: "Mice Industry",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:07:57.027",
    requestContact: {
      id: 1141,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1126,
        documentGroupId: "768a98db-8edf-4240-bd5c-e1c693ff778e",
        documentType: {
          id: 2,
          name: "ACER Code for All EU Counterparties",
        },
        document: {
          id: 1082,
          displayName: "Document.com(1)",
          systemName: "768a98db-8edf-4240-bd5c-e1c693ff778e.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001141\\768a98db-8edf-4240-bd5c-e1c693ff778e.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T16:23:37.157",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T16:23:37.157",
      },
    ],
    requestReviews: [
      {
        id: 1194,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:07:57.053",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:07:57.053",
      },
      {
        id: 1195,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:07:57.053",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:07:57.053",
      },
    ],
  },
  {
    id: 1142,
    referenceRequestId: null,
    kycId: "KYC-00001142",
    requesterName: "Peter",
    counterpartyName: "Sk Industry",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:12:29.503",
    requestContact: {
      id: 1142,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1196,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:12:29.517",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:12:29.517",
      },
      {
        id: 1197,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:12:29.517",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:12:29.517",
      },
    ],
  },
  {
    id: 1143,
    referenceRequestId: null,
    kycId: "KYC-00001143",
    requesterName: "Snorlax",
    counterpartyName: "Miniun",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:14:22.697",
    requestContact: {
      id: 1143,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1198,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:14:22.737",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:14:22.737",
      },
      {
        id: 1199,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:14:22.737",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:14:22.737",
      },
      {
        id: 1200,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:14:22.737",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:14:22.737",
      },
      {
        id: 1201,
        department: "Legal",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:14:22.737",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:14:22.737",
      },
    ],
  },
  {
    id: 1144,
    referenceRequestId: null,
    kycId: "KYC-00001144",
    requesterName: "Snorlaxx",
    counterpartyName: "Miniun",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:19:59.067",
    requestContact: {
      id: 1144,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1106,
        documentGroupId: "db79191f-f0f9-4ab0-aced-5a8069115bd5",
        documentType: {
          id: 13,
          name: "Other",
        },
        document: {
          id: 1063,
          displayName: "refere.com(1)",
          systemName: "db79191f-f0f9-4ab0-aced-5a8069115bd5.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001144\\db79191f-f0f9-4ab0-aced-5a8069115bd5.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T16:55:56.95",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T16:55:56.95",
      },
    ],
    requestReviews: [
      {
        id: 1202,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:19:59.1",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:19:59.1",
      },
      {
        id: 1203,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:19:59.1",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:19:59.1",
      },
      {
        id: 1204,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:19:59.1",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:19:59.1",
      },
      {
        id: 1205,
        department: "Legal",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-04-28T15:19:59.1",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:19:59.1",
      },
    ],
  },
  {
    id: 1145,
    referenceRequestId: null,
    kycId: "KYC-00001145",
    requesterName: "Snorlax",
    counterpartyName: "Miniun",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:21:32.033",
    requestContact: {
      id: 1145,
      firstName: "Shalin",
      lastName: "Kikaganeshwala",
      email: "shalin@gmail.com",
      streetAddress: "Vip road",
      city: "Surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395007",
      contact: 9428960597,
    },
    riskLevel: {
      id: 1,
      name: "High",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [
      {
        id: 1107,
        documentGroupId: "86639e5a-b56a-4aeb-b933-7179bde2c241",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1064,
          displayName: "Bank.com",
          systemName: "86639e5a-b56a-4aeb-b933-7179bde2c241.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\86639e5a-b56a-4aeb-b933-7179bde2c241.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-02T17:57:04.67",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-02T17:57:04.67",
      },
      {
        id: 1097,
        documentGroupId: "beaaecd2-8ebc-42f5-b2cc-4808cff4ac5c",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 1058,
          displayName: "Document1.com",
          systemName: "beaaecd2-8ebc-42f5-b2cc-4808cff4ac5c.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\beaaecd2-8ebc-42f5-b2cc-4808cff4ac5c.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T15:09:58.643",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T15:10:02.067",
      },
      {
        id: 1098,
        documentGroupId: "6d533c0a-55d2-41f0-99ec-2b8f651b4d22",
        documentType: {
          id: 3,
          name: "Bank Reference",
        },
        document: {
          id: 1059,
          displayName: "Bank.com (1)",
          systemName: "6d533c0a-55d2-41f0-99ec-2b8f651b4d22.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\6d533c0a-55d2-41f0-99ec-2b8f651b4d22.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T15:48:29.72",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T15:48:29.72",
      },
      {
        id: 1099,
        documentGroupId: "cd53afb6-24ff-4c76-b37e-a45bd719883b",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1060,
          displayName: "refere.com (3)",
          systemName: "cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T15:52:04.707",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T15:52:04.707",
      },
      {
        id: 1100,
        documentGroupId: "cd53afb6-24ff-4c76-b37e-a45bd719883b",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1060,
          displayName: "refere.com (3)",
          systemName: "cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T15:52:04.707",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T15:52:04.707",
      },
      {
        id: 1101,
        documentGroupId: "cd53afb6-24ff-4c76-b37e-a45bd719883b",
        documentType: {
          id: 12,
          name: "VAT or Tax Registration Certificate",
        },
        document: {
          id: 1060,
          displayName: "refere.com (3)",
          systemName: "cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\cd53afb6-24ff-4c76-b37e-a45bd719883b.com (3)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T15:52:04.707",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T15:52:04.707",
      },
      {
        id: 1118,
        documentGroupId: "288484d0-2fcd-4d3b-a4ae-aa57a916f00c",
        documentType: {
          id: 11,
          name: "Two Most Recent Audited Financial Accounts",
        },
        document: {
          id: 1074,
          displayName: "Document.com (1)",
          systemName: "288484d0-2fcd-4d3b-a4ae-aa57a916f00c.com (1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\288484d0-2fcd-4d3b-a4ae-aa57a916f00c.com (1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T11:46:37.987",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T11:46:37.987",
      },
      {
        id: 1119,
        documentGroupId: "4c816550-8cf9-4d1a-ba4e-8cdab6ef9ad2",
        documentType: {
          id: 9,
          name: "Legal Structure Diagram",
        },
        document: {
          id: 1075,
          displayName: "refere.com(1)",
          systemName: "4c816550-8cf9-4d1a-ba4e-8cdab6ef9ad2.com(1)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\4c816550-8cf9-4d1a-ba4e-8cdab6ef9ad2.com(1)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T11:48:47.99",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T11:48:47.99",
      },
      {
        id: 1120,
        documentGroupId: "7b5e0eff-3483-4630-9a92-2ff77112b2b6",
        documentType: {
          id: 10,
          name: "List of Company Directors",
        },
        document: {
          id: 1076,
          displayName: "List of Direction.com",
          systemName: "7b5e0eff-3483-4630-9a92-2ff77112b2b6.com",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\7b5e0eff-3483-4630-9a92-2ff77112b2b6.com",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-03T11:50:28.087",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T11:50:28.087",
      },
      {
        id: 1093,
        documentGroupId: "82fd0e72-979c-472c-a6a8-999bc8bd4f4f",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1054,
          displayName: "Document.com(2)",
          systemName: "82fd0e72-979c-472c-a6a8-999bc8bd4f4f.com(2)",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001145\\82fd0e72-979c-472c-a6a8-999bc8bd4f4f.com(2)",
          createdBy: "shalinkikaganeshwala15@gmail.com",
          createdOn: "2023-05-01T10:54:12.417",
        },
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-01T10:54:12.417",
      },
    ],
    requestReviews: [
      {
        id: 1206,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-01T15:23:39.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:21:32.077",
      },
      {
        id: 1207,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-01T15:23:39.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:21:32.077",
      },
      {
        id: 1208,
        department: "Treasury",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-01T15:23:39.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:21:32.077",
      },
      {
        id: 1209,
        department: "Legal",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-01T15:23:39.613",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:21:32.077",
      },
    ],
  },
  {
    id: 1146,
    referenceRequestId: null,
    kycId: "KYC-00001146",
    requesterName: "Peter john",
    counterpartyName: "Miniun",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-04-28T15:34:41.48",
    requestContact: {
      id: 1146,
      firstName: "Manav",
      lastName: "Gohil",
      email: "manav43@gmail.com",
      streetAddress: "442454",
      city: "55555",
      state: "68455",
      country: "6846846",
      postalCode: "555555",
      contact: 111111111,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1210,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:17:02.307",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-04-28T15:34:41.503",
      },
    ],
  },
  {
    id: 1147,
    referenceRequestId: null,
    kycId: "KYC-00001147",
    requesterName: "michael",
    counterpartyName: "michael foundation",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T16:38:47.433",
    requestContact: {
      id: 1147,
      firstName: "michael",
      lastName: "decouza",
      email: "michael@gmail.com",
      streetAddress: "block 3 , 1st floor",
      city: "haridwar",
      state: "Uttarakhand,",
      country: "India",
      postalCode: "123456",
      contact: 9824657859,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1212,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:38:47.483",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T16:38:47.483",
      },
      {
        id: 1213,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:38:47.483",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T16:38:47.483",
      },
      {
        id: 1214,
        department: "Compliance",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:38:47.483",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T16:38:47.483",
      },
      {
        id: 1215,
        department: "Treasury",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T16:38:47.483",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T16:38:47.483",
      },
    ],
  },
  {
    id: 1148,
    referenceRequestId: null,
    kycId: "KYC-00001148",
    requesterName: "Priya",
    counterpartyName: "Priya Foundation",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T17:27:37.503",
    requestContact: {
      id: 1148,
      firstName: "hiral",
      lastName: "kadachha",
      email: "hiral@gmail.com",
      streetAddress: "ranavav",
      city: "porbandar",
      state: "gujrat",
      country: "india",
      postalCode: "360570",
      contact: 875455698,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1216,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T17:27:37.553",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T17:27:37.553",
      },
      {
        id: 1217,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T17:27:37.553",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T17:27:37.553",
      },
    ],
  },
  {
    id: 1149,
    referenceRequestId: null,
    kycId: "KYC-00001149",
    requesterName: "Hiral K.",
    counterpartyName: "HK Group Of Comany",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-04-28T17:30:02.117",
    requestContact: {
      id: 1149,
      firstName: "hiral",
      lastName: "kadachha",
      email: "hiral@gmail.com",
      streetAddress: "ranavav",
      city: "porbandar",
      state: "gujrat",
      country: "india",
      postalCode: "360570",
      contact: 9182736450,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1218,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T17:30:02.157",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T17:30:02.157",
      },
      {
        id: 1219,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-04-28T17:30:02.157",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-04-28T17:30:02.157",
      },
    ],
  },
  {
    id: 1150,
    referenceRequestId: null,
    kycId: "KYC-00001150",
    requesterName: "Peter",
    counterpartyName: "Peter Englend",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-03T15:13:00.33",
    requestContact: {
      id: 1150,
      firstName: "Peter",
      lastName: "Parker",
      email: "peter33@gmail.com",
      streetAddress: "B6 wall street",
      city: "London",
      state: "United Kingdom",
      country: "United Kingdom",
      postalCode: "123456",
      contact: 9876543210,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1225,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-03T15:13:00.357",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T15:13:00.357",
      },
    ],
  },
  {
    id: 1151,
    referenceRequestId: null,
    kycId: "KYC-00001151",
    requesterName: "Peter",
    counterpartyName: "Peter Englend",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-03T15:13:39.003",
    requestContact: {
      id: 1151,
      firstName: "Peter",
      lastName: "Parker",
      email: "peter33@gmail.com",
      streetAddress: "B6 wall street",
      city: "London",
      state: "United Kingdom",
      country: "United Kingdom",
      postalCode: "123456",
      contact: 9876543210,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 1226,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-03T15:13:39.043",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-03T15:13:39.043",
      },
    ],
  },
  {
    id: 1152,
    referenceRequestId: null,
    kycId: "KYC-00001152",
    requesterName: "Dipesh Kavaiya",
    counterpartyName: "Dk Group",
    approvalDate: null,
    createdBy: "dippanchal02@gmail.com",
    createdOn: "2023-05-04T19:00:09.05",
    requestContact: {
      id: 1152,
      firstName: "Bhumi",
      lastName: "Boda",
      email: "bb@gmail.com",
      streetAddress: "Navsari",
      city: "Navsari",
      state: "Gujarat",
      country: "India",
      postalCode: "369852",
      contact: 9632587410,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [
      {
        id: 1129,
        documentGroupId: "021cf441-7339-4c8f-86fb-6e8f188b3bbf",
        documentType: {
          id: 4,
          name: "Banking Details on Company Letterhead",
        },
        document: {
          id: 1084,
          displayName: "Test5.csv",
          systemName: "021cf441-7339-4c8f-86fb-6e8f188b3bbf.csv",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001152\\021cf441-7339-4c8f-86fb-6e8f188b3bbf.csv",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-05-04T19:02:24.747",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:02:24.747",
      },
      {
        id: 1130,
        documentGroupId: "021cf441-7339-4c8f-86fb-6e8f188b3bbf",
        documentType: {
          id: 5,
          name: "Business Presentation",
        },
        document: {
          id: 1084,
          displayName: "Test5.csv",
          systemName: "021cf441-7339-4c8f-86fb-6e8f188b3bbf.csv",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001152\\021cf441-7339-4c8f-86fb-6e8f188b3bbf.csv",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-05-04T19:02:24.747",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:02:24.747",
      },
      {
        id: 1131,
        documentGroupId: "d823fa72-aa4d-48f6-a33d-2396b19108e4",
        documentType: {
          id: 6,
          name: "Certificate of Incorporation",
        },
        document: {
          id: 1085,
          displayName: "Test6.jfif",
          systemName: "d823fa72-aa4d-48f6-a33d-2396b19108e4.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001152\\d823fa72-aa4d-48f6-a33d-2396b19108e4.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-05-04T19:02:45.61",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:02:45.61",
      },
      {
        id: 1132,
        documentGroupId: "d823fa72-aa4d-48f6-a33d-2396b19108e4",
        documentType: {
          id: 8,
          name: "Copy of Passport",
        },
        document: {
          id: 1085,
          displayName: "Test6.jfif",
          systemName: "d823fa72-aa4d-48f6-a33d-2396b19108e4.jfif",
          location:
            "D:\\Dipesh\\KYC-Document\\KYC-00001152\\d823fa72-aa4d-48f6-a33d-2396b19108e4.jfif",
          createdBy: "dippanchal02@gmail.com",
          createdOn: "2023-05-04T19:02:45.61",
        },
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:02:45.61",
      },
    ],
    requestReviews: [
      {
        id: 1227,
        department: "Compliance",
        status: "Department Approval",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-05-04T19:00:09.127",
        comments: null,
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:00:09.127",
      },
      {
        id: 1228,
        department: "Treasury",
        status: "Department Approval",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-05-04T19:00:09.127",
        comments: null,
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:00:09.127",
      },
      {
        id: 1229,
        department: "Tax",
        status: "Department Approval",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-05-04T19:00:09.127",
        comments: null,
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:00:09.127",
      },
      {
        id: 1230,
        department: "Legal",
        status: "Department Approval",
        statusBy: "dippanchal02@gmail.com",
        statusOn: "2023-05-04T19:00:09.127",
        comments: null,
        createdBy: "dippanchal02@gmail.com",
        createdOn: "2023-05-04T19:00:09.127",
      },
    ],
  },
  {
    id: 2152,
    referenceRequestId: null,
    kycId: "KYC-00002152",
    requesterName: "smit",
    counterpartyName: "smitten",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-05T10:29:38.247",
    requestContact: {
      id: 2152,
      firstName: "smit ",
      lastName: "patel",
      email: "smit@gmail.com",
      streetAddress: "Vip circle",
      city: "surat",
      state: "Gujarat",
      country: "India",
      postalCode: "395008",
      contact: 9087654678,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 2231,
        department: "Tax",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-05T10:29:38.257",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-05T10:29:38.257",
      },
      {
        id: 2232,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-05T10:29:38.257",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-05T10:29:38.257",
      },
    ],
  },
  {
    id: 2153,
    referenceRequestId: null,
    kycId: "KYC-00002153",
    requesterName: "Priya",
    counterpartyName: "Priya textile ",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-08T11:17:26.18",
    requestContact: {
      id: 2153,
      firstName: "Priya",
      lastName: "Kejriwal",
      email: "priya@gmail.com",
      streetAddress: "Bhestan Road",
      city: "Surat",
      state: "gujarat",
      country: "India",
      postalCode: "395007",
      contact: 7532164890,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 2233,
        department: "Compliance",
        status: "Draft",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T11:17:26.193",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-08T11:17:26.193",
      },
    ],
  },
  {
    id: 2154,
    referenceRequestId: null,
    kycId: "KYC-00002154",
    requesterName: "Pratik",
    counterpartyName: "Monk pvt ltd",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-08T11:26:40.003",
    requestContact: {
      id: 2154,
      firstName: "Pratik",
      lastName: "Dabhi",
      email: "pratik@gmail.com",
      streetAddress: "G-6 road,Sai baba chokadi",
      city: "Gandhinagar",
      state: "Gujarat",
      country: "India",
      postalCode: "395008",
      contact: 8511606601,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 2234,
        department: "Tax",
        status: "Needs More Document",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T12:38:01.047",
        comments: "I need bank documents",
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-08T11:26:40.017",
      },
    ],
  },
  {
    id: 2155,
    referenceRequestId: null,
    kycId: "KYC-00002155",
    requesterName: "Hiral K.",
    counterpartyName: "HK Group Of Comany",
    approvalDate: null,
    createdBy: "kadachhahiral310@gmail.com",
    createdOn: "2023-05-08T11:43:37.3",
    requestContact: {
      id: 2155,
      firstName: "hiral",
      lastName: "kadachha",
      email: "hiral@gmail.com",
      streetAddress: "greencity",
      city: "ranavav",
      state: "gujrat",
      country: "india",
      postalCode: "360570",
      contact: 654378486,
    },
    riskLevel: {
      id: 2,
      name: "Medium",
    },
    status: {
      id: 1,
      name: "Draft",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 2235,
        department: "Tax",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-05-08T12:05:13.14",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-05-08T11:43:37.31",
      },
      {
        id: 2236,
        department: "Legal",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-05-08T12:05:13.14",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-05-08T11:43:37.31",
      },
      {
        id: 2237,
        department: "Compliance",
        status: "Draft",
        statusBy: "kadachhahiral310@gmail.com",
        statusOn: "2023-05-08T12:05:13.14",
        comments: null,
        createdBy: "kadachhahiral310@gmail.com",
        createdOn: "2023-05-08T12:05:13.14",
      },
    ],
  },
  {
    id: 2156,
    referenceRequestId: null,
    kycId: "KYC-00002156",
    requesterName: "Meet",
    counterpartyName: "Meet Agro plant",
    approvalDate: null,
    createdBy: "shalinkikaganeshwala15@gmail.com",
    createdOn: "2023-05-08T12:35:47.85",
    requestContact: {
      id: 2156,
      firstName: "Meet",
      lastName: "Sheta",
      email: "meetsheta@gmail.com",
      streetAddress: "Katargam road",
      city: "surat",
      state: "gujarat",
      country: "India",
      postalCode: "395008",
      contact: 6549873210,
    },
    riskLevel: {
      id: 3,
      name: "Low",
    },
    status: {
      id: 2,
      name: "Department Approval",
    },
    requestDocuments: [],
    requestReviews: [
      {
        id: 2238,
        department: "Legal",
        status: "Department Approval",
        statusBy: "shalinkikaganeshwala15@gmail.com",
        statusOn: "2023-05-08T12:35:47.857",
        comments: null,
        createdBy: "shalinkikaganeshwala15@gmail.com",
        createdOn: "2023-05-08T12:35:47.857",
      },
    ],
  },
];
const filterOut = data.filter((values) => {
  return values.requestReviews.some(
    (values1) => values1.status === "Needs More Document"
  );
});
const finalFilter = filterOut.map((values) => {
  return {
    ...values,
    requestReviews: values.requestReviews.filter(
      (values1) => values1.status === "Needs More Document"
    ),
  };
});
console.log(filterOut, "filterout");
console.log(finalFilter, "finalFilter");
