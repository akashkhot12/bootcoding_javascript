// 0 1 1 2 3 5 

// let a=0;
// let b=1; 
// temp = 0;
// for (let index = 0; index <=10; index++) {
//     temp = a + b;
//     a=b;
//     b=temp;
//     console.log(temp);
// }


function findFibo(value){
    let a =0;
    let b =1;
    temp = 0 ;
    for (let index = 0; index <=value; index++) {   
    temp = a + b;
    a=b;
    b=temp;
    console.log(temp);
}
}
findFibo(5)