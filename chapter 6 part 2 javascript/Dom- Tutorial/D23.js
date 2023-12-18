// index1 me hmne sikha tha ki paerentNOde, childNOde, sibling ye sab kya hote h aur uska use kese karenge apne file me or javascript me 
// mai chahta hu ki email ke input node se header ke div ke andr jo class logo h uske style me kuch change karne ko aaiye dekhe ki kese karenge node ki help se
// const email = document.querySelector("#email");
// console.log(email);
// const div= email.parentNode;
// console.log(div);
// const form= div.parentNode;
// const section = form.parentNode;
// const body = section.parentNode;
// console.log(body);
// const header= body.childNodes[1]; 
// console.log(header);
// const nav =header.childNodes[1];
// const h2 =nav.childNodes[1];
// h2.style.color = "green";
// h2.style.fontStyle = "italic";
// h2.style.font = "bold";

// NOTE:- TO aapne dekha ki ham ek node se kahi bhi traverls kar sakte h ese  aur easy bana sakte h like

// const Email = document.querySelector("#email");
const rootNode =document.getRootNode();
console.log(rootNode);
const childTochild =rootNode.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[1];     // chain create kar ke bhi traverls kar sakte h 
console.log(childTochild);
childTochild.style.border = "3px solid brown";
childTochild.style.borderRadius = "50%";
childTochild.style.padding = "15px";


const body=document.body;    // ham direct body tak bhi pahuch sakte h 
console.log(body.childNodes[1]);  // fir uske child
body.style.backgroundColor = "black";













