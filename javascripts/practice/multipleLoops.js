let array = [1,2,3,4,5]

// for loop ;

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log("====================");

// for each loop ;

array.forEach(function(val){
    console.log(val);
   
})
console.log("====================");
// for of loop
for(let akash of array){
    console.log(akash);
 
} 
console.log("====================");
// for in loop

for(let akash in array){
    console.log(akash);
    
}