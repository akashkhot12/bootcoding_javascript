// // 1) print all the element of array
// function element (n){
//     for(let i=0 ; i<n.length;i++){
//         console.log(n[i]);
//     }
// }
// let ele1=element([10,20,40])


// 2) print all the element of string array with the index position 
// function element(arr) {
//     for(let i=0;i<arr.length;i++){
//         let print =i + " " +arr[i]
//         console.log(print);
//     } 
// }
// let ele1=element(["akash","khot"])


// // print the even number 
// // function evenOdd(number){
// //     if(number%2==0){
// //         console.log("this is even number");
// //     }
// //     else{
// //         console.log("this is Odd number");
// //     }
// // }
// // let e1=evenOdd(5)



// // print the element which is divisble by 3
// function divisible(number){
//     if(number%3==0){
//         console.log("this number is divisible by 3");
//     }
//     else{
//         console.log("is not valid number");
//     }
// }
// let e1=divisible(9)





// // print the element which is divisible by 3 & 5 and which is not ,
// // using two blank array
// let array1=[]
// let array2 =[]
// function dividedNumber(num){
// for(let i=0 ; i<num;i++){
//    if(num[i]%3==0 || num[i]%5==0){
//     array1.push(num[i])
//      }
//      else{
//        array2.push(num[i])
//      }
// }
// }
// let g1=dividedNumber(100)
// console.log(array1);



// print reverse element of an Array
//  function reverse(n) {
//     for (let index =n; index >=1; index--) {
//         console.log(index);
//     }
//  }
//  let rev = reverse(10);


//  print given number is present or not in an array
// Array=[1,2,3,4,5,6,7,8,9,10]
//     function PresentNot(number){
//         if (Array.includes(number)) {
//             console.log("this value is present");
//         }
//         else{
//             console.log("not");
//         }
//     }
//     let a1=PresentNot(10)


// find the max element
//  let arr = [10,2,30,4,5]
//  let max=arr[0] 
// for (let index = 0; index < arr.length; index++) {
//    if(arr[index]<max){
//     max =arr[index]
//    }
// }
// console.log(max);



function findMax(n){
   let max=n[0]
   for (let index = 0; index < n.length; index++) {
         if(n[index]<max){
          max =n[index]
         }
}
console.log(max);
}
let array=findMax([1,2,3,4,5])
