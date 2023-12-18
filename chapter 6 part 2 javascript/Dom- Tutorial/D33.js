// intro to events  
// event:=  event means kuch kaam hona like user ne us pr click kiya ham chahte h ki us button pr click hone se kuch action perform ho to use hi event bolte h event me kuch bhi ho sakta h like
// button press
// mouse over etc

//  we have a three way for add event 
// 1st way
// we add click in html page  like you go in html page ke learn more button ke line no=51 me use dekhne ke liye usme javascript ka code likh diya
//  aap dekh sakte h ki jaise aapne learn more pr click kiya console me vo msg print ho rha h jitne bar karte h utne bar ho rha h
// NOTE:- but ye tarika ab ham use nhi krte h kyoki ye tarika bahut purana h 

// 2nd way
//  we can add click event in js file like here
const btn =document.querySelector(".btn-headline")    // learn more ke class ko select kiya 
// console.log(btn);    // pahle ham dekh lete h ki ye class select hua h ya nhi
// console.dir(btn);    // aagr ham ese ek ibject ki tarah dekhna chahe to dir use karna padega 

// btn.onclick = function () {     // hamne es function me ek funnction add kr diya aur es me function me ek message print kr diya 
//     console.log("you clicked me !!!!!!");
// }
// note:- yani jase hi learn more pr koi click karega console me ye mesaage print hoga like u can see

// NOTE:-  ham ye bi tarika use nhi kr sakte h kyoki click event me ek bar se jayada assign nhi kr sakte h

// 3rd way
// in  the 3rd way we have a method --- addEventListener    
// function clickme() {
//     console.log("you clicked me !!!");
// }
// btn.addEventListener("click", clickme)   // hame esa onclick likhne ki jarurat nhi h ham sirf click likh sakte h aur sath me ek function ko add kiya jo es pr click hote hi ye function ke andar jo bhi h vo chalega 
// aapko esme function define krne ki bhi jarurat nhi aapo directly yhi pr function bana sakte h like
btn.addEventListener("click", function () {
    console.log("you clicked me !!!");
})     

//  ahm esi tarah arrow function bhi use kr sakte h
btn.addEventListener("click", ()=> {
    console.log("Arrow fuction !!!");
})   
//  esa karne pr bhi vahi kaam karega u can check in console