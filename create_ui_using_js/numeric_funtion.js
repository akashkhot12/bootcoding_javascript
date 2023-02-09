
// let textfield = document.querySelector("ipt").valueAsNumber;

function clr(){
    
    let textfield = document.getElementById("ipt");
    textfield.value =' ';
    document.getElementById('result').innerHTML = "clear succesfully !"
    
}

function del(){
    let textfield = document.getElementById("ipt");
    textfield.value = textfield.value.slice(0,-1);
}





function even(){
    let textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var num = parseInt(textfield, 10);
    if(num% 2==0){
        console.log(textfield);
        document.getElementById('result').innerHTML = "this value "+textfield+ " is even number";
    }
    else{
        console.log(textfield);
        document.getElementById('result').innerHTML = "this value "+textfield+ " is NOT even number";
    }
}




function odd(){
    let textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var num = parseInt(textfield, 10);
    if(num% 2!=0){
        console.log(textfield);
        document.getElementById('result').innerHTML = "this value "+textfield+ " is Odd number";
    }
    else{
        console.log(textfield);
        document.getElementById('result').innerHTML="this value "+textfield+" is not odd number"
    }
}






function prime(){
    let textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var num = parseInt(textfield, 10);
  if(num ===1){
    document.getElementById('result').innerHTML = "this value "+textfield+ " is neither a prime nor composite "
  }
  else if(num>1) {
    if (num % 2 ==0) {
        document.getElementById('result').innerHTML = "this value "+textfield+ " is not a prime number  "   
    }
    else{
        document.getElementById('result').innerHTML = "this value "+textfield+ " is a prime number" 
    }
     
    
  }
}




function palin(){
    var textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var rem,temp,nm=0;
    textfield=parseInt(textfield);
    temp=textfield;
    while(textfield>0)
    {
        rem=textfield % 10;
        textfield = parseInt(textfield/10);
        nm = nm * 10 + rem;
    }
    if (nm==temp) {
        console.log(nm);
        document.getElementById('result').innerHTML = "this value "+nm+ " is a palindrome number" 

    }
    else{
        console.log(nm);
        document.getElementById('result').innerHTML = "this value "+nm+ " is a not palindrome number" 

    }
}


function armstrong(){
    var textfield = document.getElementById("ipt").value;
    console.log(typeof textfield);
    textfield=parseInt(textfield);
    let n = textfield.length;
    let sum = 0;
    let i = 0;
    while(i<n){
        let digit = textfield[i]-'0';
        sum = (sum + Math.pow(digit,n));
        i++;
    }
    if(sum == textfield) 
{
    console.log(textfield);
    document.getElementById('result').innerHTML = "This value "+textfield+ " is a not Armstrong number"
}
else{
    console.log(textfield );
    document.getElementById('result').innerHTML = "This value "+textfield+ " is a  Armstrong number"
}
}


function sfo(){
    let textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var num = parseInt(textfield, 10);
    console.log(textfield);
    document.getElementById('result').innerHTML = "sum of odd value is invalid please try in array !"

}


function sfe(){
    let textfield = document.getElementById("ipt").value;
    console.log(typeof textfield)
    var num = parseInt(textfield, 10);
    console.log(textfield);
    document.getElementById('result').innerHTML = "sum of even value is invalid please try in array !"

}

















