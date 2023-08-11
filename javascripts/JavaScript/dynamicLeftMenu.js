let items = [];
function getName(){
    Namevalue = document.querySelector("#Name").value;
    items.push(Namevalue);  
    display();
}
function display() {
    for (const value of items) {
        document.getElementById("demo").innerHTML = `<li>${value}</li>`
    }
}