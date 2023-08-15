var selectedRow = null;

function onFormSubmit(e){
     event.preventDefault();
     var formData = readFormData();
     if(selectedRow===null){
        insertNewRecord(formData);
     }
     else{

     }
}

// retrive the data 

function readFormData(){
    var formData = {}
    formData["productCode"] = document.getElementById("productCode").ariaValueMax;
    formData["product"] = document.getElementById("product").ariaValueMax;
    formData["qty"] = document.getElementById("qty").ariaValueMax;
    formData["perPrice"] = document.getElementById("perPrice").ariaValueMax;
    return formData;  
}


// insert the data 

function insertNewRecord(data){
 var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];

 var newRow = table.insertRow(table.length);
 var cell1 =  newRow.insertCell(0);
    cell1.innerHTML=data.productCode;

    var cell2 =  newRow.insertCell(1);
    cell2.innerHTML=data.product;

    var cell3 =  newRow.insertCell(2);
    cell3.innerHTML=data.qty;

    var cell4 =  newRow.insertCell(3);
    cell4.innerHTML=data.perPrice;

    var cell5 =  newRow.insertCell(3);
    cell5.innerHTML=`<buton onClick="onEdit(this)">Edit</buton> <button>Delete</button>`;
}

// edit the data

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;

    document.getElementById('product').value = selectedRow.cells[1].innerHTML;

    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;

    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;

}

// update
function updateRecord(formData){
    selectedRow.cell[0].innerHTML = formData.productCode;
    selectedRow.cell[1].innerHTML = formData.product;
    selectedRow.cell[2].innerHTML = formData.qty;
    selectedRow.cell[3].innerHTML = formData.perPrice;
}