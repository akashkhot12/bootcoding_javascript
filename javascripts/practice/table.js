// for (let index = 1; index < 10; index++) {
//     let multiply=index*2
//    console.log(index+" * 2 = "+ multiply);
// }

function table(number,digit){
    for (let index = 1; index <=digit; index++) {
        let multiply = number*index;
        console.log(number + " * "+index+ " = " +multiply);
    }
}
let calculate = table(19,20)


