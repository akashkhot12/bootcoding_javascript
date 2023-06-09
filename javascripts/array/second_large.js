// function getSecondLargest(nums) {
//     var flarge = 0;
//     var slarge = 0;
//     for (var i = 0; i < nums.length; i++) { 
//             if (flarge < nums[i]) {
//                 slarge = flarge;
//                 flarge = nums[i];
//             } else if (nums[i] > slarge) { 
//                 slarge = nums[i]

//             }
//         }
//         return slarge; 
// }
// console.log(getSecondLargest([77,99,99.5,65,43,96,95])
// );

let a =[1,2,3,4,10,5,9]
let max=0;
let sd_max=0;
for(let i=0;i<a.length;i++)
{
    if (max<a[i])
     {
        
        sd_max=max;
        max=a[i];        
    }
    else(a[i]>sd_max)
    {
        sd_max=a[i];
    }
}
console.log(sd_max);









