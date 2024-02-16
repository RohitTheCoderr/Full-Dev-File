//  prototype   (function)

function hello(name){
    console.log("Hello", name);
}

hello("Rohit");

// NOTE:- Javascripts me function ko aap ek function and object ke tarah wehave kar sakte h yani aap ese object ke tarah bhi use kar sakte h ye 
// function and object ka combo h 

// example 

hello.myOwnProperty = "very unique item" ;                   // ham object me bhi esi tarh hi key value add karte the aur es function me bhi 
console.log(hello.myOwnProperty);                            // ab ham eski value bhi print kara skte h object jaise like this

// NOTE:- fact of function 
// 1) function me bhi name property ----> tells function name ke liye
// 2) function me bhi ham call, bind, apply property laga sakte h  
// 3) only function have a prototype like

// console.log(hello.prototype);         // aap dekhenge ki constructor aa rha h jiske endr ek function h 
//  but ye prototype sirf function me hi hota h or na hi ye object ke pass hota h aur na ki array ke pass like ham check bhi kar sakte h 

if (hello.prototype) {                         // yah hamne ek hello function  me ek condition lagaya jisme bola agr prototype h to 
    console.log("prototype is present");      //ye message print kara de
}
else{
    console.log("prototype is not present");     // na ho  to ye message 
}
// note:- function me prototype hote h isliye ye present print kr rha h  

// ab ham yhi chij ham ek object me aur ek array me check karte h 

const object= {               // this is object 
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

if (object.prototype) {                         // yah hamne object me ek condition lagaya jisme bola agr prototype h to 
    console.log("prototype is present");      //ye message print kara de
}
else{
    console.log("prototype is not present");     // na ho  to ye message 
}


const array= ["Rohit", "shyam", "sohan"];

if (array.prototype) {                         // yah hamne array me ek condition lagaya jisme bola agr prototype h to 
    console.log("prototype is present");      //ye message print kara de
}
else{
    console.log("prototype is not present");     // na ho  to ye message 
}

//  NOTE:- aap dekhenge ki object and array me note present dikha rha h kyoki array and object me prototype hota hi nhi h isliye 
//  ek bat aap dyyan rakhna pichhle kuch file me hamne proto or [prototypr] ki bat ki thi vo alag chij h aur ye alag chij ok ye prototype h na ki [prototype] 
//  es prototype sirf function me hota h ese aap ek empty object ke tarah bhi use kar sakte h 
//  esme aap kuch bhi property add ya remove bhi kr sakte h like

hello.prototype.abc= "ABC";                 // yha hamne ek abc name ki property add ki hello function ke prototype me
hello.prototype.name= "Rohit";
hello.prototype.sing= function () {                       // yha hamne ek funtion ko add kar diya hello function ke prototype me 
    console.log("this is functuin inside of function prototype");   // uske ander kuch bhi print ya return kra sakte h 
}

console.log(hello.prototype);       // ese print kr ke dekh sakte h 

console.log(hello.prototype.sing());    // us function ko ham call bhi kara sakte h 










