function three_para(prob,price,pay){

    
    if ((prob * price) > pay) {
       
        return true
    }
    else{
      
        return false;
    }

}
let result =three_para(1,80,9)
console.log("The final value is "+result+".");