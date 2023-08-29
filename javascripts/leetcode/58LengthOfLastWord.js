// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// let arr = ["Hello","World"]

// // for (let i = arr.length - 1; i >= 0; i--){
// // console.log(arr[i]);
// // }
// let name = arr[arr.length-1] ; 
// console.log(name);
// let count = 0 ; 
// for(let i=0 ; i<name.length ; i++){
//     count++ ; 
// }

// console.log(count);



// let sentence  = "hello is the world "
// let method = sentence.split(" ")
// // console.log(method); converted into array
// method = method[method.length-1];
// // console.log(method); print the last value
// let count = 0;
// for (let index = 0; index < method.length; index++) {
//     count++;
// }
// console.log(count);



var lengthOfLastWord = function(s) {
let method = s.split(" ")
method = method[method.length-1];
let count = 0;
for (let index = 0; index < method.length; index++) {
    count++;
}
console.log(count);
};

let value = lengthOfLastWord("hello world");