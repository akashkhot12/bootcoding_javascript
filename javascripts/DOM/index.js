const p =document.querySelector('#para')
const s =document.querySelector('#span')
const b =document.querySelector('#btn')

// let getData=()=>{
//     b.addEventListener('click',()=>{
//         if (b.innerHTML==="Less") {
//             s.style.display="none"
//             b.innerHTML = "More"
//         }
//         else{
//             s.style.display="inline"
//             b.innerHTML ="Less"
//         }
//     })
// }
// getData()




// event.js

let para  = document.querySelector('#change');

// para.addEventListener('click',()=>{
//     para.style.color = "red";
//     para.style.fontSize = "60px";
// })

para.addEventListener('mouseover',()=>{
    para.style.color = "red";
})

para.addEventListener('mouseout',()=>{
    para.style.color = "black";
})

