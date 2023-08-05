
const p = document.querySelector("#para");
const s = document.querySelector("#span");
const b = document.querySelector("#btn");

// if (b.innerHTML === "Less") {
//   b.addEventListener("click", () => {
//     s.style.display = "none";
//     b.innerHTML = "More";
//   });
// }else if(b.innerHTML === "More"){
//   b.addEventListener("click", () => {
//     s.style.display = "block";
//     b.innerHTML = "Less";
//   });
// }


const content = () =>{
    b.addEventListener("click", () => {
           if(b.innerHTML === "Less"){
            s.style.display = "none";
            b.innerHTML = "More";
           }
           else{
            s.style.display = "inline";
            b.innerHTML = "Less";
           }
          })
}

content()
