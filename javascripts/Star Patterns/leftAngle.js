// let string = "";
// for (let row = 1; row <=4; row++) {
//    for(let col =1 ; col<=row;col++){
//     string+="*"
//    }
//    string+="\n"
// }
// console.log(string);

// for(var i=1; i<=4; i++){
//     console.log("* ".repeat(i));
//  }

// // // user input

const pattern = (n)=>{
    let string = ""
    for(let row = 1 ; row<=n;row++){
        for(let col=1 ; col<=row;col++){
            string+="*"
        }
        string+="\n"
    }
    return string;
}
console.log(pattern(70));


