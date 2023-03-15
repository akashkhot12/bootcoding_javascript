console.log("hello");


const search = document.querySelector('#search');
const btn = document.querySelector('#click')

btn.addEventListener('click',()=>{
    search = search.value;
});
console.log(search);
