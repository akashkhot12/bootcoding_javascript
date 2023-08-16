function validForm() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var address = document.getElementById("address").value
    var email = document.getElementById("email").value

    if(name==""){
        alert("name is required");
        return false;
    }

    if(age==""){
        alert("age is required");
        return false;
    }
    else if(age<1){
        alert('age must be positive number')
        return false ; 
    }
    if(address==""){
        alert("address is required");
        return false;
    }
    if(email==""){
        alert("email is required");
        return false;
    }
    else if(!email.include("@")){
        alert("Invalid email address");
        return false;
    }

    return true;
}