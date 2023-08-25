let value = document.getElementById("value");
let add = document.getElementById("Add");
let sub = document.getElementById("Subtract");
let colors = document.querySelector(".color");

let count = 0 ; 


let addition = ()=>{
    add.addEventListener("click",()=>{
        count = count+1;
        value.innerHTML = count
    })
}
addition();

let 

