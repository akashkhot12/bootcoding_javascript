// var val = 5;
// var fact = 1 ;
// for(let i =1; i<=val;i++){
//     fact=fact*i;
//     console.log(fact);
// }

function getValue(number){
    fact = 1;
        if (number==0) {
            console.log("the factorial number is 1");
        }
        else if(number<0){
            console.log("the negative number is not valid !");
        }
        else{
             for(let index =1; index<=number;index++){
             fact=fact*index;
             console.log(fact);
             }
    }
}

  let factorial = getValue(-1)

