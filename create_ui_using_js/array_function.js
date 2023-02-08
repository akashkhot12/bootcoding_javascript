function clr(){
    
    let textfield = document.getElementById("ipt");
    textfield.value =' ';
    
}

function del(){
    let textfield = document.getElementById("ipt");
    textfield.value = textfield.value.slice(0,-1);
}


var textfield = document.getElementsByName('ipt[]');