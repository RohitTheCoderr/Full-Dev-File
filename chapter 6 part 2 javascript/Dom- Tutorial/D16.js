//  get and set properties

// Attributes:- jo ham HTML ke tag ke andr use karte h like class, id, href, name, type, placeholder, for, value etc en sab ko attributes bolte h
const link =document.querySelector("a");    // a tag select kiya h a tag me se jo pahle a tag hoga usi me ka lega
console.log(link.getAttribute("href"));        // yha hamne bola ki href jo ki ek attribute h hame uski value chahiye jo ki a tag me use hua h 
link.setAttribute("href", "http://google.com");   // ham eski value change bhi kar skte h yha hamne google.com me change kiya h yani jab bhi home pr click hoga to vo google page pr pahuch jayega
// ab eski value dekhe to home se hat kr google.com ho jayega
console.log(link.getAttribute("href"));        // yha hamne bola ki href jo ki ek attribute h hame uski value chahiye jo ki a tag me use hua h 

console.log(link.getAttribute("class"));    // esi tarah class ki value chahiye jo a tag me use hua  h but aap dekhne ki a tag me class attribute use hua hi nhi h isliye null print kr rha h

const inputElement= document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));