// use of rootnode, parent node, childnode, etc
// hame h1 tag ke parent me kuch style change karne ho to 
const h1 =document.querySelector("h1");
console.log(h1);  
const div =h1.parentNode;    // h1 ka parent kon h ek div hi to h isliye maine eska name div hi kr diya
// ab ham eske parent me style kuch bhi kar sakte h 
div.style.color ="red";
div.style.background= "black";

// aur hame agr h1 ke sibling me kuch karna ho to 
const p =h1.nextElementSibling;
p.style.color = "green";
p.style.fontSize = "18px";
p.style.border = "3px solid blue";

