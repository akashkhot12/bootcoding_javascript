let a=[1,2,3,4,40,55,101,-1]
let min=a[0];
for(let i=0;i<a.length;i++)
{
    if(min>a[i])
    {
        min=a[i];
    }
}
console.log(min);
