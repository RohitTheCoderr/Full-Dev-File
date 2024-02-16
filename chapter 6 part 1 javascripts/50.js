// callback function

// function myFun2() {
//     console.log("Hello Rohit I am inside myFun2");
// }


// function myFun(a) {
//     console.log(a);
//     console.log("hello world");  
// }
// // myFun([5,2,4,6,7]);        // yha aap a ki value kuch bhi pass kar sakte h like array usi tarah 
// // myFun("abcb");             // String 
// // myFun({name: "Rohit"});    // like yha ek Object h 

// //NOTE:-  aap es sab me se kuch bhi pass kara sakte h OR bi kuch 
// // But kya aap ek function ko pass kara sakte h parameters me dekhte h 

// myFun(myFun2);    // yha hamne myFun ke a name ke parameter me myFun2  pass kiya h jo ki ek dusra function h 
// // NOTE:- aap dekh sakte h ki esa karne se pura ka pura function print ho rha h myFun ke a parameter ke value ke roop me 

// But maan lo hame myFun2 ke andar ki sirf value chahiye to uske liye kya kare
//  Ese ham callback function bolte h
function myMsg1(Name) {
    console.log("Hello, I am inside myMsg");
    console.log(`My Name is ${Name}`);
}

function myMsg2(callback) {               //  parameter ka name callback h
console.log("Hello Rohit How aur you ?");
// console.log(callback);          // yha callback ko print karane se pura ka pura myMsg1 function hi print ho gya but hamne to uski value print karani h means uske andar ki vakue to uske liye ham
// callback();            // yha kya hua hamne callback ko call kiya but cakkback kya h niche hamne callback me myMsg1 ko callback me daal diya to isliye esse myMsg1 ko call chala jayega jisse uski value ek callback me aa jayegi aur yah print ko jayegi  
callback("Aryan");    // Note:-  agar ham esme value pass harte h to vo myMsg1 ke Name parameter me jayega aur jaha name ko print hone ki commound hoga vaha Name ki value print ho jayegi
}

myMsg2(myMsg1);      // yha callback me myMsg1 ko pass kar rahe h



