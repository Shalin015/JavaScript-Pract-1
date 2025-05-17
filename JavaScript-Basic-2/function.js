const data = [
  { name: "James T. Kirk", series: ["Star Trek", "Silent Sea", "Godzilla"] },
  {
    name: "Spock",
    series: ["Star Trek", "Godzilla", "Star Trek: The Next Generation"]
  },
  {
    name: "Jean-Luc Picard",
    series: ["Star Trek: The Next Generation", "LockWood & Co."]
  },
  {
    name: "Worf",
    series: [
      "Star Trek: The Next Generation",
      "Star Trek: Deep Space Nine",
      "Silent Sea"
    ]
  },
  {
    name: "Jean-Luc Roval",
    series: ["Silent Sea", "LockWood & Co.", "Godzilla"]
  }
];

// getActorName(data,'seriesName')

// O/P
// - cretae a function which returns all the actors who are there in given series

// function getActorName(data,seriesName)
// {
//     let result =[];
//     this.data=data;
//     this.seriesName=seriesName;
//     let a = data.filter((values)=>{
//         if(values.series.includes(seriesName))
//         {
//             result.push(values)
//             return result
//         }
//     })
//     console.log(a);
// }
// getActorName(data,"Silent Sea")

let str = "12321";
let str1= str.split("");
let str2 = str1.reverse();
str2=str2.join("");
if(str===str2)
{
    console.log(true);
}
else
{
    console.log(false);
}
