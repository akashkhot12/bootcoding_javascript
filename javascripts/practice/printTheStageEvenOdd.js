let array = [9,8,6,10,11]
let output = []

// for each  

// array.forEach(element => {
//     if(element%2==0){
//         output.push("even")
//     }
//     else{
//         output.push("Odd")
//     }
// });
// console.log(output);



// for of 

for (const item of array) {
    if(item%2==0){
                output.push("even")
            }
            else{
                output.push("Odd")
            }
        };
        console.log(output);