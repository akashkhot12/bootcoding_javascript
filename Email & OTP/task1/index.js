
let otpVerify = document.querySelector(".otpVerify")

 function sendEmail(e){
    e.preventDefault();
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
          otpVerify.style.display = "block";
        }
      }
    );
    
}

function sentOTP(){
   let OTP = Math.floor((Math.random()*1000000)+1);
   let emailBody = `<h2>Your OTP is </h2><h1>${OTP}</h1>`
   return emailBody;
}

