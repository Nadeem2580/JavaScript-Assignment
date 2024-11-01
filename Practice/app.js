var getInput = document.getElementById("inp");
var getPass = document.getElementById("pass");
var getPara = document.getElementById("massege");
var getpassMassage = document.getElementById("passwordMassege");



function focusTime(focusEle) {
    getPara.style.display = "none"
    getInput.style.border = "3px solid black";
    getInput.style.outline = "none";

}

function blurTimeOut(blurEle) {
    if (getInput.value === "") {
        getInput.style.border = "2px solid red";
        getInput.style.outline = "none";
        getPara.style.display = "block"
        getPara.innerHTML = "Please Enter Email !"

    } else if (getInput.value.length < 3) {
        getInput.style.border = "2px solid red";
        getInput.style.outline = "none";
        getPara.style.display = "block"
        getPara.innerHTML = "Enter Valid Email !"
    }
}


function focusPassword() {
    getpassMassage.style.display = "none"
    getPass.style.border = "3px solid black";
    getPass.style.outline = "none";
}


function blurPassword() {
    if (getPass.value.length < 8) {
        getPass.style.border = "2px solid red";
        getPass.style.outline = "none";
        getpassMassage.style.display = "block";
        getpassMassage.innerHTML = "Enter atleast 8 character"

    }
}

function iconTrigerShow(getIcon) {
    if (getPass.type == "password") {
        getPass.type = "text"
        getIcon.className = "fa-solid fa-eye"
    } else {
        getPass.type = "password"
        getIcon.className = "fa-solid fa-eye-low-vision"
    }
}

function focusEmail(focusInp) {
    var signUpPara = document.getElementById("sign-up-para")
    signUpPara.style.display = "none"
    focusInp.style.border = "2px solid black";
    focusInp.style.outline = "none";
}

function blurEmail(blurInp) {
    var signUpPara = document.getElementById("sign-up-para")

    if (blurInp.value === "") {
        blurInp.style.border = "2px solid red";
        blurInp.style.outline = "none";
        signUpPara.style.display = "block"
        signUpPara.innerHTML = "Please Enter Email !"

    } else if (blurInp.value.length < 3) {
        blurInp.style.border = "2px solid red";
        blurInp.style.outline = "none";
        signUpPara.style.display = "block"
        signUpPara.innerHTML = "Enter Valid Email !"
    }
}

function signupPassword(passSignup) {
    var getPassMassage = document.getElementById("sign-up-para-password")
    getPassMassage.style.display = "none"
    passSignup.style.border = "3px solid black";
    passSignup.style.outline = "none";
}

function signupPasswordBlur(paasSignupBlur) {
    if (paasSignupBlur.value.length < 8) {
        paasSignupBlur.style.border = "2px solid red";
        paasSignupBlur.style.outline = "none";
        paasSignupBlurMassage.style.display = "block";
        paasSignupBlurMassage.innerHTML = "Enter atleast 8 character"

    }
}


function iconTrigerShow(getIcon) {
    var pass = document.getElementById("password")
    if (pass.type == "password") {
        pass.type = "text"
        getIcon.className = "fa-solid fa-eye"
    } else {
        pass.type = "password"
        getIcon.className = "fa-solid fa-eye-low-vision"
    }
}


function signupSubmit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var name = document.getElementById("name");
    // var fname = document.getElementById("fname");
    // var phone = document.getElementById("phone");
    // var dob = document.getElementById("dob");
    // var address = document.getElementById("address");
    // var city = document.getElementById("city");
    // var confirmPassword = document.getElementById("confirm-password");
    // var acher = document.getElementById("acher");

    if (email == "nadeem@gmail.com" && password == 123456789) {

    }






}




























// -------------------- Form Java Script code end --------------------



// -------------------- Picture Trigger Practice Java Script code Start --------------------


// function imgHandler(flag, getImage) {
//     console.log("imgHandler")
//     if (flag == "in") {
//         getImage.src = "./image/kim 2.gif"
//     }else {
//         getImage.src = "./image/kim 1.gif"
//     }
// }

// function imgHandler2(flag, getImage) {
//     console.log("imgHandler")
//     if (flag == "in") {
//         getImage.src = "./image/terry 2.gif"
//     }else {
//         getImage.src = "./image/terry 1.gif"
//     }
// }



