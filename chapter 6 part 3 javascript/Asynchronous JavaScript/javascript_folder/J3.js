// setInterval

// console.log("Script start");
// setInterval(()=>{
    // let total =0 ;
    // for (let i = 0; i <100000000; i++) {
    //     total += i;
    // }
//     console.log(total);
//     console.log(Math.random(3));
// }, 1000)
// console.log("Script End!");

// real example dekh lete h setInterval ki

// NOTE:- hame body me background color change karn h random hi setInterval se

const body= document.body;

// setInterval(()=>{
//     const red = Math.floor(Math.random()*126);    // yha hamne ek 0 se 126 tak random num le liya h aur ye kaam continue hota rahega jo red variable me store hota rahega esi tarah
//     const green = Math.floor(Math.random()*126);
//     const blue = Math.floor(Math.random()*126);
//     const rgb =`rgb(${red}, ${green}, ${blue})`;  // jise rgb me store kr diya jaise ham css me rgb color use karte h usi series me 
//     // console.log(rgb);   // pahle dekh lete h rgb ki value aa rhe h ya nhi 
//     body.style.background= rgb;
// }, 1000)      // hamne yha time bi de diya ki kitne tine bad ye color change honge(yani rgb ki value milegi)
// 1000 m/s = 1s

// hame pata h ki ye method hame ek id return kr ke deta h jise ham kisi variable me store kr sakte h like
// usi ke help se ham es color ko chnage hone se rok sakte h 
// kisi button ya kuch aur pr bi like
const stopbutton = document.querySelector(".btn");
// console.log(stopbutton);   // dekhne ke liye ki select hua ya nhi 

const IntervalId =setInterval(()=>{
        const red = Math.floor(Math.random()*126);   
        const green = Math.floor(Math.random()*126);
        const blue = Math.floor(Math.random()*126);
        const rgb =`rgb(${red}, ${green}, ${blue})`;  
        body.style.background= rgb;
    }, 1000) 

stopbutton.addEventListener("click", ()=>{
    clearInterval(IntervalId);
    stopbutton.textContent=body.style.background;         // yha textContent isliye likhe kyoki ham chahte h ki jis bhi color pr ruk gya h color change hona uska rgb rpitn ho jaye yani show kre es pr ok
})


