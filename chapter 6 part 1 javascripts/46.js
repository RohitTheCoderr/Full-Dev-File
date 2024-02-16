// block scope vs function scope

// 1) let and const are block scope
// 2) var is function scope

//   {
//     let firstName= "Rohit";
//   }
//  console.log(firstName);

// note:- let and const dono block scope vale data type h isliye agar hamne ek variable ko kisi block me banaya h to use access karne ke liye use usi block me commound dala jata 
//    agar hane variable ko block ke andar aur us par acces karne ke liye commound bahar dala h to error show hoga like upar let vale 

//  but var data type me esa nhi h use ham kahi bhi acces kar sakte h andar aur bahar bhi kyoki vae ek function scope h isliye use aap pure function me kahi bi acces kar sakte h 
//  {
//     var secondName = "Kumar";
//     console.log(secondName);
//  }
//  console.log(secondName);
 

// good example 

if (true){                      // {} ke andar likhe commound ko block bolte h 
    const firstName= "Rohit";   // yha hamne ek variavle banaya h const type ka jisme firsname ke variable declar kiya h ab ham use acces karne ke liye usi block ke andar us pr acces ka commound dalna padega like next line 
  console.log(firstName);
}

// console.log(firstName);          // agr ham yha block ke bahar acces karne ki kosis karenge to error show hoga you can  check


//  But agar hamne block me var data type ka variable banaya hota to ham kahi bhi acces kar sakte the like

if (true){      
  var secondName= "kumar";                 
  console.log(secondName);
}

console.log(secondName);    // var data type h isliye ye secondName ko acces kr skta h



function myApp() {
  if (true) {
 let userName= "Anshu";
  console.log(userName);
} 

console.log(userName);       // ye let data type variable ko acces nhi kar payega kyki let block ke andr h  agr var data type hota to acces kr sakta tha
}

myApp();      // function call


