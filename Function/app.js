// ---------- // Question 1 // ----------/

// function greet(){
//     document.write("Hello World")
// }
// greet();
// greet();

// ---------- // Question 2 // ----------/

// function time(){
//     document.write( dateTime = new Date());
// }
// time();

// ---------- // Question 3 // ----------/

// function greet(){
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
//     document.write("HEllo " +firstName + " "+ lastName )
// }
// greet()


// ---------- // Question 4 // ----------/

// function add(){
//     var num1 = +prompt("Enter Number ");
//     var num2 = +prompt("Enter Number ");
//     document.write(`The sum of ${num1} and ${num2} is : ${num1 + num2}` )
// }

// add()


// ---------- // Question 5 // ----------/
// function calcu() {
//     var num1 = +prompt("Enter number");
//     var num2 = +prompt("Enter number");
//     var inputoperator = prompt("Enter operator , + . - ,* ,/")
//     if (inputoperator == "+") {
//         document.write(`num1 and num2 addtion is :${num1 + num2}`)
//     } else if (inputoperator == "-") {
//         document.write(`num1 and num2 subtraction is :${num1 - num2}`)
//     }else if(inputoperator == "*"){
//         document.write(`num1 and num2 multiplication is :${num1 * num2}`)
//     }else if(inputoperator == "/"){
//         document.write(`num1 and num2 division is :${num1 / num2}`)

//     }
// }

// calcu()

// ---------- // Question 6 // ----------/
// var sqr = prompt("Enter numnber to square")
// function square(){
// sqr = sqr * sqr
// document.write(sqr)
// }
// square()


// ---------- // Question 7 // ----------/

// function factorial(){

//     var num =prompt("Enter factoial number")
//     for (var i= num-1; i > 1; i-- ){
//     num = num * i
//     }
//     document.write(num)
// }

// factorial()


// ---------- // Question 8 // ----------/

// function counting(){
//     var startingPoint = prompt("Enter starting point");
//     var endingPoint = prompt("Enter Ending point");
//     for(var i = startingPoint; i <= endingPoint; i++){
//         document.write(i + "<br />")
//     }
// }

// counting()


// ---------- // Question 10 // ----------/
// function argumentLength(){
//     for (var i=0 ; i < arguments.length ; i++){
//         document.write(arguments[i] )
//     }
// }
// argumentLength("karachi" , "islamabad" , "lahore" , "multan")


// ---------- // Question 11 // ----------/

// var largest = 0;

// function argumentLength() {
//     for (var i = 0; i < arguments.length; i++) {
//         if (arguments[i] > largest) {
//             largest = arguments[i]
//         }
//     }

// }
// argumentLength(6, 10, 45, 38, 63, 58, 49)
// document.write(largest)


// ---------- // Question 12 // ----------/

// function rectangular(width , height){
// document.write("Final calculation of area of a rectangular" + " " +  +width * height)
// }

// rectangular(20 , 30)


// ---------- // Question 13 // ----------/

// var arr = [52 ,30,56,80,76,16,32];

// function sortedArray(){
//     return arr.sort()
// }

// sortedArray()
// document.write(arr)


// ---------- // Question 14 // ----------/
// var arr = [52 ,30,56,80,76,16,32];

// var add = 0;

// function sum(){
// for (var i = 0; i <arr.length ; i++){
//     // console.log(arr[i])
//     add += arr[i]
// }
// }
// sum()
// document.write(add)

// ---------- // Question 15 // ----------/

// var param = function inner(){
// return typeof inner
// }

// alert(param())


// ---------- // Question 16 // ----------/

// function squreroot(){
//     var userinput = +prompt("Enter number for squre");
//     var power = +prompt("Enter power number")
//     document.write(userinput ** power)
// }

// squreroot()


// ---------- // Question 17 // ----------/

// function dice(){
//     var random = Math.floor(Math.random() *6 +1)
//     document.write("Dice" + random)
// }

// dice()


// ---------- // Question 18 // ----------/

// function numberInvert(){
//     var num = "32243";
//     var breakNumber = num.split("")
//     var reverseNumber = breakNumber.reverse()
//     var joinNumber = reverseNumber.join()
//     document.write(joinNumber)
// }

// numberInvert()


// ---------- // Question 19 // ----------/

// var palindrome = prompt("Enter the palindrome  word").toLocaleUpperCase();


// function checkPalindrome() {
//     var breakWord = palindrome.split("")
//     var reverseWord = breakWord.reverse()
//     var joinWord = reverseWord.join("")

//     if (palindrome === joinWord) {
//         document.write("The word you entered is palindrome ")
//     } else {
//         document.write("The word you entered is not  palindrome ")

//     }

// }

// checkPalindrome()


// ---------- // Question 20 // ----------/


// var str = 'the quick brown fox' ;

// var breakWord = str.split(" ");
// var arr = [];

// function capitalization(){

//     for (var i=0; i < breakWord.length; i++){

//         var arr = breakWord[i].slice(0,1).toLocaleUpperCase()
//         var arr2 = breakWord[i].slice(1).toLowerCase()
//          var concateWord = arr + arr2

//         document.write(concateWord + " ")

//     }

// }

// capitalization()



// ---------- // Question 21 // ----------/




// function findLongestWord(word){
//     var words = word.split(" ");
//     var longest = "";
//     var maxlength = 0;
// for (var i = 0 ; i < words.length ; i++){

// if(words[i].length >= maxlength){
// maxlength = words[i].length
// longest = words[i]
// }
// }
// console.log("Longest word:", longest);
// console.log("Length:", maxLength);


// }

// findLongestWord('W Development Tutorial')



// ---------- // Question 22 // ----------/

// var noOfVowel = 0;
// var vowels = ["e", "i", "o", "u", "a"];

// function findtotalVowels(word){
// var wordBreak = word.toLowerCase().split("");

// for (var i=0 ; i < wordBreak.length ; i++){

//     if(vowels.includes(wordBreak[i])){
//         noOfVowel++;
//     }

// }
// console.log(noOfVowel)

// }

// findtotalVowels('The quick brown fox' )




// ---------- // Question 23 // ----------/


// function findType(value){
// return typeof value
// }

// console.log(findType(123));        
// console.log(findType("hello"));    
// console.log(findType(true));       
// console.log(findType({}));         
// console.log(findType(null));       
// console.log(findType(undefined));  
// console.log(findType(function() {})); 


// ---------- // Question 25 // ----------/
// var count = 0;
  
// function findAlphabet(para , alpha){
//   var paraWord = para.toLowerCase().split(""); 
//   for (var i = 0 ; i < paraWord.length ; i ++ ){
  
//   if(paraWord[i] === alpha){

//     count++
//   }
  
  
// }

// document.write("Total count of ' o ' is " + " " +count)
// }


// findAlphabet('JSResourceS.com' ,  'o' )


// // ---------- // Question 26 // ----------/


// var currentYear = prompt("Enter Current Year");
// var birthYear = prompt("Enter birth Year");

// function ageCalculator(crnt , birth){

//     document.write(`Your age is ${crnt - birth}`)
// }


// ageCalculator(currentYear , birthYear)




// // ---------- // Question 27 // ----------

// var age = prompt("Enter your age");
// var maxAge = prompt("Enter Max Age");
// var snacksPerDAy = prompt("Amount of snacks per day");

// function calculate(){
// var totalAge =  maxAge -age ;
// var maxCalculation = totalAge * snacksPerDAy;
// document.write(`Favourite Snacks : Oreo Biscuit <br />` )
// document.write(`Current age : ${age} <br />` )
// document.write(`Estimation maximumage : ${maxAge} <br />` )
// document.write(`Amount of snacks per day : ${snacksPerDAy} <br />` )
// document.write(`You will need ${maxCalculation} Oreo Biscuits`)
// }
// calculate(age , maxAge)


// // ---------- // Question 28 // ----------


function calcCircumfrence(radius) {
  var circumference = Math.PI * 2*radius;
  console.log("The circumference is " + circumference);
  var area = Math.PI * radius*radius;
  console.log("The area is " + area);
}
calcCircumfrence(5)

// // ---------- // Question 29 // ----------


function ToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}


ToFahrenheit(32)
fahrenheitToCelsius(212)
