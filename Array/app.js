// ------------- // Question 1 // -------------- //

// var studentNames = [];

// ------------- // Question 2 // -------------- //

// var studentNames = new Array();

// studentNames[0] ="Nadeem"
// studentNames[2] ="Ali"

// ------------- // Question 3 // -------------- //

// var studentNames = ["Nadeem", "Ali", "Kareem", "Noor"];


// ------------- // Question 4 // -------------- //

// var num = [1,2,3,4,5,6,7,8,9];


// ------------- // Question 5 // -------------- //

// var bool = [true , false];


// ------------- // Question 6 // -------------- //

// var arr = [1,2,3,"Muhammad" , "Arsalan" , 9, true , "Azan" , false];


// ------------- // Question 7 // -------------- //

// var networkMobile = ["Zong" , "Telenor" , "Jazz" , "Warid" , "Ufone"];

// ------------- // Question 8 // -------------- //

// var arr = [ "SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"]

// for (var i = 0; i < arr.length; i++){
// document.write(i +" ) " + arr[i] + "<br />")
// }

// ------------- // Question 9 // -------------- //
// document.write(`<h1>Top Movies of 2015 </h1>`)

// var arr = []
// arr[0] = "Avenger";
// arr[1] = "Spectre";
// arr[2] = "Jurassic World";
// arr[3] = "Inside out";

// for (var i = 0; i < arr.length; i++){
//     document.write(i +" ) " + arr[i] + "<br />")
//     }

//     document.write(`<h1>Length Of the Array: ${arr.length} </h1>`)


// ------------- // Question 10 // -------------- //
// var arr = ["Audi" , "Volvo" , "Ford" , "LAmborghini"];

// document.write(`<h1>Favourite Car </h1>`)

// document.write(arr + "<br /> <br />")
// document.write(`First index of the array : 0 <br />`)
// document.write(`Car at First index of the array : ${arr[0]} <br />`)
// document.write(`First index of the array : 3 <br />`)
// document.write(`Car at First index of the array : ${arr[3]}`)


// ------------- // Question 11 // -------------- //

// var arr = ["Michael" , "Jhon" , "Tony"];
// var arr2 = [320 , 230 , 480] ; 

// var totalMarks = 500 ;
// for (var i = 0; i < arr2.length; i++){
//      var  percentge = arr2[i] / totalMarks *100
     
// document.write(`Score of ${arr[i]} is ${arr2[i]}. Percentage : ${percentge}% <br>`)

// }  ;


// ------------- // Question 12 // -------------- //
// var arr = [ "blue" , "red" , "Orange"]

// var user = prompt("Enter the color name");
// arr.unshift(user)
// arr.push(user)
// document.write(arr)

// for (var i = 1; i <= 5 ; i++ ){
//      var user = prompt("Enter Color name")
//      arr.push(user)
// }
// document.write(arr)

// arr.shift();
// arr.pop();


// ------------- // Question 13 // -------------- //

// var score = [320 , 230 , 480 , 120];

// var a = score.sort();
// document.write(a)


// ------------- // Question 14 // -------------- //
// var fruits = ["strawberry" , "apple" , "orange" , "banana"]; 

// var srt = fruits.sort()

// document.write(srt)

// ------------- // Question 15 // -------------- //

// var city = ["karachi" , "lahore" , "islamabad" , "quetta" , "peshawar"];

// var cityCopy = city.slice(2,4);
// document.write(cityCopy);

// ------------- // Question 16 // -------------- //

// var arr = ["this" , "is" , "my" , "cat"];

// var arrJoin = arr.join();

// document.write(arrJoin + "<br />")
// document.write(arr.toString())

// ------------- // Question 17 // -------------- //

// var arr = [];
// arr.push("Keyboard")
// arr.push("Mouse")
// arr.push("Printer")
// arr.push("Monitor")

// for (var i = 0; i< arr.length ; i++){
// document.write("Output : " +arr[i] + "<br />")
// } 


// ------------- // Question 19 // -------------- //
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option>Select a manufacturer</option>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write(`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`);
}

document.write("</select>");

// ------------- // Question 20 // -------------- //


var multidimensionalArray = [[], [], []];


// ------------- // Question 21 // -------------- //


var matrix = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   