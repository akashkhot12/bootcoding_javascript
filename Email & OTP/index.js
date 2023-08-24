function sendMail() {
    var userEmail = document.getElementById("userEmail").value;
    var subjectLine = document.getElementById("subject").value;
    var message = document.getElementById("body").value;
    window.location.href = "mailto:"+userEmail+"?subject="+subjectLine+"&body="+message;
}