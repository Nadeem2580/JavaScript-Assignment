// function getUserName() {
// console.log("getUserName");
// var input = document.getElementById("userName")
// console.log("input" , input.value)

// var userName = document.getElementById("userName");
//   console.log("userName", userName.placeholder);
// console.log("userName", userName.value);
// }

// function setUserName() {
// //   console.log("setUserName()");
//     var userName = document.getElementById("userName")
//     // console.log(userName.value , "userName")
//     userName.value  = "SMIT"
// }

// function login() {
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   console.log("email", email.value);
//   console.log("password", password.value);
// }

// function showPassword() {
//   var password = document.getElementById("password");
//   password.type = "text";
// }
// function hidePassword() {
//   var password = document.getElementById("password");
//   password.type = "password";
// }

// function inputValue(value) {
//   var input = document.getElementById("input");
//   input.value += value;
// }

// function result() {
//   var input = document.getElementById("input");
//   var ans = eval(input.value);
//   console.log("ans", ans);
//   input.value = ans;
// }

// function allClear() {
//   var input = document.getElementById("input");
//   input.value = "";
// }

function inputValue(value) {
  var input = document.getElementById("input");
  var lastValue = input.value.slice(-1);
  var operator = ["+", "-", "*", "/"]

  if (operator.includes(lastValue) && operator.includes(value)) {
    return
  }
  input.value += value
}

function del() {
  var input = document.getElementById("input");
  var inputDel = input.value.slice(0, -1);
  input.value = inputDel
}

function clearField() {
  var input = document.getElementById("input");
  input.value = "";
}

function cal() {
  var input = document.getElementById("input");
  var calValue = eval(input.value)
  input.value = calValue
  
}