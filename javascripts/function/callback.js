// const func1 = (a,b) => {
//         return a+b;
// }

// const func2 = (name,callback) => {
//     return callback;
// };


// console.log(func2("sweetie", func1(1,2)));

 function audi(alpha,n)
{

 console.log(alpha,n); 
 return alpha,n;




}

function grss(name,callback){
    return name,callback;
}
console.log(grss("aaky",audi("akash",3)));




let array=[1,2,3,4,5];
let array2=array.concat();
let array3=array.slice(0);
let array4 = [...array]
console.log(array3);



const  myarray = ['array1','array2','array3','array4'];

const [myarray1,myarray2,...myarray3] = myarray
console.log(myarray1);
console.log(myarray2);
console.log(myarray3);