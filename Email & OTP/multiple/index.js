// sending mail

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akashkhot03@gmail.com",
        Password : "AABA6C3BD87F571D395199AC06B3DC4936F6",
        To : giveninput(),
        From : 'akashkhot03@gmail.com',
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("body").value,
    }).then(
      message =>alert(message)
    );
    
}

function giveninput(){
    let array = ["akashkhot03@gmail.com","chetana27bhanarkar@gmail.com"]
    return array.toString();
}



        
// sending OTP

function sendingOTP(){;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akashkhot03@gmail.com",
        Password : "AABA6C3BD87F571D395199AC06B3DC4936F6",
        To : document.getElementById("userEmail").value,
        From : 'akashkhot03@gmail.com',
        Subject : document.getElementById("subject").value,
        Body : sentOTP(),
    }).then(
      message => {
        if (message==="OK") {
          alert("your OTP was sent on "+document.getElementById("userEmail").value);
        }
      }
    );
    
}

function sentOTP(){
   let OTP = Math.floor((Math.random()*1000000)+1);
   let emailBody = `<h2>Your OTP is </h2><h1>${OTP}</h1>`
   return emailBody;
}



