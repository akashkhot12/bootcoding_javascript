let a=[1,2,3,4,40,55,101,-1]
let max=a[0];
for(let i=0;i<a.length;i++)
{
    if(max<a[i])
    {
        max=a[i];
    }
}
console.log(max);
