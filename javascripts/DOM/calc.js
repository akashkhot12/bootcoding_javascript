let ipt = document.querySelector('#value');
let aa = document.querySelector('#ans');
let temp = 0;

let add = document.querySelector("#adding");
let sub = document.querySelector("#sub");
const add_sub = () => {
  let v = parseInt(ipt.value) ;
  console.log(v);
  let sum = 0;
  add.addEventListener('click',()=>{
    sum=sum+v;
    console.log(sum);
  })
}
add_sub()