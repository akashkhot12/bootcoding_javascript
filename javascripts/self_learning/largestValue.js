// let a=3 ;
// let b =6;
// let c = 5;
// let largest
// if (a>b && a>c) {
//    largest = a + " a is greter"
// }
// else if(b>a && b>c){
//     largest = b+ " b is greter"
// }
// else{
//     largest = c + " c is greter"
// }

// console.log(largest)


let largest
function largestValue(a,b,c){
    if (a>b && a>c) {
           largest = a + " a is greter"
        }
        else if(b>a && b>c){
            largest = b+ " b is greter"
        }
        else{
            largest = c + " c is greter"
        }
        console.log(largest);
}

let g1 = largestValue(1,2,3)
