// sum of all given element of array. e.g => [1,2,3,4] => 10

function elementOfArr(arr:any) {
    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        sum=sum+arr[index]
        console.log(sum);
        
    }
    return sum
}
 let b1=elementOfArr([1,2,3,4])
 console.log(b1);
 