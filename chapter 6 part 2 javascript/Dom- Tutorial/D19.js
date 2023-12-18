// loop in NodeList (querySelector) 

// NOdelist me kya h ki aap sabhi type ke loop use kr sakte h mtlb ye sab
// simple for loop
// for of loop
// forEach loop          

// for example
// const navItem =document.querySelectorAll("a"); 
// console.log(navItem);        // aap dekhe ki ye Nodelist h

// simple for loop
// for (let i = 0; i < navItem.length; i++) {
//     const navItems = navItem[i];
//     navItems.style.color= "green";
//     navItems.style.backgroundColor= "orange";
     
// }

// for of loop
// for(item of navItem){
//     item.style.border= "2px solid blue";
//     item.style.borderRadius= "5px "; 
// }

// forEach loop
// navItem.forEach((navItems)=> {
//         navItems.style.backgroundColor= "#1ff1f0";    
//         navItems.style.color="red";
//         navItems.style.fontWeight="bold";
//         navItems.style.border="3px solid black";
//     });


    // NOTE:- So you can see that different between HTMLCollection and Nodelist by using loop spacialy forEach method

    // but aap chahe to esme bhi aap Nodelist ko array me change kr sakte h jaise usme kiya tha like
    let navItem =document.querySelectorAll("a");         // pahle ahm ese const me le rhe the but yha ham let se lenge kyoki same variable name ko do bar use karenge isliye const ko to kar nhi sakte h na 
navItem = Array.from(navItem);       // esa krne se ye ek array me change ho gya 
console.log(Array.isArray(navItem));    // check change hua ya nhi
// NOTE:- fir aar array me change krne ke bad aap array ka koi bhi kaam kara sakte h 