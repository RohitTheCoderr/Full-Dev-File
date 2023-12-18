//  add todo list submit

const todoForm =document.querySelector(".form-todo")
// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("submit event");
// });

// NOTE:- yha ham todo mekuch likh kar enter ya add todo pr click kerte h to page refrase ho rha h console me kuch nhi ho rha isliye ham esme e name ka object pass kiya aur ek hamare js me ek preventDefault() method hota h jisse page refrase hone se rokta h 
// note:- ye yaad rakhe ki ham preventDefault ko bahut use karte h most usefull method h 

// mai kya chahta hu ki ham agr ye todo-form ke abdr input jiska type text h agr usme ham likhe aur agr ham use submit(add todo) kare to vo todo-list me add ho jaye
//  eske liye pahle ham text input ko select kar lete h 

const textTodoInput= document.querySelector(".form-todo input[type='text']")
// console.log(textTodoInput);   // ese print kr ke dekhte h select hua h ya nhi 

// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log(textTodoInput.value);     //  yha maine ye kiya h ki jaise hi mai kuch text input me type karu aur use add todo kru(enter kru)  to uski value yha aa jaye bas
//      textTodoInput.value ="";            // ye line esliye likha kyoki mai chahta hu ki jaise hi add todo kru to text input se value clear ho jaye but console me to add ho hi gya tha na 
// });


// but ab mai kya chahta hu ki jaise hi mai text input me kuch likh kr add todo kru to ye text value  todo-form me ek new li me store ho jaye 
// uske liye hame text input ko kisi me store krna padega fir aage karte h 

const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText= textTodoInput.value;     //  yha maine ye kiya h ki jaise hi mai kuch text input me type karu aur use add todo kru(enter kru)  to uski value yha aa jaye bas
    const newLi = document.createElement("li")
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>    
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
newLi.innerHTML =newLiInnerHtml;
// console.log(newLi);    // etna hone ke bad ye newLi ko print kr ke dekhte h ho kya rha h 
// ḥame ese print nhi krana valki ese append krana h todo-list me isliye hame upar hi todo-list ko select kr lete h 
todoList.append(newLi);
     textTodoInput.value ="";            // ye line esliye likha kyoki mai chahta hu ki jaise hi add todo kru to text input se value clear ho jaye but console me to add ho hi gya tha na 
});

// ab ham us me done remove function bi lagana chahte h 
// yha hamne todoList pr addeventlistener lagaya h ab ham todoList ke andr jis pr bhi click krenge vo print ho jayega 
// todoList.addEventListener("click",(e)=>{
//     console.log(e.target);    // e.target  krne ye hoga ki ham jis pr bhi click karenge vo print ho jayega 
// })

// ab ham chahte h ki agr use done pr click kre to uska class list aa jaye uske liye ek method(property) hoti h classList 
// todoList.addEventListener("click",(e)=>{
//     console.log(e.target.classList);    //  aap dekhe eske class list aa rhe h
// })

//  but hame eski classlist nhi dekhni h
// todoList.addEventListener("click",(e)=>{
//     // check if user clicked on done button
//     if(e.target.classList.contains("done")){
//         console.log("You clicked on done button");
//     };
//     // check if user clicked on remove button
//     if(e.target.classList.contains("remove")){
//         console.log("You clicked on remove button");
//     }  
// })

//  ab hame kya karna h ki done button ko span tak pahunchana h usliye liye ham done button ke parent(div) ke sibling yese pahuch sakte h ya fir todo-list ke child(li) ke span tak bahut tarika h  
//  and usme ye if condition lagana ho to 
todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("done")){
        const LiSpan= e.target.parentNode.previousElementSibling;
    //    console.log(LiSpan);      // ab dekhe ki agr ham done pr click kre to span mil rha h 
    LiSpan.style.textDecoration = "Underline";     // ab jaise hi done pr click kre to span me jo text h us pr under line aa jayega ab ese tarah es pr kuch bhi style add kr sakte h like
    LiSpan.style.color ="green"

    };   
    // check if user clicked on remove button
    //  then remove ho jaye vo li  eske liye kya kar sakte h ki hame remove button ke parent ke parent ko delete(remove) kar denge  list se
    if(e.target.classList.contains("remove")){
       const targetLi = e.target.parentNode.parentNode;    
       targetLi.remove();  

       }  
})

// note:- cpmplete arrange this file all item in next file 

//NOTE ! NOTE ! NOTE !:-  PART-2 IS COMPLETE BUT WE MAKE A TODO PROJECT BY USING PART -1 AND -2 



