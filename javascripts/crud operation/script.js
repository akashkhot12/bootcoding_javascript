var selectedRow = null;

function onFormSubmit(){

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