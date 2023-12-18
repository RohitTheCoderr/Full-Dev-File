// ṣelect element using query selector

// NOTE:- ham kisi id ko select ke liye getElementById use krte the ye sirf id ko select krne ke liye hota tha but
//NOTE:- query selector kisi ko bhi select krne ke liye use kar sakte h 
// jaise ham css me kisi class ke liye .classname and id ke lye #idname likhte the  thik esme bhi vesa hi karte h like

// const mainHeading=document.querySelector("#main-heading");      // main-heading ek id tha isliye eske aage # lagaya 
// console.log(mainHeading);     // esse bhi same kaam ho rha h

// esse ham kisi ko bhi select kr sakte h chaliye karte h 
// const header=document.querySelector(".header");
// console.log(header);     // ese print kr ke dekhte h 

// NOTE:- aapko to pata hi h ki ek HTML page me same name ki id sirf ek hi bana sakte h but class ki kitne bhi same name rakh sakte h 
//     ab aaeye dekhte h jab same name ke 1 se jyada class ho to 
const navItem=document.querySelector(".nav-item");
console.log(navItem);     // print kr ke check kiye
// note:- aap dekhe ki ye to sirf ek hi nav-item name ke class item ko liya h but es name ke to ek se jayada item h fir esa kyo
// ans- javascript bydefault ek hi item ko leta h jo use sabse pahle mil jaye aur agar ham chahte h ki ye sabhi same name ke class item ko le to uske liye ham All word use karte h like
const navItems=document.querySelectorAll(".nav-item");
console.log(navItems);
// esse kya hoga  ki aapko sare item mil jayenge ek nodelist me nodelist ek array ki tarah hota h but ye array nhi hota h ese ham details me baat karenge
 


