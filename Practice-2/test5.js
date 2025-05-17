// Input: [{name: 'Alice', salary: 50000, department: 'sales'}, {name: 'Bob', salary: 60000, department: 'sales'}, {name: 'Charlie', salary: 70000, department: 'marketing'}, {name: 'Dave', salary: 80000, department: 'marketing'}]
// Output: [{department: 'sales', averageSalary: 55000}, {department: 'marketing', averageSalary: 75000}]

"use strict";

const arr = [
  { name: "Alice", salary: 50000, department: "sales" },
  { name: "Bob", salary: 60000, department: "sales" },
  { name: "Charlie", salary: 70000, department: "marketing" },
  { name: "Dave", salary: 80000, department: "marketing" },
];

// const avg=arr.map((values)=>{
//     let salary=0
//     arr.filter((values1)=>{
//         if(values.department===values1.department)
//         {
//             return {department:values.department,salary:salary+values.salary}
//         }
//     })
//     return salary
// })
// console.log(avg)

const arr2=arr.reduce((prev,curr)=>{
    let salary=0
    if(!prev[curr.department])
    {
        prev[curr.department]={department:curr.department,averageSalary:0}
    }

    // prev[curr.department].push(curr)
    // const arr3=arr.filter((values)=>curr.department===values.department)
    return prev;
},[])
console.log(arr2)