var addTwoNumbers = function(l1, l2) {
l1 = l1.reverse();
l1 = l1.join('');
l1 = parseInt(l1)
l2 = l2.reverse();
l2 = l2.join('');
l2 = parseInt(l2)

let res = l1+l2;
// console.log(res); 807;
let arrayOfDigits = Array.from(String(res), Number);
arrayOfDigits = arrayOfDigits.reverse();
return arrayOfDigits;
}
console.log(addTwoNumbers([2,4,3],[5,6,4]));


// let l1 = [2,4,3]
// let l2 = [5,6,4]

// l1 = l1.reverse();
// l1 = l1.join('');
// l1 = parseInt(l1)
// l2 = l2.reverse();
// l2 = l2.join('');
// l2 = parseInt(l2)

// let res = l1+l2;
// // console.log(res); 807;
// let arrayOfDigits = Array.from(String(res), Number);
// arrayOfDigits = arrayOfDigits.reverse();
// console.log(arrayOfDigits);







