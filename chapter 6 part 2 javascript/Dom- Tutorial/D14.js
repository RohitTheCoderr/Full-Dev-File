//  change text
// textContent and innerText
// Note:- // textContent property se aap text change kr sakte h 
const mainHeading=document.getElementById("main-heading");
console.log(mainHeading.textContent);       // yha textContent se ham main-heading me kya text h vo dekh sakte h . laga kar like this
mainHeading.textContent = "This is something else";      // yha ham textContent hi help se eski text bhi change kar skte h like this
console.log(mainHeading.textContent);     // ab ham text dekhe to change ho gya display pr bhi
// NOTE:- HAM kisi variable ki value bhi to ese hi change karte the na ab ye real me kar rhe h 

// NOTE:- eske bare me kuch aur jante h basic sa uske liye HTML page me plan is ke item me ek <span>Hello</span> add karte h ese span me rakha h
// aur sath hi ham thoda sa style add kar dete h vahi par jisme ham ese display none kar denge jisse ye display pr nhi dikhega  just samjhne ke liye bas 
const plan =document.getElementById("plan");
console.log(plan.textContent);    // ab eski text check karte h ye to display pr nhi dikh rha h but console me dikh rha h mtlb ye jo textContent h ye sara ka sara text dekhayega 
// innertext bhi same h 
console.log(plan.innerText);       // but ye jo display pr dikh rha h sirf vahi dega
