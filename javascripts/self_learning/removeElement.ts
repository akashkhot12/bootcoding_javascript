// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]



// function removeElement(nums: number[], val: number): number {
//       if (val===nums[i]) {
            
//       }
// };

// let z1=removeElement([3,2,2,3],3);



let nu = [3,2,2,3];
let numb = 3;
 for(let i=0;i<=nu.length;i++){
      if (numb==nu[i]) {
          nu.splice(i,1) ;
          i-- 
      }
  console.log(nu.length);
 }
