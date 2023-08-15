var searchInsert = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index]!=target) {
            console.log(1);
        } 
        else if (nums[index]===target) {
            console.log(index);
        }
    }
}

console.log(searchInsert([1,3,5,6],5));

// let nums = [1,3,5,6] 
// let target = 2;
// for (let index = 0; index < nums.length; index++) {
//     if (nums[index]===target) {
//         console.log(index);
//     } 
// }
// console.log(1);


