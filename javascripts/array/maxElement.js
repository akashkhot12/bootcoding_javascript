let a = [1,2,33,4,0]
let maxEle=a[0];
for (let index = 1; index < a.length; index++) {
    if(maxEle<a[index]){
        maxEle=a[index]
    } 
}
console.log("the maximum value of array => " +maxEle);

// min Value

let minEle = a[0];
for (let index = 1; index < a.length; index++) {
    if (minEle>a[index]) {
        minEle = a[index]
    }
    
}

console.log("the minimum value of array => "+minEle);