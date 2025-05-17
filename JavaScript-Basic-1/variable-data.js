let menu={
    width: 200,
    height: 300,
    title: "My menu"
};
multiplynumaric(menu);
function multiplynumaric(menu)
{
    for(let key in menu)
    {
        if(typeof menu[key]=='number')
        {
            menu[key]*=2;
        }
    }  
}
alert(`width : ${menu.width} , height : ${menu.height}`);