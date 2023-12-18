// trim           // for removing space index
// toUpperCase
// toLowerCase
// slice

//trim
let firstName = "    Anshu    "
// console.log(firstName.length);
//  let newString = firstName.trim(); // by using newString(new variable name) remove space
//  console.log(newString.length);
//  console.log(newString);

//  firstName = firstName.trim();   // By using same variable remove space
//  console.log(firstName);
// console.log(firstName.length);

// // toUpperCase 
// firstName = firstName.toUpperCase();
// console.log(firstName);


// // toLowerCase
// firstName = firstName.toLowerCase();
// console.log(firstName);


// slice(start indexe , end index)

secondName= "Kumaridevi"
secondName = secondName.slice(0,6); // here print kumari hoga 
                                    // but hamne to 0 to 6 index mention kiya tha          
console.log(secondName);            //  but ye to 0 to 5 index hi liya esaa kyo 
                                    // esa isliye hua kyoki jo slice fuunction h 
                                    // vo ek endex kam print karta h vo jata to vaha tak h
                                    //  jaha tak hamne mention kiya hota h but print vo ek kam karta h 
// (ya yu kah le ki slice function 0 index se count na karke 1 index se count karta h to ye kahna bhi galat nhi hoga)
// more example with take a newString 

let newString = secondName.slice(2,8);      // yha mari print hoga kyoki jab upar me hamne slice method se present secondName sirf 0 to 6 yani kumari hi  h isliye ab yha hamne slice method se secondName se newStrinng me 2 to 8 slice yani jane ka bola h but present secondName me to 0 to 6 h isliye newString me 2 to 6 hi jayega yani mari  
console.log(newString);



