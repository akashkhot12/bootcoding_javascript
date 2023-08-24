

function content(){
    document.getElementById("heading").innerHTML = "akash khot"
}

function mOver(obj) {
    obj.innerHTML = "I am here .."
   
}

function mOut(obj) {
    obj.innerHTML = "the mouse is removed"
}

let btn = document.querySelector('.btn');
let heading = document.querySelector('.heading');

btn.addEventListener('click',function(){
    heading.innerHTML = "I am the heading"
})

heading.addEventListener('mouseover',()=>{
    heading.style.fontSize = "100px"
})