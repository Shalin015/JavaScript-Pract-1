function prime(p)
{
    for(let i=2;i<p;i++)
    {
        if(p%i==0)
        {
            flag=false;
            break;
        }
    }
    if(flag==false)
    {
        alert("is not prime number");
    }
    else
    {
        alert("is prime number")
    }
}
let a=10,flag=true;
prime(a);