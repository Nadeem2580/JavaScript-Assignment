function validationInput(flag, ele) {
    if (flag == "name" && ele.value == "") {
        alert("Enter Name")
    }
    else if (flag == "fname" && ele.value == "") {
        alert("Enter Father Name")
    }
    else if (flag == "phone" && ele.value == "") {
        alert("Enter Phone  Number")
    }
    else if (flag == "dob" && ele.value == "") {
        alert("Enter DOB Name")
    }
    else if (flag == "address" && ele.value == "") {
        alert("Enter address Name")
    }
    else if (flag == "city" && ele.value == "") {
        alert("Enter city Name")
    }
}


function signUpfocusEmail(flag, focusEle) {
    var signUpPara = document.getElementById("sign-up-para")
    var signupEmail = document.getElementById("email")

    if (flag == "signUpEmailFocus") {
        signUpPara.style.display = "none"
        focusEle.style.border = "2px solid black";
        focusEle.style.outline = "none"
    }

}

function signUpblurEmail(flag, signblurUpVar) {
    var signUpPara = document.getElementById("sign-up-para")
    var signupEmail = document.getElementById("email")

    if (flag == "signUpEmailBlur") {

        if (signupEmail.value == "") {
            signblurUpVar.style.border = "1px solid red";
            signblurUpVar.style.outline = "none";
            signUpPara.style.display = "block";
            signUpPara.innerHTML = "Please Enter Email";
        } else if (signblurUpVar.value.length < 3) {
            signblurUpVar.style.border = "2px solid red";
            signblurUpVar.style.outline = "none";
            signUpPara.style.display = "block";
            signUpPara.innerHTML = "Please Enter valid Email";
        }
    }
}

function signupPasswordFocus(flag, signUppassFocusEle) {
    var signUpParaPassword = document.getElementById("sign-up-para-password");

    if (flag == "signUpPasswordFocus") {
        signUpParaPassword.style.display = "none"
        signUppassFocusEle.style.border = "2px solid black";
        signUppassFocusEle.style.outline = "none"

    }
}

function signupPasswordBlur(flag, signUpblurPassVar) {
    var signupPassw = document.getElementById("sign-up-para-password")

    if (flag == "signUpPasswordBlur") {

        if (signUpblurPassVar.value == "") {
            signUpblurPassVar.style.border = "1px solid red";
            signUpblurPassVar.style.outline = "none";
            signupPassw.style.display = "block";
            signupPassw.innerHTML = "Please Enter Password";
            signupPassw.style.color = "red"

        } else if (signUpblurPassVar.value.length < 5) {
            signUpblurPassVar.style.border = "2px solid red";
            signUpblurPassVar.style.outline = "none";
            signupPassw.style.display = "block";
            signupPassw.innerHTML = "Please Enter valid Password";
            signupPassw.style.color = "red"
        }
    }
}



function iconTrigerShow(getIcon) {
    var getPass = document.getElementById("password");

    if (getPass.type == "password") {
        getPass.type = "text"
        getIcon.className = "fa-solid fa-eye"
    } else {
        getPass.type = "password"
        getIcon.className = "fa-solid fa-eye-low-vision"
    }
}

function signupSubmit() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);
    alert("You have successfully signed up!");
    location.href = "index.html";
}

// --------------------Log in Form ------------------//



function focusTime(ele) {
    var signUpPara = document.getElementById("massege");
    signUpPara.style.display = "none"
    ele.style.border = "2px solid black";
    ele.style.outline = "none"
}
function blurTimeOut(ele) {
    var signUpPara = document.getElementById("massege");

    if (ele.value == "") {
        ele.style.border = "1px solid red";
        ele.style.outline = "none";
        signUpPara.style.display = "block";
        signUpPara.innerHTML = "Please Enter Email";
    } else if (ele.value.length < 3) {
        ele.style.border = "2px solid red";
        ele.style.outline = "none";
        signUpPara.style.display = "block";
        signUpPara.innerHTML = "Please Enter valid Email";
    }
}

function focusPassword(flag) {
    var passwordMassege = document.getElementById("passwordMassege");


    passwordMassege.style.display = "none"
    flag.style.border = "2px solid black";
    flag.style.outline = "none"
}

function blurPassword(flag) {
    var passwordMassege = document.getElementById("passwordMassege")

    if (flag.value == "") {
        flag.style.border = "1px solid red";
        flag.style.outline = "none";
        passwordMassege.style.display = "block";
        passwordMassege.innerHTML = "Please Enter Password";
        passwordMassege.style.color = "red"

    } else if (flag.value.length < 5) {
        flag.style.border = "2px solid red";
        flag.style.outline = "none";
        passwordMassege.style.display = "block";
        passwordMassege.innerHTML = "Please Enter valid Password";
        passwordMassege.style.color = "red"
    }

}

function success() {
    var email = document.getElementById("inEmail").value;
    var pass = document.getElementById("inPass").value;
    var localEmail = localStorage.getItem("Email");
    var localPassword = localStorage.getItem("Password");

    if (email == "") {
        alert("Enter Email")
    } else if (pass == "") {
        alert("Enter Password")

    } else if (email == localEmail && pass == localPassword) {
        location.href = "successfully .html";
    }

}

function iconTrigerHide(ele){
    var getPass = document.getElementById("inPass")

    if (getPass.type == "password") {
        getPass.type = "text"
        ele.className = "fa-solid fa-eye"
    } else {
        getPass.type = "password"
        ele.className = "fa-solid fa-eye-low-vision"
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



