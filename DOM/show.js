let lessData = document.getElementById("less");
let moreData = document.getElementById("more");
let btn  = document.getElementById("btn");

 function btnState(){
    btn.addEventListener("click",()=>{
        if(btn.innerHTML == "more"){
            btn.innerHTML = "less";
            moreData.style.display = "inline"
        }
        else if (btn.innerHTML = "less"){
            btn.innerHTML = "more";
            moreData.style.display = "none"
        }
    })
}

btnState();