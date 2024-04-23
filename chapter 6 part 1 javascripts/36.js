// //  spread operator in Arrays case 

// // const array1= [1,4,5];
// // const array2= [6,7,8,9];

// // const newArray= [...array1,...array2];    // yha pahle array1 se sare item spread ho gye fie array2 ke newArray me
// // console.log(newArray);
// // // NOTE:- agar ham ... na lagaye to newArray me array1 ya array2 khud newArray ka item ban hayega like 
// // const newArray= [...array1,array2]    //  yaha hamne array1 ke aage to ... dots lagaye h but array2 me nhi isliye array2 khud newArray ka item ban gya h

// // const newArray = [..."123456789"];   // yaha ... ke bad  "" ke andar kuch likhne se use string form me lene lagta h 
// // console.log(newArray);

// // //  spread operator in Object case 

// const obj1= {
//     key1: "value1",
//     key2: "value2",
//     // key1: "value3"          // object me same key ek se jyada bar use nhi kar sakte h agar ek se jyada bar use h to object hamesa last vala key read karega like yha hamne key1 ko do bar use kiya but uski value change h to variavle hamesa last same key1 ko read karega 
// }

// const obj2= {
//     key1: "valueunique",         // yha hamne key1 ko key ke roop me ek bar fir use kiya h ab dekhte h kya hota dusre variable me dalte time
//     key3: "value3",
//     key4: "value4"
// }

// // const newObj= {...obj1,...obj2};
// //  NOTE:--  yha hamne onj1 ki sari key clone(dale) kiya h jisme key1 name ka key bhi aaya h uske bad ja hamne obj2 ko clone kiya to esme bhi 
//             //   hame key1 name ka key mila h jiski value different h but esa to hota nhi h ki same name ka key ek variable me use nhi kar sakte h
//             //   to fir yaha ye hoga ki obj1 ki sari key aa jayegi but jaise hi obj2 ki key aayegi  aur same key1 milegi to vo pahle vale ki ko remove kar degi aur last vale key1 ki value clone kar legi
//             //  agar ham obj2 ko pahle clone kare to yahi kaam ulta hoga pahle obj2 ke key1 ki aayegi but jaise hi obj1 ki key same key1 aayegi to pahle vale key1 ki value remove kar degi like
// //   const newObj= {...obj2,...obj1};
//   const newObj= {...obj2,...obj1, key67:"value67"};    // aap esme ek new key bhi add kar sakte h kuch es tarah se
//   console.log(obj2);
//   console.log(obj1);
//   console.log(newObj);
  
//   const newObject= {..."avinav"};    // for example aapke pass ek string h aapko use spread karna h to uske liye aap uske aage ... laga dijiye to ye key value pair ban jayegi jaise // yani jo uski index hogi na vo uski key ban jayegi 
// //   pahli key hogi 0 jiski value hogi a 
// //   dusri key hogi 1 jiski value hogi v 
// //   tisri key hogi 2 jiski value hogi i 
// //   chothi key hogi 3 jiski value hogi n 
// //   pachvi key hogi 4 jiski value hogi a 
// //   chhathi key hogi 5 jiski value hogi v 

// const newObject1= {...["item1", "item2", "item3"]};  // aap ese kuch ese bhi likh sakte h yha pahli key  0 per item1  dusri key 1 per item2  and so on

// console.log(newObject);
// console.log(newObject1);


