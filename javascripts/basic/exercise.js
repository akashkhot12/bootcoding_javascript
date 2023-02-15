let btn = document.getElementsByTagName("toggle");
// let para= document.getElementById("para");
let ptg = document.getElementsByTagName("p");



// btn.addEventListener("click",function(){
//       para.style.color="red";
//       // para.style.color="green";
// })


function clickMe(){ 
  if(ptg.style.display === "none")
  {
    ptg.style.display= "block";
    btn.innerHTML = "hide"

  }
  else{
    ptg.style.display = "none"
    btn.innerHTML = "show"
  }
}

function tag(){
  // ptg[i].style.border = ""
  
   for (let i = 0;i < ptg.length; i++){
      if(ptg[i].style.border === "2px solid green"){
        ptg[i].style.border = "none"
      }
      else{
        ptg[i].style.border = "2px solid green"
      }
   }
}





