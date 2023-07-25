let name="ramNAtH"
let firstLetter = name.slice(0,1);
let FirstLetterCapital = firstLetter.toUpperCase()
let remainingLetter = name.slice(1,name.length)
let remainingWords = remainingLetter.toLowerCase()
let FullLetter = FirstLetterCapital + remainingWords
console.log(FullLetter);