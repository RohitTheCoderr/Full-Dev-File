const colorchange =document.querySelector("#all");
const stopcolor =document.querySelector("form")

const IntervalId =setInterval(()=>{
    const red = Math.floor(Math.random()*126);   
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb =`rgb(${red}, ${green}, ${blue})`;  
    colorchange.style.background= rgb;
}, 1000)

stopcolor.addEventListener("click", ()=>{
clearInterval(IntervalId);
stopcolor=colorchange.style.background;
})