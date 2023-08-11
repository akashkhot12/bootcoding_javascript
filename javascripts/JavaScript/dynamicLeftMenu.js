let items = [];
function getName(){
    Namevalue = document.querySelector("#Name").value;
    items.push(Namevalue);  
    display();
}
function display() {
    
    for (let i = 0; i < items.length; i++) {
        let element = document.getElementById("demo")
        element.innerHTML = items[i];
      }
      return element;
}

