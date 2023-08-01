// function findRoot(number){
//     for (let index = 0; index*index <= number; index++) {
//        if (index*index ===number) {
//         return index;
//        }
//     }
// }

// console.log(findRoot(16));

// palindrome number ;

// function palindrome(){

// }

const palindrome = (n) => {

  let sum = 0,rem , temp = n ; 
  while (n != 0) {
    rem = n % 10;
    sum = (sum * 10) + rem;
    n = Math.floor(n / 10);
  }
  if (temp == sum) {
    return "its palindrom";
  } else {
    return "its not a palindrom";
  }
};
console.log(palindrome(121));