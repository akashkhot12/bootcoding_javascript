// print even elements from array given number using user input.
function evenElements(arr) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            console.log("this is even number" + " " + arr[index]);
        }
    }
}
var a1 = evenElements([12, 12, 42, 31, 16, 15]);
a1;
