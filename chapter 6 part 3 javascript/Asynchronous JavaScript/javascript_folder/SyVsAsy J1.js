// synchronous programming vs asynchronous programming 
// synchronous programming => jitne bhi abhi tak hamne programming ki h vo sab synchronous programming  hi h like
// console.log("script start");

// for (let i = 1; i < 1000; i++) {
//    console.log("inside for loop");
    
// }

// console.log("script end");
// NOTE:- synchronous programming me line by line code execute hota h yani es example me dekhe to pahle script start ki line execute hogi fir for loop ki uske bad me script end ki line hogi 
// esme bina ek line execute huye bina dusri line execute nhi ho sakti ese hi ham synchronous programming bolte h 
// ese block code bhi bolte h kyoki esme bine ek line ke dusri line execute hone nhi deti h isliye 

// isliye jab aapse koi puchhe ki javascript kon si programming language h to bolan synchronous programming and single threaded h
// but ham to javascript me asynchronous programming kr sakte h 

// Asynchronous programming: =>

// setTimeout :- ye ek method h jisme ham time fixed kr sakte h like

// console.log("script start");
// function hello() {
//    console.log("Hello world!");
// }
// setTimeout(hello, 1000)       // yha hello fun call ho rhi h aur sath me ek time bhi diya h 1000 milisecond= 1 second  yani hamara hello name ka fun 1 second bad run hoga 
// console.log("script end");

// ham ese ese bhi likh sakte h shortcut me 
// console.log("script start");
// setTimeout(()=> {
//    console.log("inside setTimeOut");
// }, 10000)        // yha arror fun and time delay bhi laga diya esi method me 
// console.log("script end");

// NOTE:- AB aap dekhe ki hamara code to line by line execute hona chahiye but ye to pahle script start bali line chali fir script end vali uske bad hello function chali 
// yha hamne esme time set kr ke code ko delay kara diya jisse ye Asynchronous ban gya h yani ham esme Asynchronous bi kar sakte h kuch method ki help se  

// NOTE:- ye code esa kyo ho rha h ye samjhte h notebook me

// kuch aur add karte h upar vale code me fir use execute karte h 
console.log("script start");
setTimeout(()=> {
   console.log("inside setTimeOut");
},0)     
for (let i = 0; i < 100; i++) {
   console.log("........");
}
console.log("script end");

// Ab ham ese krke dekhte h notebook me






