// this keyword

const btn =document.querySelector(".btn-headline");
// function myfun() {
//     console.log("Arrow fuction !!!");
//     console.log("value of this");
//     console.log(this);
// }
// btn.addEventListener("click", myfun); 

//  esme this ki value ye button hi hogi aap espr click kre to this ki value buttun hi print hogi
// chahe aap es function ko ese bana lo ya function ko bahar bana lo like

// btn.addEventListener("click", function() {
//     console.log("Arrow fuction !!!");
//     console.log("value of this");
//     console.log(this);
// })  


// note:- but yahi chij ham arrow function me banate h to ham ethis ki value window milegi like

btn.addEventListener("click", ()=> {
    console.log("Arrow fuction !!!");
    console.log("value of this");
    console.log(this);
})  