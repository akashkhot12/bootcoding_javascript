function whosPaying(names) {
    let numberOfPeople=names.length
    let RandomName = Math.floor(Math.random()*numberOfPeople)
    let paying = names[RandomName]
   console.log(paying + " is going to buy lunch today!");
}

let Message = whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"])