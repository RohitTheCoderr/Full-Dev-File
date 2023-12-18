// string concatenation
// concatenate means addtion
// let string1 = "Rohit";
// let string2 = "Thakur";

// let fullName = string1 + " " + string2; //here " " is use for space between both string 
// console.log(fullName);

 let str1 = "23"; // this is string
 let str2 ="12";    // this is string
  let newStr = str1 + str2;  // dono ko concatenate karne ke bad bhi vo string hi raha
  console.log(newStr);
  console.log(typeof newStr);

//    lekin agar mai string to number me change kar du + sign laga kar jaise pichhle 07.js me kiya tha
 
 newStr = +str1 +  +str2;  // here + is use before variable name for convert string to number 
 console.log(typeof newStr);
 // we can change aslo like this 

 newStr = Number(str1 + str2);  // this is 2nd way for change string to number by using to Number like this  
 console.log(typeof newStr);

let num1 = 2345;  //this is number
let num2 = 3342;      // this is number
let newNum = String(num1 + num2) ;   // here chnage number to string  
console.log(typeof newNum);

