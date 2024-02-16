// introduction to arrays 
//   reference type
//  How to creat arrays


// Arrays:-  ordered collection of items
let fruits = ["Apple", "Orange", "Mango", "Banana"]        // jis tarah string me index hote the usi tarah arrays me bhi index hote h but yaha thoda sa alag h jaise 
                                                        //   Apple 0th index, Orange 1st index, Mango 2nd index, Banana 3rd index pr h es tarah se
 console.log(fruits)         // all item print
 console.log("print 2nd position item is ",fruits[2]);    // 2nd position print item
let num = [2,45,6,543,24,4,9,7];
 let mixed = [ 1, 23, 4.3, "Rohit", null, undefined ]     // Arrays me ham sab type ke data store kar sakte h jaise esme huaa
 console.log("This is mixed item in array ",mixed);
 console.log("print 5th positioning item=  ",mixed[5]); // 5th positioning item print
console.log(num);

let sName = ["Vikas", "Sohit", "Smriti", "Aryan", "Anshu"];
console.log("New array ",sName);
sName[1]= "Rohit";  // For puting new item in index 1 but after putting item old item is remove from this index
console.log("Puting new item in 1st position is = ",sName[1]);
console.log("after puting arrays item",sName);

let obj = {};      //  object literal 
console.log(typeof obj);    // aaeye check karte h ki eski data type kya h ye to Object type ka h 
//  ab sName ke array ko check karte h.
console.log(typeof sName, sName);   // hamne dekha ki ye bhi ek object type ka h but object to kai tarah ka hota h but hame kese pata ki ye array object h to aaiye esko check karne ke liye ye formet apna sakte h
console.log(Array.isArray(sName));    // for cehcking array sName array object h ya nahi hoga to true print hoga nhi to false 

console.log(Array.isArray(obj));    // obj ko check karne pr false print ho rha h esa isliye kyoki obj name ka variavle a vo array nhi h balki ek OBJECT LITERAL h isliye

// NOTE:--  ab ham kisi ko bhi check kar sakte h ki ye array h ya nahi uske liye ham  Array.isArray() use kar sakte h
// arrays indexing




