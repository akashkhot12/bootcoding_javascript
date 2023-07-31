let Api = fetch("https://official-joke-api.appspot.com/random_joke")


Api.then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res);
})



