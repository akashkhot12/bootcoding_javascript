let api = fetch("https://goweather.herokuapp.com//weather/Ny")

api.then((value1)=>{
    return value1.json()
}),then((value2)=>{
    console.log(value2);
})