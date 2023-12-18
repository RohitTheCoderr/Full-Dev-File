 // Undefined
//  null
 

// Note jab ham variable ka name de dete h but usme koi value assign nhi karte h to ye Undefined dikhayega 
// esa sirf let and var me hi hoga const ke sath nahi 
// const ke case me error show karega  
//  let firstName;
// //  console.log(typeof firstName);

// //  const secondName;    // Uncaught SyntaxError: Missing initializer in const declaration
// //  console.log(secondName);

// firstName = "Anil thakur";  
// console.log(typeof firstName, firstName);   // yha ham type and value dono print karann chahte hai isliye dono ko ek hi me likh sakte hai

// null 

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Rohit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);   // yha ek javascript me ek bug yani error h kyoki esme null ek object print ho rha hai


// BigInt
// Note:-  we don't store more interger number its limited (9007199254740991) like check it limit
console.log(Number.MAX_SAFE_INTEGER);

// try it more then withought usint BigInt
let num = 875126624382163424246284623;   //you can check output 
console.log(num);
//  but if we want to more then interger store then we can store by using BigInt and n like
// 1st way
let myNumber= BigInt(122423453456567567867898908990978);
console.log(myNumber);

// 2nd way
let myNewNum=4352464564598908990978349836493549133n;  // last me n laga kar
console.log(myNewNum);

//  we can perfome any task between both number like but both are BigInt number
console.log(myNumber + myNewNum);

// Note:- kam interger num ko bhi aap BigInt bana sakte h taki jada aur kam ke sath koi task performance karva sake 