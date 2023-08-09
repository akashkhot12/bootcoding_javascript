let num = [1, 2, 2, 3, 4, 5];
let array = [];
// let rem = []
// for (let index = 0; index < num.length; index++) {
//    if (num[index] !=5) {
//     array.push(num[index])
//    }
//   //  else{
//   //   array.push(num[index])
//   //  }
// }
// console.log(array);

// var removeElement = function (nums, val) {
//   array = [];
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] != val) {
//       array.push(nums[index]);
//       // opt = array.length;
//     }
//   }
//   return array;
// };
// console.log(removeElement([3,2,2,3], 3));


function removeElement(nums, val){
  let j = 0;
  for( let n of nums )if( n !== val ) nums[j++] = n
  return j
};
console.log(removeElement([3,2,2,3], 3));