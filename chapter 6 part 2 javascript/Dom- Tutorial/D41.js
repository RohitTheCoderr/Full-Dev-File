// Event bubbling / event propogation
// event capturing
// event delegation

// const Grandparent=document.querySelector(".grandparent")
// const Parent=document.querySelector(".parent")
// const Child=document.querySelector(".child")


// event bubbling/ event propogation :- jab ham same event child and parent dono pr lagate h to vo event dono pr work karta h like here hamne click event lagaya h aur yadi ham child pr click kre to uske parent pr bhi effect hoga aur agar parent ke bhi parent pr same yhi event laga ho to us pr bhi ye click event kaam karega ese hi bubbling/ propogation event bolte h
// Parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent");
// } )
// Child.addEventListener("click", ()=>{
//     console.log("you clicked on child");
// } )
// Grandparent.addEventListener("click", ()=>{
//     console.log("you clicked on Grandparent");
   
// } )

// document.body.addEventListener("click",(event)=>{
//     console.log("you clicked on body");
// })




//NOTE:-  Browser sabse pahle event capture karta h fir use bubbling karta h yani ham yhi click event lagaye h to ham ydi child pr click kre to browser pahle es child event ke parent ko capturing krega fir us child ko capture krega uske bad ab child ko bubbling krta h uske bad uske parent ko.  
//  structure==>  capture (body > grandparent > parent > child) bubbling (child > parent > grandparent > body)
// event capturing :- ye same upar bala hi stucture h usme 2 event the addEventListener and click but capturing me ek tisra event bi hota h true es true ka matlab hota h kya hame es event ko capture krna h ya nhi ?
// Parent.addEventListener("click", ()=>{
//     console.log("Capturing !!!!! parent");
// }, true )
// Child.addEventListener("click", ()=>{
//     console.log("Capturing !!!!! child");
// },true)
// Grandparent.addEventListener("click", ()=>{
//     console.log("Capturing !!!!! Grandparent");
   
// }, true )

// document.body.addEventListener("click",(event)=>{
//     console.log("Capturing !!!!! body");
// }, true)

// // event bubbling
// Parent.addEventListener("click", ()=>{
//     console.log("bubble parent");
// } )
// Child.addEventListener("click", ()=>{
//     console.log("bubble child");
// } )
// Grandparent.addEventListener("click", ()=>{
//     console.log("bubble Grandparent");
   
// } )

// document.body.addEventListener("click",()=>{
//     console.log("bubble body");
// })




// // event delegation
const Grandparent=document.querySelector(".grandparent");

// Grandparent.addEventListener("click", ()=>{
//     console.log("you click something");
// });

// NOTE:- yha hamne grandparent pr click event lagaya h but ham child pr ya parent click krte h to bi ye message print ho rha h esa kyo 
//  aap dekhe hamne esme capturing event nhi laya h isliye ye kuch bhi capturing nhi krega but jab bubbling ke time me ye to child to patrent bulling krta h na isliye 
// jab child pr click kiye to ye bubble krta hua check krega ki kya child ke parent pr event h to nhi h fir aage move kr jayega fir grandparent pr check krega kya es pr event add h to yha ese event mil jayega jab jaise hi ese es pr event milega to callback se esle child to child function ko call ho jayega fir es pr bi vahi event work karne lagega 

// PRofit:- esse kya profit hoga hame ????
// ans: ham ek pr event laga kar sab pr same kaam kara sakte h  

// example

//  yha ek event ko add kiya h aur use print kiya h dekhte h kya print hota h 
// Grandparent.addEventListener("click", (e)=>{
//     console.log(e);
// });


// esi event ko print krne ke bad hamne dekha ki hamare pass ek object(method) hota h target name ka jo hame vahi deta h jis pr ham click kare (kyoki yha click event laga h isliye)
// Grandparent.addEventListener("click", (e)=>{
//     console.log(e.target);
// });
// NOTE:- aap dekhe e.target karne se ham jis pr bhi click kr rhe h hame vahi mil rhe h  
// ye ham sirf vahi se child ki taraf kr skte h jis pr ye event lagaya h like yha hamne grandparent pr lagaya h to ham sirf grandparent to child tak hi print kra sakte h ya kuch kra sakte h body pr nhi

// .textcontent krne se hame eske text content milne lagenge 
Grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
});

// NOTE:- jab aap parent pr click kr rhe to to aapko oarent and child dono prnit ho rhe h  esa kyo esa isliye kyoki jab ham parent pr click kr rhe to parent ke content ke andr to parent ke sath sath child bhi to h isliye 
//  ydi grandparent ka trext contemt dekhe to grsndparent parent nad child tino mil jayenge 
// ese samjhne ke liye aap sirf target laga kr dekh sakte h fir uske andr kya show kr rha h 
