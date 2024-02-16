// Array Destructuring 

// we want to value1 and value2 are store in different variable so we can do like
// const myArray = ["value1", "value2"];
// let myVar1= myArray[0];
// let myVar2= myArray[1];

// console.log("myvar1 is ", myVar1);
// console.log("myvar2 is ", myVar2);

// // NoTE :- but es tarah ke liye javascript me ek shortcut h like
// let [myvar1, myvar2]= myArray;    // es line se myArray ki value1 myvar1 me jabki myvar2 me value2 chala jayega
// console.log("myvar1 is ", myVar1);
// console.log("myvar2 is ", myVar2);

// myvar1= "value3";   // yha myvar1 ki value change bhi kar sakte h kyoki hamne myvar1 ko let type variable banaya h but agar ham myvar ko uper const type banate to tab ham eski value change nhi kar sakte the
// console.log("new myvar1 is ", myvar1);
// // aap myvar1 ko aur myvar2 ko ek normal variable jaisa use kar sakte h

// // // NOTE:-- agar Array me 2 se jyada item hote to kya hota ?  ans esse kuch nhi hota chahe kitne bhi item kyo na hota but pahla item var1 me aur 2nd item var2 me hi jata aur baki ke sabhi item ka kuch nhi hota aur agar 3rd item ko bhi kisi dusre me dalna hota to uske liye bhi hame ek alag ek aur var3 banana padta like 
// const Array = ["value1", "value2", "value3", "value4" ,"value5"];
// // let [var1, var2, var3]= Array;  
// // console.log("var1 is ", var1);
// // console.log("var2 is ", var2);
// // console.log("var3 is ", var3);

// // note agar hame var3 me value4 na karke value5 store karni h to uske liye ham es tarah se kar sakte h
// let [var1, var2, ,var3]= Array; // var3 ke jagah me sirf scip , laga diya 
// console.log("new var3 is",var3);
 
// NOTE:- AGAR ham chahe ki bache huye jitne bhi item ho use kisi ek variavle me store ho jaye to ham usse 2 tarah se srote kar sakte h like
// 1st way
let names = ["Rohit", "Vikas", "Smriti", "Aryan","Anshu","Rajkumari","Anil"]
// let [newVar1, newVar2]=names;     // yha 0 index aur 1 index to newVar1 and newVar2 me store hua hi h aur index 2 se nhi hua h isliye aage ke slice me 2 index likha h
// let mynewVar= names.slice(2) ;   // 1st way
// console.log("newVar1 is", newVar1);
// console.log("newVar is", newVar2);
// console.log("mynewVar is", mynewVar);

// 2nd way
let [newVar1, newVar2, ...myNewVar]=names;
console.log("2nd way se newVar1 is",newVar1);  
console.log("2nd way se newVar2 is",newVar2);  
console.log("2nd way se myNewVar is",myNewVar);  









