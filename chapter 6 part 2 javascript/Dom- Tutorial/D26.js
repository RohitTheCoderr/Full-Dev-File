// ab ham bat karte h ki kise ham html element ko create kar sakte h javascript ki help se
// eske liye ham pahle kuch add krte h html page pr usi me ham kaam karenge 
//  ham section tag ke angr form ke bad ek ul jiska class todo-list hoga add karte h fir use kuch style kr dete h 
// ====================================================

// Add new HTML elements to page

// innerHTML to add html element
// -----------------------------------
// maan lo hame todo-list ke innerhtml ko dekhna h to kese dekh sakte h 
const todoList = document.querySelector(".todo-list")
console.log(todoList);  // ese dekh sakte h 
// maan lo hame esme kuch add karna h yani eske innerhtml me kuch add karna h to kese kr skate h 
// todoList.innerHTML = "<li>New Todo </li>";    // but ye to innerhtml me pure ke pure html ko change kr deta h 
//  but mai chahta hu ki ye jo pahle vala html h vo bhi rhe aur sath me ek aur innerhtml add ho  jaye to kese krenge dekhte h 
todoList.innerHTML = todoList.innerHTML + "<li>New Todo </li>";
// aap dekhe ki pahle vala to innerhtml h hi sath me ek new innerhtml bhi add ho gya h ese ham short cut me bhi likh sakte h like
todoList.innerHTML += "<li>New Todo2 </li>";

// NOTE:- ABOUT INNERHTML:- hame ye method nhi use karne chahiye for adding new innerhtml kyoki esse browser sirf ese add nhi kr rha h balki purana inerhtml ke html ko bhi render kr rha h isliye add ke lioye hame ese use nhi karna chahiye
// when you should use it , when you sholud not
// upr ye line ka mtlb ye h ki kab ese use krna chahiye or kab nhi 
// ans:- jab aapko pura ka pura innerhtml change karna ho to aap ese use kare agr new innerhtml add karna h0o to ese use na kare 

