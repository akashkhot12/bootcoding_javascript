let api = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")

api.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})