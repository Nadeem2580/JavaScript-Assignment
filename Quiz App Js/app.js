
var options = document.querySelector(".options");
var question = document.querySelector("#question");
var nextBtn = document.querySelector("#nextBtn");
var prevBtn = document.querySelector("#prevBtn");
var submitBtn = document.querySelector("#submitBtn");
var answered = false;

const quizQuestions = [
    {
        id: 0,
        question: "1) What is the output of the following code? console.log(5 + '5');",
        answerChoices: [
            "A) 55",
            "B) 10",
            "C) 5",
            "D) Error"
        ],
        correctAnswer: "A) 55"
    },
    {
        id: 1,
        question: "2) Which method is used to convert a string to a number in JavaScript?",
        answerChoices: [
            "A) parseInt()",
            "B) toNumber()",
            "C) toString()",
            "D) parseFloat()"
        ],
        correctAnswer: "A) parseInt()"
    },
    {
        id: 2,
        question: "3) What will be the output of the following code? console.log(typeof null);",
        answerChoices: [
            "A) object",
            "B) null",
            "C) undefined",
            "D) function"
        ],
        correctAnswer: "A) object"
    },
    {
        id: 3,
        question: "4) What is the default value of a variable declared with `let` and not initialized?",
        answerChoices: [
            "A) null",
            "B) undefined",
            "C) 0",
            "D) false"
        ],
        correctAnswer: "B) undefined"
    },
    {
        id: 4,
        question: "5) Which of the following is NOT a JavaScript data type?",
        answerChoices: [
            "A) String",
            "B) Number",
            "C) Object",
            "D) Character"
        ],
        correctAnswer: "D) Character"
    },
    {
        id: 5,
        question: "6) How do you create a function in JavaScript?",
        answerChoices: [
            "A) function = myFunction()",
            "B) function myFunction() {}",
            "C) createFunction myFunction() {}",
            "D) function: myFunction() {}"
        ],
        correctAnswer: "B) function myFunction() {}"
    },
    {
        id: 6,
        question: "7) Which symbol is used for comments in JavaScript?",
        answerChoices: [
            "A) // for single-line comment",
            "B) /* */ for block comment",
            "C)  ||",
            "D) Both A and B"
        ],
        correctAnswer: "D) Both A and B"
    },
    {
        id: 7,
        question: "8) What will the following code return? Boolean('false')",
        answerChoices: [
            "A) true",
            "B) false",
            "C) 'false'",
            "D) NaN"
        ],
        correctAnswer: "A) true"
    },
    {
        id: 8,
        question: "9) What does the `this` keyword refer to in JavaScript?",
        answerChoices: [
            "A) The current function",
            "B) The global object",
            "C) The object that is executing the current code",
            "D) The function's arguments"
        ],
        correctAnswer: "C) The object that is executing the current code"
    },
    {
        id: 9,
        question: "10) Which of the following is the correct syntax for declaring an array in JavaScript?",
        answerChoices: [
            "A) var arr = []",
            "B) var arr = ()",
            "C) var arr = {}",
            "D) var arr = < >"
        ],
        correctAnswer: "A) var arr = []"
    },
    {
        id: 10,
        question: "11) What is the purpose of the `push()` method in JavaScript?",
        answerChoices: [
            "A) To add an item to the end of an array",
            "B) To remove an item from the array",
            "C) To convert a string to a number",
            "D) To concatenate two arrays"
        ],
        correctAnswer: "A) To add an item to the end of an array"
    },
    {
        id: 11,
        question: "12) What will be the output of the following code? console.log(0 == false);",
        answerChoices: [
            "A) true",
            "B) false",
            "C) undefined",
            "D) NaN"
        ],
        correctAnswer: "A) true"
    },
    {
        id: 12,
        question: "13) How do you check if a variable `x` is an array in JavaScript?",
        answerChoices: [
            "A) Array.isArray(x)",
            "B) x instanceof Array",
            "C) typeof x === 'array'",
            "D) Both A and B"
        ],
        correctAnswer: "D) Both A and B"
    },
    {
        id: 13,
        question: "14) What is a closure in JavaScript?",
        answerChoices: [
            "A) A function that is called after a delay",
            "B) A function that is created inside another function and has access to the outer function's variables",
            "C) A function that is passed as an argument to another function",
            "D) A function that returns another function"
        ],
        correctAnswer: "B) A function that is created inside another function and has access to the outer function's variables"
    },
    {
        id: 14,
        question: "15) What does `NaN` stand for in JavaScript?",
        answerChoices: [
            "A) Not a Number",
            "B) Null and Null",
            "C) Not available Number",
            "D) Not a Null"
        ],
        correctAnswer: "A) Not a Number"
    },
    {
        id: 15,
        question: "16) What does the `typeof` operator do in JavaScript?",
        answerChoices: [
            "A) Returns the type of an object",
            "B) Returns the length of an array",
            "C) Returns the type of a variable",
            "D) Checks if a variable is undefined"
        ],
        correctAnswer: "C) Returns the type of a variable"
    },
    {
        id: 16,
        question: "17) How do you declare a constant in JavaScript?",
        answerChoices: [
            "A) var",
            "B) let",
            "C) const",
            "D) static"
        ],
        correctAnswer: "C) const"
    },
    {
        id: 17,
        question: "18) Which method is used to remove the last item of an array?",
        answerChoices: [
            "A) pop()",
            "B) shift()",
            "C) remove()",
            "D) delete()"
        ],
        correctAnswer: "A) pop()"
    },
    {
        id: 18,
        question: "19) What does the `setTimeout()` function do in JavaScript?",
        answerChoices: [
            "A) It executes a function after a specified number of milliseconds",
            "B) It executes a function immediately",
            "C) It sets the timeout for a page to reload",
            "D) It stops a function from executing"
        ],
        correctAnswer: "A) It executes a function after a specified number of milliseconds"
    },
    {
        id: 19,
        question: "20) Which of the following is used to handle errors in JavaScript?",
        answerChoices: [
            "A) catch",
            "B) throw",
            "C) try",
            "D) All of the above"
        ],
        correctAnswer: "D) All of the above"
    }
];



var score = 0;
var indexNum = 0;

function ShowQuisUI() {
    question.innerHTML = quizQuestions[indexNum].question;
    var selectAns = quizQuestions[indexNum].answerChoices
    options.innerHTML = "";
    for (var i = 0; i < selectAns.length; i++) {
        options.innerHTML += `<div class="dis" > 
                        <input onclick="getScore(this)" type="radio" id="option${i}" name="quiz" value="${selectAns[i]}">
                        <label for="option${i}">${selectAns[i]}</label>
                        </div>`
    }
    submitBtn.style.opacity = "0.5";
    submitBtn.setAttribute("disabled", true);

}

var interval;
var second = 0
interval = setInterval(timer, 1000)
var minute = document.getElementById("minute");

function timer() {
    if (!minute) return;
    second++;
    minute.innerHTML = second
    if (minute.innerHTML == 60) {
        second = 0
        minute.innerHTML = 0
        nextQuestion();
    }
}

function nextQuestion(ele) {
    if (indexNum < quizQuestions.length - 1) {
        indexNum++,
            ShowQuisUI();
        minute.innerHTML = 0;
        second = 0;
    }
    else {
        clearInterval(interval)
        nextBtn.style.opacity = "0.5";
        nextBtn.setAttribute("disabled", true)
        submitBtn.style.opacity = "unset";
        submitBtn.removeAttribute("disabled")

    }
}


var correctAns = 0
var wrongAns = 0

function getScore(ele) {
    var selectedAnswer = ele.value;
    var correctAnswer = quizQuestions[indexNum].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        correctAns++
        score += 5;
    } else {

        wrongAns++
    }

    answered = true;
    disableFunc()
}

function disableFunc() {
    var alloptions = document.querySelectorAll("input");
    alloptions.forEach((ele) => {
        ele.disabled = true

    })
}


// --------------------- sign Up VAlidation ------------------
var isCorrect = true;

function data() {

    if (
        !namevalidation("first") ||
        !namevalidation("last") ||
        !numbervalidation() ||
        !emailvalidation() ||
        !passValidation() ||
        !cPass()
    ) {
        return false;
    }

    localStoragehandle();

    return true;
}


function localStoragehandle() {
    var fNames = document.getElementById("name").value;
    var lName = document.getElementById("lName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var obj = {
        firstName: fNames,
        lastName: lName,
        phoneNumber: phone,
        emailId: email,
        emailPassword: password,
    }
    var usersArray = JSON.parse(localStorage.getItem("users")) || [];
    usersArray.unshift(obj);
    localStorage.setItem("users", JSON.stringify(usersArray));
}



function namevalidation(flag) {
    var fNames = document.getElementById("name").value;
    var lName = document.getElementById("lName").value;
    var nameRegex = /^[a-zA-Z-' ]{2,50}$/;

    if (flag === "first") {
        if (!nameRegex.test(fNames) || fNames.length < 3) {
            document.getElementById("name").style.border = "1px solid red";
            return false;
        }
        document.getElementById("name").style.border = "1px solid green";
        return true;
    } else if (flag === "last") {
        if (!nameRegex.test(lName) || lName.length < 3) {
            document.getElementById("lName").style.border = "1px solid red";
            return false;
        }
        document.getElementById("lName").style.border = "1px solid green";
        return true;
    }
    return false;
}

function numbervalidation() {
    var phone = document.getElementById("phone");
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.style.border = "1px solid red";
        return false;
    }
    phone.style.border = "1px solid green";
    return true;
}

function emailvalidation() {
    var email = document.getElementById("email");
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email.value)) {
        email.style.border = "1px solid red";
        return false;
    }
    email.style.border = "1px solid green";
    return true;
}

function passValidation() {
    var password = document.getElementById("password");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password.value)) {
        password.style.border = "1px solid red";
        return false;
    }
    password.style.border = "1px solid green";
    return true;
}

function cPass() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var confirmPassEle = document.getElementById("confirm-password");
    if (password !== confirmPassword) {
        confirmPassEle.style.border = "1px solid red";
        return false;
    }
    confirmPassEle.style.border = "1px solid green";
    return true;
}

function toggleFunc() {
    const loginPasswordField = document.getElementById("loginPassword");
    const toggleText = document.getElementById("togglePassword");

    if (loginPasswordField.type == "password") {
        loginPasswordField.type = "text";
        toggleText.textContent = "Hide"
    } else {
        loginPasswordField.type = "password";
        toggleText.textContent = "Show"
    }

};

function MatchEmail(event) {
    event.preventDefault();  // Prevent form from submitting

    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var getStoredVAlue = JSON.parse(localStorage.getItem("users"));

    let isMatchFound = false;

    for (var i = 0; i < getStoredVAlue.length; i++) {
        var storedEmail = getStoredVAlue[i].emailId;
        var storedPass = getStoredVAlue[i].emailPassword;

        if (loginEmail.value === storedEmail && loginPassword.value === storedPass) {
            isMatchFound = true;

            break;
        }
    }
    if (isMatchFound) {
        window.location.replace("./quiz.html");
        // window.history.back()
        
    } else {
        alert("Email and password do not match.");
    }
}

var popup = document.getElementById("popup");
function openPopup() {
    var scored = document.querySelector(".scored")
    var correct = document.querySelector(".correct")
    var wrong = document.querySelector(".wrong")
    var fullQuizContainer = document.getElementById("quizContaine");
    fullQuizContainer.style.display = "none"
    var PopupContainer = document.querySelector(".tick-containe");
    PopupContainer.style.display = "block"
    popup.classList.add("open-popup");
    scored.innerHTML = `Congratulation You have scored  ${score} form correct answer`;
    correct.innerHTML = `You have submitted ${correctAns} correct answers`
    wrong.innerHTML = `You have submitted ${wrongAns} Wrong answers`

}

function closePopup() {
    popup.classList.remove("open-popup");
    window.location.replace("index.html");
    window.history.back()
    window.history.forward()
    var fullQuizContainer = document.getElementById("quizContaine");
    fullQuizContainer.style.display = "block"
}






