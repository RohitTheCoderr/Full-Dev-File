// loop     in HTMLCollection (getElenemtBy...Name)
// type  
// simple for loop
// for of loop
// forEach loop

// but we can't use forEach method(loop) to iterate through HTMLCollection

// agr ham variable ki length find kr sakte h to eska mtlb ham simple loop laga sakte h 
// const navItem =document.getElementsByTagName("a");
// console.log(navItem.length);      // length find ho rha h yani ham simple for loop laga sakte h 
 // simple for loop
// for (let i = 0; i < navItem.length; i++) {
//     const navItems = navItem[i];           // hamne ek loop chalaya fir loop ki help se ek ek item ko ek variable me store kara liya
//     navItems.style.backgroundColor= "#1ff1f0";    // fir us variable me style add kar rhe h 
//     navItems.style.color="red";
//     navItems.style.fontWeight="bold";
// }


// for of loop :- ab ye loop laga kar dekh lete h ye to aur bhi simple hoti h use karne me like
// for(let navItems of navItem){
//     navItems.style.backgroundColor= "#1ff1f0";    // fir us variable me style add kar rhe h 
//     navItems.style.color="red";
//     navItems.style.fontWeight="bold";
//     navItems.style.border="3px solid black";
//     navItems.style.borderRadius="7px";
//     navItems.style.padding="3px";       
// }

// note:- again repeat you can't use of forEach loop in HTMLCollection (get method) like
// navItem.forEach((navItems)=> {
//     navItems.style.backgroundColor= "#1ff1f0";    // fir us variable me style add kar rhe h 
//     navItems.style.color="red";
//     navItems.style.fontWeight="bold";
//     navItems.style.border="3px solid black";
// });

// aap dekhen ki error show ho rha h 
// but aap esme ek kaam kar skte h ye navItem kya h ye ek HTMLCollection h na aap es HTMLCollection ko change kr sakte h kese karenge dekhe
//   eske liye ek method hota h dekhe

let navItem =document.getElementsByTagName("a");         // pahle ahm ese const me le rhe the but yha ham let se lenge kyoki same variable name ko do bar use karenge isliye const ko to kar nhi sakte h na 
navItem = Array.from(navItem);       // esa krne se ye ek array me change ho gya 
console.log(Array.isArray(navItem));  //ese check krne ke liye ki ye array h ya nhi
// ab ham forEach loop laga sakte h kyoki ab ye array me change ho chuka h isliye
navItem.forEach((navItems)=> {
        navItems.style.backgroundColor= "#1ff1f0";    // fir us variable me style add kar rhe h 
        navItems.style.color="red";
        navItems.style.fontWeight="bold";
        navItems.style.border="3px solid black";
    });
    

    // NOTE:- ye to hamne HTMLCollection me dekha h ab ham yahi NodeList le dekhte h jo ki next file D19,js me dekhenge so lets go