// <------------> // Question No 1 //  <------------>

// var userInput = prompt("Enter your name");
// alert(`hi ${userInput}`);

// <------------> // Question No 2 //  <------------>

// var user = prompt("Enter table number" , 5);
// document.write(`<h1>Multiplication table of ${user} </h1>`);
// document.write(`${user} x 1 = ${user * 1} <br />`)
// document.write(`${user} x 2 = ${user * 2}<br />`)
// document.write(`${user} x 3 = ${user * 3}<br />`)
// document.write(`${user} x 4 = ${user * 4}<br />`)
// document.write(`${user} x 5 = ${user * 5}<br />`)
// document.write(`${user} x 6 = ${user * 6}<br />`)
// document.write(`${user} x 7 = ${user * 7}<br />`)
// document.write(`${user} x 8 = ${user * 8}<br />`)
// document.write(`${user} x 9 = ${user * 9}<br />`)
// document.write(`${user} x 10 = ${user * 10}<br />`)

// <------------> // Question No 3 //  <------------>

// var user = prompt("Enter city name");

// if(user == "karachi"){
// document.write(`Welcome to city of Light`);
// }else{
//     document.write(`Only for karachi's citizen`)
// };

// <------------> // Question No 4 //  <------------>

// var user = prompt("Enter your gender");
// if(user == "male"){
// document.write(" Good Morning Sir...")
// }else if(user == "female"){
//     document.write( "Good Morning Ma am." )
// }else{
//     document.write("You have entered invalid ")
// }

// <------------> // Question No 5 //  <------------>


// var user = prompt("Enter your gender");
// if(user == "red"){
// document.write("Vehicle must stop")
// }else if(user == "yellow"){
//     document.write( "vehicle should get ready to move" )
// }else if(user == "green"){
//     document.write( "vehicle can move now" )
// }else{
//     document.write("You have entered invalid ")
// }

// <------------> // Question No 6 //  <------------>

// var maxAge = prompt("Enter Max age");
// var currentAge = prompt("Enter current age");

// if(maxAge <= currentAge){
//     document.write("You are welcome");
// };

// <------------> // Question No 7 //  <------------>

// var userFuel =prompt("Enter fuel info");

// if(userFuel < 0.25){
// document.write("Please refill the fuel in your car")
// }else{
// document.write("Enjoy your journey");
// };

// <------------> // Question No 8 //  <------------>
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// a => condition is true.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// b => condition is false.

//  var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

// c => condition no 2 is true.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// d => condition  is true.

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// e => condition  true is true.

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// <------------> // Question No 9 //  <------------>

// var eng = +prompt("Enter marks obtained of english");
// var urdu = +prompt("Enter marks obtained of urdu");
// var math = +prompt("Enter marks obtained of math");
// var totalMarks = 300;
// var res = eng + urdu + math
// res /totalMarks * 100

// if(res >= 80){
// document.write("A one Excellent ")
// }else if(res >= 70){
//     document.write("A one Good ")
// }else if(res >= 60){
//     document.write("B you need to improve ")
//     }else if(res < 60){
//         document.write("Fail sorry ")
//  }

// <------------> // Question No 10 //  <------------>

// var item1 = "T-Shirts";
// var item2 = "USB Flesh drive";
// var priceItem1 = 1000;
// var priceItem2 = 700;
// var shippingCharges = 250;
// var OrderedQuantity1 = +prompt("Enter order 1 quantity");
// var OrderedQuantity2 = +prompt("Enter order 2 quantity");
// var firstOrder = priceItem1 *OrderedQuantity1
// var secondOrder = priceItem2 * OrderedQuantity2
// var total = firstOrder +secondOrder +shippingCharges
// var disPrice = total *10 /100
// document.write(`<h1>Shopping Cart </h1> <br />`)
// document.write(`Price of ${item1} is ${priceItem1}<br />`);
// document.write(`Quantity of ${item1} is ${OrderedQuantity1}<br />`);
// document.write(`Price of ${item2} is ${priceItem2}<br />`);
// document.write(`Quantity of ${item2} is ${OrderedQuantity2}<br /><br />`);
// document.write(`${shippingCharges}<br /><br />`);
// document.write(`Total cost of your order is ${total} PKR`);
// document.write(`Disscount Price ${total-disPrice} PKR`)

// <------------> // Question No 11 //  <------------>


// var usernumber = prompt("Enter any number from 1 to 10")
// var guessNumber =Math.round( Math.random() * 10) 
// console.log(guessNumber)
// if(guessNumber == usernumber){
//     document.write("Bingo currect answer")
// }else{
//     document.write("“Close enough to the correct answer")
// }

// <------------> // Question No 12 //  <------------>

// var user = prompt("Enter number");

// if(user % 3 == 0){
// document.write(`${user} number is division by 3`)
// }else{
// document.write(`${user} number is not division by 3`)

// }

// <------------> // Question No 13 //  <------------>

// var teamA = +prompt("Enter score of Team A");
// var teamB = +prompt("Enter score of Team B");
// if (teamA == teamB) {
//     document.write("The match is Tie")
// } else if (teamA > teamB) {
//     document.write("Team A won the match")
// } else if (teamA < teamB) {
// document.write("Team B won the match")
// }else{
//     document.write("Delay due to raining")
// }

// <------------> // Question No 14 //  <------------>
// var str = "PAkistan";
// var num = 123;
// var bool = true;
// alert("Pakistan is a " + typeof str)
// alert("132 is a " + typeof num)
// alert("True is a " + typeof bool)


// <------------> // Question No 15 //  <------------>

// var user = prompt("Enter the number");

// if(user % 2 !== 0){
//     document.write("Odd Number")
// }else{
//     document.write("Even Number")
// }

// <------------> // Question No 16 //  <------------>

// var user = prompt("Enter tempreture");

// if(user > 40){
// document.write("It is too hot outside")
// }else if (user > 30 && user < 40 ){
//     document.write("The Weather today is Normal")
// }else if (user > 20 && user < 30 ){
//     document.write("Today’s Weather is cool")
// }else if (user > 10 && user < 20 ){
//     document.write("“OMG! Today’s weather is so Cool")
// };

// <------------> // Question No 18 //  <------------>

// var user = prompt("Enter day name");
// if(user === "Monday","Tuesday","Wednesday","Thursday","Friday"){
//     document.write("Its week day")
// }else if(user == "Saturday"){
// document.write("It's Weekend")
// }else if(user == "Sunday"){
//     document.write("Yay! It’s a holiday")
//     }else{
//         document.write("You have entered wrong word")
//     }

// <------------> // Question No 19 //  <------------>
// var user = prompt("Enter score");
// if(user > 50 ){
//     document.write("You are passed")
// }else {
//     document.write("Try again")
// }

// <------------> // Question No 20 //  <------------>

// var num1 = (prompt("Enter first number:"));
// var num2 = (prompt("Enter second number:"));


// if (num1 > num2) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
// } else if (num1 < num2) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
// } else {
//     console.log(`${num1} and ${num2} are equal.`);
// }

// <------------> // Question No 21 //  <------------>

