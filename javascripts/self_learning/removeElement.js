// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// function removeElement(nums: number[], val: number): number {
//       if (val===nums[i]) {
//       }
// };
// let z1=removeElement([3,2,2,3],3);
var nums = [3, 2, 2, 3];
var number = 3;
for (var i = 0; i <= nums.length; i++) {
    if (number == nums[i]) {
        nums.splice(i, 1);
        i--;
    }
    console.log(nums.length);
}
