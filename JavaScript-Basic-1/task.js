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
//         }o
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
// let obj = array.filter(item => item.code > 20);
// console.log(obj);
// let obj2 = obj.reduce((prev,current) => {
//     let {address} = current;
//     if(!(address.country in prev))
//     {
//         prev[address.country]=[];
//     }
//     prev[address.country].push({current});
//     return prev;
// },{});
// console.log(obj2);



// /* 
// {
//     ES: [
//         {
//             name: 'Max',
//             code: 31,
//             designation: 'Jr. Developer',
//             address: 'Madrid, ES'
//         }
//     ]
// }
// */

// find max date
// let user = ['2015/02/01','2015/02/02','2015/05/03'];
// let max = new Date(0);
// user.find((index)=>{
//     if(max < new Date(index))
//     {
//         max = new Date(index);
//     }
// });
// console.log(`${max.getFullYear()}/${max.getMonth()+1}/${max.getDate()}`);

// given string is anagram or not     
// function anagram(str,str2)
// {
//     this.str=str;
//     this.str2=str2;
// if(str.length === str2.length)
// {
//     let a = str.split('').sort().join('');
//     let b = str.split('').sort().join('');
//     let c=a.localeCompare(b);
//     if(c === 0)
//     {
//         console.log(true);
//     }
//     else
//     {
//         console.log(false);
//     }
// }
// else{
//     console.log(false);
// }
// }
// anagram("army","Mary");

// let arr=["1a","a","2b","b"];
// let arr1= arr.filter((index)=>{
//     let a=[];
//     for(let i in arr)
//     {
//        a = arr[i].split('');
//        console.log(a);
//     }
// });

// let arr = [1,2,3,4,5,6];
// let [c,b] = arr.reverse();
// console.log(c); // 6
// console.log(b); // 5

let arr = [1, 2, [1, 4, [1, [[5, [6]], [4, 5]], [1]], [3, 3, 5]], [6]];
// [1,1,1,1,2,3,3,4,4,5,5,5,6,6]
function arr1(arr) {
    return arr.reduce((a, b) => // a = previous b = current
    {
        if (Array.isArray(b)) { // it will check give value is array or not
            a.push(...arr1(b)); // if in array we have sub array and push only value then use spread 
        }
        else 
        {
            a.push(b); // if it is not array then it will push value in previous
        }
        return a; // for getting value we have to return value
    }, []).sort(); // after getting array we have to sort the array element
}
console.log(arr1(arr)); // call function


const _arr = []  // [1, 2, 3, 4, 5, 6, [7, 8, 9]] arr[6][0] 7
const otherArr = [7, 8, 9];


_arr.push(1);
_arr.push(2, 3);
_arr.push(4, 5, 6);
_arr.push(...otherArr);

// check every tag which start it will close then true or else false
let str="{}<>[])(";
let a = str.split("");
console.log(a);
let count=0;
let count1=0;
for(let item of a)
{
    
    if(item == "{" || item == "[" || item == "<" || item == "(")
    {
        count++;
    }
    else if(item == "}" || item == "]" || item == ">" || item == ")")
    {
        if(!a.length == 0)
        {
            count1++;
        }
    }
} 
if(count === count1)
{
    console.log(true);
}
else
{
    console.log(false);
}