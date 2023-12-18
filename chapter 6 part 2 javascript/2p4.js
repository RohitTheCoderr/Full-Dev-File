//  CHAMGE DATATYPE USING let

// console.log(firstName);      // here we gave print comand firstName before initialize
// msg:- Uncaught ReferenceError: Cannot access 'firstName' before initialization

let firstName = "Mr. Rohit";
console.log(firstName);     // here we gave print comand after initialization


// kuch aur kr ke dekhte h like
console.log(secName);      // here we want to print of secName value pahle hi print karne ki koshis ki to 
//  msg:- Uncaught ReferenceError: Cannot access 'secName' before initialization
let secName;              // here we are not assign a value of this secName 
// console.log(secName);      // here we want to print of secName value 
//  msg:- undefined  aa rha h 
