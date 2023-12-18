// we take a another example of click event
//  in the example we want to if user click  on body(any place in tha page) than change body background 

const mainButton=document.querySelector(".btn");
const body= document.body;
const currentColor= document.querySelector(".current-color")
// console.log(currentColor);

 function randomColorGenerator() {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red},${green}, ${blue})`
    return randomColor;
 }
mainButton.addEventListener("click", ()=> {
    const randomColor= randomColorGenerator();
    body.style.backgroundColor=randomColor;
    currentColor.textContent =randomColor;
})


