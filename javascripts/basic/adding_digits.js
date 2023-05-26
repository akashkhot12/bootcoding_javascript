// let num= 333;
//   let res=0,rem;
//    while (num!=0) {
//     rem=num%10;
//     res+=rem;
//     num = Math.floor(num/10);
//    }
//    console.log(res);

let arr=[2,15,19,3]
// o/p=21
let res=0,rem;
for(let i=0;i<arr.length;i++){
    let n = arr[i];
    while(n!=0){
        rem=n%10;
        res+=rem;
        n=Math.floor(n/10)
    }
}
console.log(res);