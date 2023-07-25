// a=5 b=6 result a=6 b=5
let a =5;
let b =6;
let temp;
temp=a;
a=b;
b=temp;
console.log(a,b);


a= a+b;   
b=a-b; 
a=a-b;

console.log(a,b);


function swaping(a,b) {
temp=a;
a=b;
b=temp; 
console.log(a,b);
}
let a1 = swaping(11,6);

