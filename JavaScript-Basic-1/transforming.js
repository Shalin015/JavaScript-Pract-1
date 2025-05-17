"use strict";
function salary(salaries)
{
    let sum=0;
    for(let value of Object.values(salaries))
    {
        sum = sum + value;
    }
    return sum;
}
let salaries = {
    Max : 25000,
    Zen : 30000,
    Johan : 33000
};
console.log(salary(salaries));