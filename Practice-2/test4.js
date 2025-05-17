const array = [
    { firstName: "Johan", lastName: "Doe", age: 34 },
    { firstName: "Michael", lastName: "Scott", age: 45 },
    { firstName: "Bill", lastName: "Gates", age: 64 },
  ];

const manipulate=array.reduce((prev,curr)=>{
    if(prev["0-9"])
    {
        prev["0-9"]=[];
    }
    else if(prev["10-19"])
    {
        prev["10-19"]=[]
    }
    else if(prev["20-29"])
    {
        prev["20-29"]=[]
    }
    else if( prev["30-39"])
    {
        prev["30-39"]=[]
    }
    else if(prev["40-49"])
    {
        prev["40-49"]=[]
    }
    else if(prev["50-59"])
    {
        prev["50-59"]=[]
    }
    else if(prev["60-69"])
    {
        prev["60-69"]=[]
    }
    else if(prev["70-79"])
    {
        prev["70-79"]=[]
    }
    else if(prev["80-89"])
    {
        prev["80-89"]=[]
    }
    else if(prev["90-99"])
    {
        prev["90-99"]=[]
    }
    if(curr.age<9 && curr.age>0)
    {
        prev["o-9"].push(curr)
    }
    else if(curr.age<19 && curr.age>10)
    {
        prev["10-19"].push(curr)
    }
    else if(curr.age<29 && curr.age>20)
    {
        prev["20-29"].push(curr)

    }else if(curr.age<39 && curr.age>30)
    {  
        prev["30-39"].push(curr)

    }else if(curr.age<49 && curr.age>40)
    {
        
        prev["40-49"].push(curr)

    }else if(curr.age<59 && curr.age>50)
    {
        
        prev["50-59"].push(curr)

    }else if(curr.age<69 && curr.age>60)
    {
        
        prev["60-69"].push(curr)

    }else if(curr.age<79 && curr.age>70)
    {
        
        prev["70-79"].push(curr)

    }else if(curr.age<89 && curr.age>80)
    {
        
        prev["80-89"].push(curr)

    }else if(curr.age<99 && curr.age>90)
    {
        
        prev["90-99"].push(curr)

    }
    return prev;
},{})
console.log(manipulate)