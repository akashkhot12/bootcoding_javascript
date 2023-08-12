let items = [];
let Namevalue = document.querySelector("#Name")
const ul = document.getElementById('menu')
function getName(){
    let val = Namevalue.value;
    items.push(val);  
    display();
}
function display() {
    ul.setAttribute('id','theList')
    for (let i = 0; i <=items.length-1; i++) {
        const li = document.getElementById('demo')
        li.innerHTML = items[i];
        ul.appendChild(li)
      }
      cont.appendChild(ul)
}

