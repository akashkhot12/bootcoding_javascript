let items = [];

// function display(value) {
//     for (const value of items) {
//         document.getElementById("demo").innerHTML = `<li>${value}</li>`
//     }
// }
// function getName(){
//     Namevalue = document.querySelector("#Name").value;
//     items.push(Namevalue);  
//     return items;
// }

// let result = getName();
// display(result)

function myDisplayer(value) {
    document.getElementById("demo").innerHTML = value;
  }
  
  function getName() {
   let Namevalue = document.querySelector("#Name").value;
        items.push(Namevalue);  
        return items;
  }
  
  let result = getName();
  myDisplayer(result);
