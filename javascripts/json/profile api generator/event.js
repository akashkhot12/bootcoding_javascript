console.log("hello");


// const search = document.querySelector('#search');
// const btn = document.querySelector('#click')

// btn.addEventListener('click',()=>{
//     search = search.value;
// });
// console.log(search);



// const countries=['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 5)
// )

// console.log(countriesFirstThreeLetters);


// console.log(countries.slice(0,5));


// ussing filter method
// var ages=[18,19,20,22,50]

// var b=ages.filter(younger);
// console.log(b);

// function younger(age){
//     return age<=22;
// }

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) 

