let a = 10;
let b =0;

let waitingTime = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },1000)
})

waitingTime.then((data)=>{
    console.log(a+b+data);
})