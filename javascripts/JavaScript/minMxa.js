let value = 0
arr = [1,3,5,7,9]
for(let i = 0 ; i<arr.length-1;i++){
     value = arr[i]+value;  
}
console.log(value); 

let value2 = 0
for(let j = 1 ; j<arr.length;j++){
     value2 = value2+arr[j];
}
console.log(value2);