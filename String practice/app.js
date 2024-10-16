// -------- Question no 1 -------------- //

// var firstName =prompt("Enter First Name");
// var lastName =prompt("Enter Last Name");

// var fullName = firstName + lastName;
// alert( "Hello .. " + fullName);


// -------- Question no 2 -------------- //

// var favouriteMobile = prompt("Enter Favourite Mobile");

// document.write(`My favourite phone is : ${favouriteMobile} <br /> Length of String : ${favouriteMobile.length}`);


// -------- Question no 3 -------------- //

// var str = "Pakistan";
// var findValueN = str.indexOf("n");
// document.write(`String ${str} <br /> Index of 'n' :${findValueN}`) 

// -------- Question no 4 -------------- //


// var str = "Hello Wrold";
// var findValueN = str.lastIndexOf("l");
// document.write(`String ${str} <br /> Index of 'n' :${findValueN}`) 


// -------- Question no 5 -------------- //


// var str = "Pakistan";
// var findValueN = str[3];
// document.write(`String ${str} <br /> Index of '3' :${findValueN}`) 


// -------- Question no 6 -------------- //

// var firstName =prompt("Enter First Name");
// var lastName =prompt("Enter Last Name");

// var fullName = firstName.concat(lastName);
// alert( "Hello .. " + " " +fullName);


// -------- Question no 7 -------------- //

// var City = "Hyderabad";
// document.write(`City: ${City} <br /> After Replacment:${City.replace("Hyder" , "Islam")}`)

// -------- Question no 8 -------------- //
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write(message.replace(/and/g , "&"));


// -------- Question no 9 -------------- //

// var str = "472";
// document.write(`value ${str} <br /> Type :${typeof str} <br />`)
// var num =Number(str)

// document.write(`value ${str} <br /> Type :${typeof num} `)


// -------- Question no 10 -------------- //
// var email = "www.facebook.com";

// var emailExtract = email.slice(4);
// document.write(`URL: ${email} <br /> Domain : ${emailExtract}`)

// -------- Question no 11 -------------- //

// var user = prompt("Enter Value");

// var upperCAse = user.toUpperCase();
// document.write(`User Input :${user}<br /> Upper Case: ${upperCAse}` )



// -------- Question no 12 -------------- //

// var user = prompt("Enter Value").toUpperCase();

// var lowerCAse = user.toLowerCase();
// document.write(`User Input :${user}<br /> Lower Case: ${lowerCAse}` )

// -------- Question no 13 -------------- //

// var user = "javascript";

// var userCapitalize = user.slice(0,1).toUpperCase();
// var userSmall = user.slice(1)
// var merge = userCapitalize + userSmall
// console.log(merge);


// -------- Question no 14 -------------- //

// var num = 35.36;
// var str = String(num);
// console.log(str)
// document.write(`Number : ${num} <br /> Result: ${str}`)



// -------- Question no 15 -------------- //
// var a = "3"
// var b = "3"
// var res = a + b;
// document.write(`a is ${a} <br > b is ${b} <br /> a + b is ${res}`)


// -------- Question no 16 -------------- //

// var a = "3"
// var b = "3"
// var res = a - b;
// document.write(`a is ${a} <br > b is ${b} <br /> a - b is ${res}`)


// -------- Question no 17 -------------- //
// var a = ["cake" , "apple pie" , "cookie" , "chips" ,  "patties" ];

// var user = prompt("Enter Value");
// var searchVAlue =a.indexOf(user);

// if(searchVAlue == -1){
// document.write(`${user} is not Available in our Bakery`)
// }else{
// document.write(`${user} is Available in our Bakery`)

// }


// -------- Question no 18 -------------- //

// var userinput1 = prompt("Enter string Value");
// var userinput2 =prompt("Enter string Value");

// if(userinput1 > userinput2){
// document.write(`${userinput1} is greater than ${userinput2}`)
// }else if(userinput1 < userinput2){
//     document.write(`${userinput1} is less than ${userinput2}`)

// }else{
//     document.write(`${userinput1} is Equal to ${userinput2}`)

// }

// -------- Question no 21 -------------- //
// var university = "University of Karachi";
// var unisplitString = university.split( "");
// document.write(unisplitString )

// -------- Question no 22 -------------- //

// var input = "Pakistan";
// document.write(`Last character of input : ${input.slice(-1)}`)

// -------- Question no 23 -------------- //

// var str = "The quick brown fox jumps over the lazy dog";
// str= str.toLowerCase();
// var word = str.split(" ")
// var count = 0;

// for (var i=0 ; i<str.length;i++){
//         if(word[i] == "the"){
//                 count++
//             }
//         }
//         console.log(count)


// -------- Question no 24 -------------- //

var vovel = [a,e,i,o,u]