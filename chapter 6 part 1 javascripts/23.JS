// // Array shift unshift 
// let fruits = ["Mango", "Apple", "graphs"];
// console.log("At a biggning time=  ", fruits);
// // push
// fruits.push("Banana"); // push is use for add item to the array in the last index like this
// console.log("After pushing banana array is = ", fruits);
// // pop 
// // fruits.pop();       // pop is use for remove item from the array in the last index like this
// // console.log("popped item name = ", fruits.pop());  // es tarah se bhi kar sakte h pop with print agar hame check karna h ki kon sa item remove hua h to ese likh sakte h es line me ek aur item pop ho rha h ye mat samjhna ki upar jo pop kiya h usi ko print karva rahe h nhi 
// // console.log("After popped= ",fruits);

// let popedFruits=fruits.pop(); // fruits.pop me jo item remove hua tha use ham kisi aur variavle me dal sakte  h like this
// console.log("popped fruits ko dusre variable (popedFruits) me dala= ",popedFruits);   
// console.log(fruits);



let vegName= ["Pattato", "Tammato", "Onion", "Ginger"]
console.log(vegName);
vegName.push("coliflower");
console.log("After pushing item= ",vegName);

vegName.push("Ladyfinger");
console.log("after again push item= ",vegName);

// vegName.pop();   // pop karne ka pahla tarika bina print kiye
console.log("popped item name = ", vegName.pop()); // pop karne ka dusra tarika with print esa nhi h ki upar jo pop kiya h use hi print kar rha hu esa bilkul bi nhi h
console.log("After pop item= ",vegName);   // do bar pop karenge to do bar pop ho jayega 


// UNSHIFT and SHIFT OPRATION

// pus pop se element ko array ke last me add and remove kiya kata h but agar hame array ke first me add an dremove krna ho to hame unshift and shift use karna padega like
//  unshift
vegName.push("carrot");   // push karne se item last me add hoga  like this
console.log("After pushing carrot array is = ",vegName );

vegName.unshift("Radish");    // unshift is use for add new item in the frist position in array
console.log(vegName);

vegName.unshift("Onion2");
console.log(vegName);
// shift 
vegName.shift("Onion2");     // shift is use for remove one item from the frist position in array
console.log(vegName);


// NOTE :- PUSH AND POP Opration are fast as compare to shitf unshift 
//  because shift and unshift opration are add and removed item at first position in the array so first of all, one by one element shift another place and then add and remove opration parform in this array so its take a some time for performing this opration so its slow as compare to push pop


