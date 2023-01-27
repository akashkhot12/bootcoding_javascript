let outputScreen =document.getElementById("input");

function display(num){
    outputScreen.value += num;
}

function cal(){
    try{
        outputScreen.value =eval(outputScreen.value);
    }
    catch(error){
        alert("Invalid ");
    }  
}

function clr(){
    outputScreen.value=" ";
}

function back(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}