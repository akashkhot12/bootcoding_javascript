let btn = document.getElementsByTagName("toggle");
let para= document.getElementById("para");



function clickMe(){
    if(para.style.display === "none")
    {
      para.style.display= "block";
      btn.innerHTML = "hide"
  
    }
    else{
      para.style.display = "none"
      btn.innerHTML = "show"
    }
  }