//  get multiple element using getElement by class name
//  get multiple element using querySelectorAll

// const navItem =document.getElementsByClassName("nav-item");
// console.log(navItem);
// // note:- aap dekhnege ki print me HTMLCollection print ho rha h ese arraylikeobject bolte h
// // arraylikeobject kya hota mtlb esme aap indexing kar sakte h yani aapko 0th, 1st, 2nd etc index ka item chahiye to mil jayega
// // but esme aapke pass array ke sare method nhi honge 
// // for example hame navIem ke 0th index pr jo  item h vo chahiye to uske liye ham
// console.log(navItem[0]);     // oth index pr home h jo mil gya 
// console.log(typeof navItem);    // ham check karte h ki kya h ye aap dekhe ki ye object print ho rha h isliye ye array like object h 
// // ham ye bhi check kr sakte h ki ye array h ya nhi like
// console.log(Array.isArray(navItem));      // aap dekhe ki output me false show ho rha h means ye array nhi h valki array ki tarah kaam karne vale object h isliye ese array like object bolte h 

//get multiple element using querySelectorAll
const navItem = document.querySelectorAll(".nav-item");       // Nodelist aa rha h ye bhi ek array like object hi h aap esme bhi indexing kar sakte h like
console.log(navItem);
console.log(navItem[2]);     //2nd index ke item ko print karna h 

// NOte:- aap sochenge ki getElementByClassName karne se HTMLCollection print hua but querySelectorAll kerne se Nodelist print hua but kaam same hi ho rha h 
// es dono me different batayenge aage don't worry ! 

