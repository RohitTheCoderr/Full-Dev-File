// callbacks, callback HTMLElement, pyramid of doom
// asynchronous pragramming

// ham chahte h ki jo html page me hello world h vo 1 second bad hello rohit jo jaye 
// const heading1 =document.querySelector(".heading1")
// setTimeout(()=>{
//     heading1.textContent= "Hello Rohit";
//     heading1.style.color="violet";
// }, 1000)

// NOTE:- but agr ham ye bi chahe ki eske kuch time bad yani kkitne bhi second hamari marji kitne time bad dusri line bi kuch aur likh jaye to hame same use boi select karna padega fir us pr bi same process legana padega like

// const heading2 =document.querySelector(".heading2")
// setTimeout(()=>{
//     heading2.textContent= "Hello Rohit";
//     heading2.style.color="purple";
// }, 2000)  

// but agr ham chahe ki esi tarah sab line pr esa hi ho kuch to kya ham bar bar ese ase hi karte rhange ji nhi esse hamara time bi lost hoga 
// yha hamne phle set time me 1 sec ka time diya fir dusre me 2 sec ka time diya esi tarah tisre ke liye 3sec dena padega ab maan lo sab ki bich me 2 sec ka gape hona chahiye to hame sab me change krna padega esse to time lag sakta h isliye ham ese kuch esa bi likh sakte h like

// // yha hame time calcute karna nhi padega same time kar do jitne time me aaplo distance chahiye kyoki pahle upar vala settimeout chalenge fir ye andr vala settimeout chalega 
// callback hell:- bolte h ese kyoki callback ke ander callback, callback ke ander callback ...   
// const heading1 =document.querySelector(".heading1")
// const heading2 =document.querySelector(".heading2")
// const heading3 =document.querySelector(".heading3")
// const heading4 =document.querySelector(".heading4")
// const heading5 =document.querySelector(".heading5")
// const heading6 =document.querySelector(".heading6")
// const heading7 =document.querySelector(".heading7")
// setTimeout(()=>{
//     heading1.textContent= "Hello Rohit";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.textContent= "Hello Aryan";
//         heading2.style.color="purple";
//         setTimeout(()=>{
//             heading3.textContent= "Hello Anshu";
//             heading3.style.color="red";
//             setTimeout(()=>{
//                 heading4.textContent= "Hello Vikas";
//                 heading4.style.color="blue";
//                 setTimeout(()=>{
//                     heading5.textContent= "Hello Shubham";
//                     heading5.style.color="green";
//                     setTimeout(()=>{
//                         heading6.textContent= "Hello Smriti";
//                         heading6.style.color="pink";
//                         setTimeout(()=>{
//                             heading7.textContent= "Hello Alvi";
//                             heading7.style.color="yellowgreen"; 
//                         }, 4000)    
//                     }, 1000)    
//                 }, 2000)    
//             }, 3000)    
//         }, 1000)    
//     }, 2000)    
// }, 1000)

 
//  ye hamare liye read krna maintain krna  bahut muskil h  ese aur aasan krne ke liye ek promise hoti h usse bi same kaam hote h 
// lekin hamne ye pahle esliye ese dekhe kyoki hame pta chale ki hamne promise ko kyo use kiya but usse pahle ham yhi kaam function ki help se karte h like

const heading1 =document.querySelector(".heading1")
const heading2 =document.querySelector(".heading2")
const heading3 =document.querySelector(".heading3")
const heading4 =document.querySelector(".heading4")
const heading5 =document.querySelector(".heading5")
const heading6 =document.querySelector(".heading6")
const heading7 =document.querySelector(".heading7")
//  yhi same kam ham esme bi kara skate h finction ke help se 
// function changeText(Element, text, color, time) {
//     setTimeout(()=>{
//         Element.textContent = text;
//         Element.style.color = color;
//     }, time)

// }

// changeText( heading1, "one", "violet", 3000);

// maan lo hamara select kiya hua element exist hi nhi krti to us condtion me ham es fiuntion me if comndition lags sakte h like 
// const heading1 =document.querySelector(".heading")   // jaise hamne yha class heading ko select kiya but esa to koi class hi nhi h yani exist nhi krti h 
// function changeText(Element, text, color, time) {
//     setTimeout(()=>{
//         if (Element) {
//             Element.textContent = text;
//             Element.style.color = color;
//         }
//         else{
//             console.log("Your element does not exist ");
//         }
//     }, time)

// }
// changeText( heading1, "Rohit", "violet", 3000);


// ab ham callback bhi use kar sakte h another line ke liye like
// note:- ham callback ma name kuch  bi de skte h ok
// ek bar ham pahle callabck pass kr dete h but uski value me kuch pass nhi krte fir dekhte h kya hota h 
// function changeText(Element, text, color, time, onSuccessCallback ) {
//     setTimeout(()=>{
//         if (Element) {
//             Element.textContent = text;
//             Element.style.color = color;
//         //    onSuccessCallback();    // aap dekhe esme value nhi dali to ye error show kr rha h es eoor se bachne ke liye ek chhota sa if condition lada dete h
//         if (onSuccessCallback) {  // yha bola ki agr onSuccessCallback pass ho to hi eske abdr chale jisme onSuccessCallback ki callkara rha hu esse error aane se bach sakte h kyoki jab ye if condition true nhi hoga to onSuccessCallback chalega bhi nhi jisse error bi nhi aayega
//             onSuccessCallback();
//         }
//         }
//         else{
//             console.log("Your element does not exist ");
//         }
//     }, time)

// }
// changeText( heading1, "Rohit", "violet", 3000, ()=>{
//     changeText(heading2, "Aryan", "red", 1000, )
// });   // finely hamne onSuccessCallback ki value yha pass kr di ab uski value chali jayegi for next line change ho jayega

// ab ham ese aage bina comment out ke krte h  javascript ki libraryme maan lo kuch exit nhi krti to uske liye bi ham check kr sakte h ham ek aur callback pass krte h  
function changeText(Element, text, color, time, onSuccessCallback, onFailureCallback ) {
    setTimeout(()=>{
        if (Element) {
            Element.textContent = text;
            Element.style.color = color;
        if (onSuccessCallback) {  
            onSuccessCallback();
        }
        }else{
           if (onFailureCallback) {
            onFailureCallback();
           }
        }
    }, time)
}
// changeText( heading1, "Rohit", "green", 3000, ()=>{console.log("HELLO WORLD!!!");}, ()=>{console.log("Heading1 does not exist!!");}); 
// ab esi line ko coding jase likhte h alag alag line me sabke liye
 // console.log("HELLO WORLD!!!");    // ab hame yha HELLO WORLD print nhi karna h valki yhi kaam hame heading2 ke liye karna h

//  pyramid of doom: pyramid of doom isliye bote h kyoki aapko dekhne me ek pyramid ki tarah lag rha hoga  (ye function callback hell h)
changeText( heading1, "Rohit", "rgb(23,243,54)", 3000, ()=>{
    changeText( heading2, "Anshu", "red", 1000, ()=>{
        changeText( heading3, "Vikas", "blue", 5000, ()=>{
            changeText( heading4, "Smriti", "yellow", 2000, ()=>{
                changeText( heading5, "Aryan", "", 1000, ()=>{
                    changeText( heading6, "Shubham", "teal", 3000, ()=>{
                        changeText( heading7, "Manisha", "orange", 4000, ()=>{
        
                        }, ()=>{console.log("Heading7 does not exist!!");});
                    }, ()=>{console.log("Heading6 does not exist!!");});
                }, ()=>{console.log("Heading5 does not exist!!");});
            }, ()=>{console.log("Heading4 does not exist!!");});
        }, ()=>{console.log("Heading3 does not exist!!");});
    }, ()=>{console.log("Heading2 does not exist!!");}); 
}, ()=>{console.log("Heading1 does not exist!!");}); 
    





