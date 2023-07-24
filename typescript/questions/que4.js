// sum of all given element of array. e.g => [1,2,3,4] => 10
function elementOfArr(arr) {
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
        console.log(sum);
    }
    return sum;
}
var b1 = elementOfArr([1, 2, 3, 4]);
console.log(b1);
