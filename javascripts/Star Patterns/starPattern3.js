let str ="";
// let str1="";
// for(let row = 1;row<=4;row++){
//     for(let spc=1;spc<=4-row;spc++){
//         str+=" ";
//     }
//     for(let col=1;col<=row;col++){
//         str+="*"
//     }
//     str+="\n"
// }
for(let row1=1;row1<=4;row1++){
    for(let spc1=1;spc1<=row1;spc1++){
        str+=" ";
    }
    for(let col=1;col<=4-row1;col++){
        str+="*"
    }
    str+="\n"
}
console.log(str);


// str="";
// for(let row=1;row<=4;row++){
//     for(let sp=1;sp>=4-row;sp--){
//         str+="-"
//     }
//     // for(let col=2;col<=row;row++){
//     //     str+="*"
//     // }
//     str+="\n"
// }
// console.log(str);


