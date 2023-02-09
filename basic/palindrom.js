
palindrome();

function palindrome(){
    for(i=2;i<=2000;i++){
        let isprime = palindrome(i);
    }
    if(isprime){
        console.log(i);
        document.getElementById('result').innerHTML = i;

    }
 

}


function palindrome( number){
    let r=0 ;
    let original=number;
    while (number != 0) {
         r = r * 10 + number % 10;
         number = number/10
    }
    if(org==r){
        return true;
    }
    else{
        return false;
    }
}

