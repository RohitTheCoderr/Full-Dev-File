// keypress event 
// mouseover event 

// if user press on body than show that user which key is press 

// const body=document.querySelector("body");
// body.addEventListener("keypress", (e)=>{    // aap dekhe ki yha hamnne keypress event lagaya h 
//     // console.log(e);         // ab yha hamne us keypress event ko print kara liya h 
//     console.log(e.key);      // e.key krne se ab event na print hoke vo key print hoga jo ham press karenge
// })

// mouseover event
//  if user mouse button ke upar le kr jaye to eske andr ka msg print ho console me like

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", ()=>{          
//     console.log("mouseover event occurred !!!");
// });

// ek mouseleave event hota h 
// mainButton.addEventListener("mouseleave", ()=>{
//     console.log("mouseleave event occurred !!!");
// });

// en event se aap kuch bhi style kara skate h like background color change fond color fontr sixe ect
// maan lo hame same 39 file ka kaam ek learn more pr karna ho to kar sakte h like

// this fun is use for learn more backgroung color if this same fun is use for both background and text then both color same then text is not visival 
function randomColorGenerator() {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red},${green}, ${blue})`
    return randomColor;
 }

//  this fun is use for text learn more color changing
//  function randomColorlearnMore() {
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     const randomColor = `rgb(${red},${green}, ${blue})`
//     return randomColor;
//  }

 mainButton.addEventListener("mouseover", ()=> {
    const randomColor= randomColorGenerator();
    mainButton.style.backgroundColor=randomColor;

    // const LearnMore= randomColorlearnMore()
    // mainButton.style.color=LearnMore;
})

// NOTE:- AAP DEKHG SAKTE H KI SAME KAAM ES PAR BHI HO RHA H JO HAM 39 FIME ME KIYE THE





