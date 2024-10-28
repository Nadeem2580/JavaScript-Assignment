// ---------- // Question 1 // ------------ //

// var num = 45;
// document.write(`Round of Value : ${Math.round(num)} <br />`)
// document.write(`Floor  Value : ${Math.floor(num)}<br />`)
// document.write(`Ciel Value : ${Math.ceil(num)}`)


// ---------- // Question 2 // ------------ //

// var num = -32;
// document.write(`Round of Value : ${Math.round(num)} <br />`)
// document.write(`Floor  Value : ${Math.floor(num)}<br />`)
// document.write(`Ciel Value : ${Math.ceil(num)}`)


// ---------- // Question 3 // ------------ //


// var num = 3.45214;
// document.write(`Number : ${num} <br />`)
// document.write(`Round of Value : ${Math.round(num)} <br />`)
// document.write(`Floor  Value : ${Math.floor(num)}<br />`)
// document.write(`Ciel Value : ${Math.ceil(num)}`)


// ---------- // Question 4 // ------------ //
// var num = -2.673;
// document.write(`Number : ${num} <br />`)
// document.write(`Round of Value : ${Math.round(num)} <br />`)
// document.write(`Floor  Value : ${Math.floor(num)}<br />`)
// document.write(`Ciel Value : ${Math.ceil(num)}`)


// ---------- // Question 5 // ------------ //

// var num1 = -4;
// var num2 = 5;

// document.write(`The Absolute VAlue of ${num1} is ${Math.abs(num1)}  <br />`)
// document.write(`The Absolute VAlue of ${num2} is ${Math.abs(num2)}  <br />`)


// ---------- // Question 6 // ------------ //

// document.write(`Random Dice VAlue ${ Math.floor(Math.random() * 6 +1)}`)


// ---------- // Question 7 // ------------ //

// var random = Math.floor(Math.random() * 2 + 1 )
// if(random == 1){
// document.write(`Random coins value Tail`)
// }else{
// document.write(`Random coins value Head`)
// }


// ---------- // Question 8 // ------------ //

// var random = Math.floor(Math.random() * 100 + 1 )

// document.write(`Random number between 1 to 100 is : ${random}`)


// ---------- // Question 9 // ------------ //

// var user = prompt("Enter Your weight in kg ");

// document.write(`The wieght of user is ${user}`);


// ---------- // Question 10 // ------------ //

// var user = prompt("Guess the number from 1 to 10 ");

// var random = Math.floor(Math.random() * 10 + 1 )

// if(random == user){
//     document.write("you have guessed correct numberr")
// }else{
//     document.write("Try once more time")

// }


// ---------- // Question 11 // ------------ //

// var date_time = new Date();
// document.write(date_time)


// ---------- // Question 12  and 13// ------------ //

// var date_time = new Date().toString();

// document.write(`Current Month :` + date_time.slice(4,7))
// document.write(`Today is  :` + date_time.slice(0,4))


// ---------- // Question 14 // ------------ //
// var date_time = new Date();
// var funDay = date_time.getDay()

// document.write(funDay + "<br />")
// if(funDay == 0 && funDay == 6){
// document.write("It's fun day")
// }else{
// document.write("It's working day")

// }


// ---------- // Question 15 // ------------ //

// var date_time = new Date();
// var funDay = date_time.getDate()

// document.write(funDay + "<br />");

// if(funDay >=1 && funDay <=15){
// document.write(`First fifteen days of the month`)
// }else{
// document.write(`Last days of the month`)
// }


// ---------- // Question 16 // ------------ //

// var date_time = new Date();

// document.write(`Current date ${date_time} <br />`)
// document.write(`Elapsed miliseconds since January 1, 1970 : ${date_time.getTime()} <br />`)
// document.write(`Elapsed miliseconds since January 1, 1970 : ${date_time.getTime() / (1000 * 60)} <br />`)


// ---------- // Question 17 // ------------ //

// var date_time = new Date().toLocaleTimeString();
// 
// console.log(date_time.slice(-2))


// ---------- // Question 18 // ------------ //

// var date_time = new Date("dec 31, 2020");

// document.write(`Later Date : ${date_time}`)


// ---------- // Question 19 // ------------ //
// var date_time = new Date();

// var ramzan = new Date("mar 12, 2024");

// var differance = date_time.getTime() - ramzan.getTime();

// var ramzanPassedDay = Math.floor(differance / (1000 *60 * 60 * 24 ))

// document.write(`${ramzanPassedDay} days have passed since 1st Ramzan of 2024`);


// ---------- // Question 22 // ------------ //
// var date_time = new Date();

// var ramzan = new Date("oct 17, 1915");

// document.write(`Currennt date :${date_time} <br />`)
// document.write(`100 years back, it was ${ramzan}  <br />`)

// ---------- // Question 23 // ------------ //

// var date_time = new Date();

// var dob = new Date(prompt("Enter Your DOB , oct 16, 1991 "));

// var differance = date_time.getTime() - dob.getTime();

// var yearPassed = Math.floor(differance / (1000 *60 * 60 * 24 *365 ))

// document.write(`your Age is : ${yearPassed} <br />`);
// document.write(`your Birth year is  : ${dob}`);


// ---------- // Question 24 // ------------ //
// var  customerName =prompt("Enter your name")
// var currentMonth = new Date().getMonth();
// var numberOfUnits = 450
// var chargesPerUnit = 14
// var netAmountPayable = numberOfUnits * chargesPerUnit
// var latePaymentSurcharge = 500
// var grossAmountPayableAfterDueDAte  = netAmountPayable +latePaymentSurcharge;

// document.write(`Customer Name :${customerName} <br />`)
// document.write(`Month :${currentMonth} <br />`)
// document.write(`Number of unit :${numberOfUnits} <br />`)
// document.write(`Charges Per unit :${chargesPerUnit} <br /> <br />`)


// document.write(`Net amount Payable (Within due date) :${netAmountPayable} <br />`)
// document.write(`Late payment surcharges :${latePaymentSurcharge} <br />`)
// document.write(`Gross amount payable(after due date) :${netAmountPayable} <br />`)


