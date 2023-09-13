let a = 0;

let waiting = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(20)
    },500)
})

waiting.then((data)=>{
    console.log(a+data);
})