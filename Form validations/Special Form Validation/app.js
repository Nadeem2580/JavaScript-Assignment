const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// add evet
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVAl = password.value.trim();
    const confirmPasswordVAl = confirmPassword.value.trim();


    // validate username

    if (usernameVal === "") {
        setErrormsg(username, 'username cannot be blank');
    } else if (usernameVal.length < 2) {
        setErrormsg(username, 'username min 3 character')
    } else {
        setSuccessmsg(username)
    }
}
// more email validate
const isEmail = (emailVal)=>{
     var atSymbol = emailVal.indexof("@");
     if(atSymbol < 1)return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot < atSymbol +3)return false;
    if(dot === emailVal.length -1)return false;
    return true;  
}
// validate Email

if (emailVal === "") {
    setErrormsg(email, 'email cannot be blank');
} else if (isEmail(emailVal)) {
    setErrormsg(emailVal, 'not a valid email')
} else {
    setSuccessmsg(email)
}

function setErrormsg(input , errormsgs){
 const formControl = input.parentElement;
 const small = formControl.querrySelector('small');
 formControl.className ="form-control error";
 small.innerHTML = errormsgs; 
}