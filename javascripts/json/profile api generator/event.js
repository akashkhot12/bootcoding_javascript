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


let countrie=['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

const allcountry = countrie;
function countriesFirstFiveLetters(){
let   a= allcountry.map(countrie);
    a.toUpperCase().slice(0,5)
    console.log(a) ;

}

countriesFirstFiveLetters();

