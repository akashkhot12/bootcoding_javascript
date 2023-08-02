// let string = "";
// for (let row = 1; row <=4; row++) {
//    for(let col =1 ; col<=row;col++){
//     string+="*"
//    }
//    string+="\n"
// }
// console.log(string);



// // user input

// const pattern = (n)=>{
//     let string = ""
//     for(let row = 1 ; row<=n;row++){
//         for(let col=1 ; col<=row;col++){
//             string+="*"
//         }
//         string+="\n"
//     }
//     return string;
// }
// console.log(pattern(70));


// let star = "";
// for(let row = 1;row<=3;row++){
//     for(let space =1;space<=3-row;space++){
//         star+=" "
//     }
//     for(let col=1;col<=row;col++){
//         star+="*"
//     }
//     star+="\n";
// }
// console.log(star);


const pattern=(n)=>{
    star=""
    for(let row =1;row<=n;row++){
        for(let space =1;space<=n-row;space++){
            star+=" "
        }
        for(let col=1;col<=row;col++){
            star+="*"
        }
        star+="\n"
    }
    return star;
}
console.log(pattern(30));