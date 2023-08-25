function sendEmail(e){
    e.preventDefault();
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akashkhot03@gmail.com",
        Password : "AABA6C3BD87F571D395199AC06B3DC4936F6",
        To : document.getElementById("userEmail").value,
        From : 'akashkhot03@gmail.com',
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("body").value,
    }).then(
      message => alert(message)
    );
    return true;
}
