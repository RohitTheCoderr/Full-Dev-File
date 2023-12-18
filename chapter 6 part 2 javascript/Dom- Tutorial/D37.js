console.log("Script start !!!!!!");
const allButtons=document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num= 0;
        for (let i = 0; i <=1000000000; i++) {
            num +=i;   
        }
        // pahle ye loop vala calculation hoga fir ye log print krega 
        console.log(e.currentTarget.textContent, num);
    })
})
//  note:- yha mai chahta hu ki jo textContent h use print hone me delay lage yani time lage 
//  pahle ham jab button pr click karte the ye turant print kr deta tha eska textcontent but ham yah ese delay karna chahte h uske liye ham for loop ke andar ek calculation daal dete h 
//   jise karne me kuch time lagega fir text Content ko print krega 

//  ham yah bhi ek calculation kr lete h taki late ho like
let outerVar =0;
for (let i = 0; i <=100000000; i++) {
    outerVar+= i;
}
console.log("value of outer variable is ", outerVar);
console.log("Script end !!!!!!");

// NOTE:- aap dekhe button pr click krne ke bad kuch time le kr textContent print krta h fir num ki value 
//  aur agr ham tino button pr jaldi jaldi click ker de to yhi kaam sab pr sequence me time time pr hoga 
//  ye sab behind the seen ho rha h ess kyo ho rha h ese hi ham samjhne 
//  ese ham notebook me samjhte h 

