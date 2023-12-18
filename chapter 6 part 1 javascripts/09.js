//  templete string 

 let age = 20;
 let firstName = "Rohit";

 // I want to print like this formate
 // my namne is rohit and my age is 20 year 

//  let aboutMe = " My name is " + firstName + " my age is " + age+ " year";
//   console.log(typeof aboutMe);
//   console.log(aboutMe);
// note but this formate is so lenthy but we make easy by using template string like 

// using template string

let aboutMe = `my namne is ${firstName} and my age is ${age} year`;  
console.log(aboutMe);
//  note this is easy by using template string.
// note template string is using only under the `` (`` ye keyword pr tab ke upar me) symbol and ${}