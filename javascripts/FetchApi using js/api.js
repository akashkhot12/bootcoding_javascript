let api = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/")
api.then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res);
    word.innerHtml=res,json()
}).catch(error => console.log(error));
