const array = [
  { firstName: "Johan", lastName: "Doe", age: 34 },
  { firstName: "Michael", lastName: "Scott", age: 45 },
  { firstName: "Bill", lastName: "Gates", age: 64 },
];
function filterValues(array,key,value){
    const data=array.filter((values)=>values[key]===value)
    return data;
}
console.log(filterValues(array,"firstName","Johan"))
