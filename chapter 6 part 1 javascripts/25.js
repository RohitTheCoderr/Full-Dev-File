// How to clone Array
// How to concatenate two array



// let array1=["item1", "item2"]
// let array2=array1;
// console.log(array1===array2);       // cehck array1 and array2 are equal or not
// console.log(array1==array2);       // same ese bhi likh sakte h

// // NOTE:- em tarah me agar ham kisi ek me add or remove karenge to dono me work hoga  like
// array2.push("item3");
// console.log("array1", array1);
// console.log("array2", array2);

// // but agar ham ydi es problem ko solve karna chahte h to kuch es tarah se likh sakte h like

//// 1st way for clone
array3=["Rohit", "Aryan", "Smriti"]
// array4=["Rohit", "Aryan", "Smriti"]   // dono variable me same item h
// //  but dono equal nhi h check karte h
// console.log(array3===array4);  
// console.log("before push array3", array3);
// console.log("before push array4", array4);
// // agar ham kisi ek me add ya remove karna chate h jisse kisi dusre me koi effect na ho to  ham es ratah se bana sakte h like
// array3.push("Vikas");
// array4.push("Sonu");

// console.log("After push array3", array3);   // esme vikas push kiya 
// console.log("After push array4", array4);  // esme sonu push kiya 
// // to aap dekh sakte h ki dono me alag alag item push kiya jisse ek dusre me koi effect nhi hua


// NOTE::::---- important note upar to hamne same array bana diya item same daal kar but maan lo array me bahut sare item ho to kya ham ek ek karke usme item dalte rahenge ji nhi uske liye ham clone ka dusra method apnayenge aur vahi method sahi rahta h clone karne ka
// // 2nd way for clone using slice method
let array5= ["Apple", "Banana", "pineapple", "guava", "mango"];
// array6= array5.slice();     // yha array5 ki item array6 me clone (ja rha h) ya copy ho rha h 
// note agar hame copy ke sath new array me extra some item add bhi karna ho to sath ke sath to uske liye ham concate use krte h like
let array6=array5.slice().concat("Orange2", "Orange3"); 
// let array6=array5.slice().concat(array3.slice());     // agar two ya two se jyada arrays ki item ko kisi ek me add karna ho to es tarah se add kar sakte h ese two array concatenat kahte h

console.log("array5 is ", array5);
console.log("array6 is ", array6);
console.log(array5===array6);   // equality check karne ke liye

array5.push("orange");
array6.push("graps");
console.log("array5 after push", array5);
console.log("array6 after push", array6);

array6.shift();       // shift karne se array ki 1st item remove hoti h 
array5.unshift("Lichi")   // Unshift karne se array ki 1st positioin pr item add hoti h 

console.log("array6 after shift", array6);  
console.log("array5 after Unshift", array5);  
// note ye vala method sahi mana jata h clone karne ka 


// // 3rd way for clone using spread oprator ... douts

// let array7= [...array5];
// array7.push("carrot");
// // note esme bhi ham copy krne ke sath sath extra item bhi add ya remove kar sakte h ek hi line me like
// let array7= [...array5, "lichi", "lemon"];

//// Note :- ye to hue same extra item add karne ki agar maan lo hame 2 ya 2 se jyada arrays ki item esme dalne ho to kya karenge uske liye ham spread se kar sakte h like
let array7= [...array5, ...array6];   // esme array5 ki fir array6 ki item copy ho rhi h 
 console.log(array5===array7);    // checking equality 
 console.log("print array5 ", array5);
 console.log("print array6 ", array6);
 console.log("print array7 ", array7);
