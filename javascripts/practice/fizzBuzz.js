// let value=[];
// let count = 1;

// while (count<=100) {
//     if (count%3==0 &&count%5) {
//         console.log("fizzbuzz");
//     }
//     else if( count%3==0){
//         console.log("fizz");
//     }
//     else if(count%5==0){
//         console.log("buzz");
//     }

//     count++
//     console.log(value.push(count));
// }

// function FIZZBUZZ(number) {
//     let value = []
//     let count =1;
//     while (count<=number) {
//         if (count%3==0 && count%5==0) {
//             console.log("fizzbuzz");
//         }
//         else if(count%3==0){
//             console.log("fizz");
//         }
//         else if(count%5==0){
//             console.log("buzz");
//         }
//         count++
//         console.log(value.push(count));
//     }
// }
// let Counting = FIZZBUZZ(1000)

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}