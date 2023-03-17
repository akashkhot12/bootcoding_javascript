
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


// findindex methode
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) 



//some: Check if some of the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true
// const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
// console.log(areAllStr) // false


//sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.
//Sorting string values
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted



// Sorting Numeric values
// As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.
// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]


//We can use default value in case the value of array for that index is undefined:
