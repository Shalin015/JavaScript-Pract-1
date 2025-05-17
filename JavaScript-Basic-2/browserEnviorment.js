// DOM (Document Object Model)
// setInterval(()=>{
//         document.body.style.background = 'blue'; //<body style="background : 'blue'">
//         setTimeout(()=>{
//             document.body.style.background ='red'; //<body style="background : 'red'">
//         },500);
//         setTimeout(()=>{
//             document.body.style.background ='yellow'; //<body style="background : 'yellow'">
//         },1000);
// },1500)

// BOM (Browser Object Model)
alert(location.href); // it will display loaction 
if(confirm("Go to hell")) // if you give okay in alert it will go inside or else ignore
{
    location.href = "https://www.google.com"; // if click on okay it will go to this link
}