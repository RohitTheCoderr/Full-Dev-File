// typeof operator

// data types (primitive data types)
// string "Rohit"
// number 2,4,5,6
// Boolean
// undefined
// null
// BigInt
// Symbol

// let age = 20;
// let firstName = "Rohit";

// console.log(typeof age); // typeof is use for a find operator type you can also use of typeof like
// console.log(typeof 45); // here we want to know 45 is which type of data
// console.log(typeof firstName);
 
// convert number to string
// console.log(age + "");  // after add "" empty string our value is also same 20 but here 20 is which type of data lets come we can check with typeof 
// console.log(typeof (age+"")); 

// same meaning like 
// age = age+ "";  // add "" for converting number to string data type
// console.log(typeof age); // these parantheses after typeof are not required
 


 // convert string to number 

//  let myStr = "34";  // this is string data type you can check like
//  console.log(typeof myStr);

//  but if we want to change number to string then we use a + befofe string data like
// myStr = +"34";   // converting string to number like this
// console.log(typeof myStr);

// convert number to string 2nd way
let age = 20;   // this is number
age = String(age);    // converting number to string by using String
console.log(typeof age);

//  suppose if convert string to number 
let newAge = "23";    // this is string 
newAge = Number(newAge);    // converting string to number by using Number 
console.log(typeof newAge);


