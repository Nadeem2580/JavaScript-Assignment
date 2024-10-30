var inp = document.getElementById("inp");
var pass = document.getElementById("pass")
var email = "nadeem@gmail.com"
var password = "87456231"
function focusTime(ele) {

}

function blurTime() {
    if (pass.value.length <= 4) {
        pass.style.border = "3px solid red"
        alert("Enter digit above 4")
    }
}

function success() {
    if (email === inp.value && password === pass.value) {
        alert("You have successfully login")
    } else {
        alert("You have entered a wrong password or email")
     }
}

function iconTrigerShow(){
    var getIcon = document.getElementById("icon");
    pass.type = "text"
    getIcon.className = "fa-solid fa-eye"

} 

function iconTrigerHide(){
    var getIcon = document.getElementById("icon");
    pass.type = "text"
    getIcon.className = "fa-solid fa-eye"

} 
// -------------------- Form Java Script code end --------------------