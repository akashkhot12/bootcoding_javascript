let array=[100,200,50,60,889,55]
// [50,55,60,100,200,889]
let min;
// for(let i=0;i<array.length;i++)
// {
//     for(let j=i+1;j<array.length;j++)
//     {
//         if(array[i]>array[j])
//         {
//             min=array[i];
//             array[i]=array[j];
//             array[j]=min;

//         }
//     }
// }
array.sort();
console.log(array);