//  ---------------- // Question 1 // --------------- //

// for (var i = 1 ; i <= 5; i++){
// document.write("Hello World..." + "<br />");
// };

//  ---------------- // Question 2 // --------------- //
// for (var i = 1 ; i <= 10; i++){
//     document.write(i + "<br />");
//     };

//  ---------------- // Question 3 // --------------- //
// var user = parseInt(prompt("Enter Lenght of the Table"));
// var user2 = parseInt(prompt("Enter Table Number"));
// for (var i = 1 ; i <= user; i++){
//         document.write(`${user2} x ${i} = ${user2*i} <br />`)
//         };

//  ---------------- // Question 4 // --------------- //
// var arr = ["Nokia" , "Samsung" , "Apple" , "Sony" , "Huawai"];

// for (var i = 0 ; i < arr.length; i++){
//     document.write(arr[i] + "<br />");
//     };

//  ---------------- // Question 5 // --------------- //

// var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

// for (var i = 0 ; i < fruits.length; i++){
//     document.write(fruits[i] + "<br />");
//     };

//     document.write(`Element at index 0 is ${fruits[0]} <br />`)
//     document.write(`Element at index 1 is ${fruits[1]} <br />`)
//     document.write(`Element at index 2 is ${fruits[2] } <br />`)
//     document.write(`Element at index 3 is ${fruits[3]} <br />`)
//     document.write(`Element at index 4 is ${fruits[4]} `)


//  ---------------- // Question 6 // --------------- //
// var user = prompt("how many item number")
// document.write(`Number of item is ${user} <br />`)
// for (var i = 1; i <= user; i++){

//     var input = prompt("Enter item")
// document.write(input + "<br />")
// }

//  ---------------- // Question 7 // --------------- //

// for (var i = 1; i <= 15; i++){
//     document.write( "Counting" + i );
//     };

// for (var i = 15; i > 0; i--){
//     document.write("Reverse Counting" + i);
//     };



// for (var i = 0; i <= 20; i=i+2){
//     document.write(i + "<br />");
//     };



// for (var i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write("Odd number is " + i + "<br />")
//     }
// };

//  ---------------- // Question 8 // --------------- //
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userr = prompt("Enter item");
// var found = false;
// for (var i = 0; i <arr.length ; i++ ){
//     if(arr[i].toLowerCase() == userr.toLowerCase()){
//         found = true
//         document.write(`Your item found`)
//         break
//     }
    
// }

// if(found == false){
//     document.write(`Your item is not found`)

// }


//  ---------------- // Question 9 // --------------- //
// var num = [24, 53, 78, 91, 12]
// var largestNumber = 0

// for (var i=0; i < num.length ; i++){
// if(num[i] > largestNumber){
//     largestNumber = num[i]
// }
// }
// document.write(`The largest number is ${largestNumber}`)\\


//  ---------------- // Question 10 // --------------- //

// var num = [24, 53, 78, 91, 12] 

// var samllesNumber = num[0]

// for (var i=0; i < num.length ; i++){
// if(num[i] < samllesNumber){
//     samllesNumber = num[i]
// }
// }
// document.write(`The Smallest number is ${samllesNumber}`)


//  ---------------- // Question 11 // --------------- //
// var num = [24, 53, 78, 91, 12]; 
// var largestNumber = 0;
// var samllesNumber = num[0];

// for (var i=0; i < num.length ; i++){
// if(num[i] < samllesNumber){
//     samllesNumber = num[i]
// }else if(num[i] > largestNumber){
//     largestNumber = num[i]

// }
// }
// document.write(`The Smallest number is ${samllesNumber} <br />`)
// document.write(`The largest number is ${largestNumber}`)

//  ---------------- // Question 12 // --------------- //

// for (var i = 5; i <=100 ; i= i+5){
// document.write(i + "<br />")
// }

//  ---------------- // Question 13 // --------------- //


// var students = ["Ali", "Sami", "Taha", "Inam"]; 
// var scores  = [58, 73, 89, 90];

// for (var i = 0; i < students.length ; i++){
//     document.write(students[i] + scores[i]  +  "<br />")
//     }


//  ---------------- // Question 14 // --------------- //

// var scores = [12, 45, 3, 22, 34, 50];


// var stopValue = parseInt(prompt("Enter stop value:"));

// for (var i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
//     if (scores[i] === stopValue) {
//         break;
//     }
// }

//  ---------------- // Question 15 // --------------- //

// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

//  ---------------- // Question 16 // --------------- //

// var num = parseFloat(prompt("Enter a number:"));

// while (num > 0) {
//     console.log(num);
//     num -= 0.5;
// }

//  ---------------- // Question 17 // --------------- //

// for (var i=0; i<= 20; i++){
// if(i % 2 == 0){
// document.write(i + " Even Number" + "<br />")
// }else{
    
//     document.write(i + " Odd Number" + "<br />")
// }
// }


//  ---------------- // Question 18 // --------------- //
// var num = 1;
// for (var i=1 ; i <= 7; i++){
//     if(i % 2 !== 0 ){
//   num *= i
//     }
// }
// document.write(num)


//  ---------------- // Question 19 // --------------- //
// for (var i = 7; i >= 1; i--) {
//     for (var j = 0; j < i; j++) {
// document.write("*")
//     }
// document.write("<br />")

// }


//  ---------------- // Question 20 // --------------- //

// for (var i = 0; i<=5 ; i++){
//     for (var j = 0; j <=5 ; j++){
//     document.write("*")
// }   
// document.write("<br />")
// }


// for (var i = 1; i <=5 ; i++){
//     for (var j = 1; j <= i ; j++){
//     document.write("*")
// }   
// document.write("<br />")
// }


// for (var i = 5; i >= 1; i--) {
//     for (var j = 0; j < i; j++) {
// document.write("*")
//     }
// document.write("<br />")

// }
