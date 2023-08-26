
let otpVerify = document.querySelector(".otpVerify")[0]
let OTP ; 
function sentOTP() {
  OTP = Math.floor((Math.random() * 1000000) + 1);
  let emailBody = `<h2>Your OTP is </h2><h1>${OTP}</h1>`
  return emailBody;
}
function sendEmail(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "akashkhot03@gmail.com",
    Password: "AABA6C3BD87F571D395199AC06B3DC4936F6",
    To: document.getElementById("userEmail").value,
    From: 'akashkhot03@gmail.com',
    Subject: document.getElementById("subject").value,
    Body: sentOTP(),
  }).then(
    message => {
      if (message === "OK") {
        result.innerHTML = `<label for="exampleFormControlInput1">OTP was send</label>`
        result.style.color = "black"
        const btnIpt = document.getElementById("btnIpt");
        const btnOTP = document.getElementById("btnOTP");

        btnOTP.addEventListener('click', () => {
          if (btnIpt.value == OTP) {
            let result = document.getElementById("result")
            result.innerHTML = `<label for="exampleFormControlInput1">*Email verified</label>`
            result.style.color = "green"
          }
          else {
            let result = document.getElementById("result")
            result.innerHTML = `<label for="exampleFormControlInput1">*Invalid Input</label>`
            result.style.color = "red"
          }
        })
      }
    }
  );

}



