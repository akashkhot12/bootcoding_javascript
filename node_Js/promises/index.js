let a  = 20 ;
let b = 20;

let watingtime = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

watingtime.then((data)=>{
    console.log(a+b+data);
})