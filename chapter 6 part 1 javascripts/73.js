// pichhle example ko samjhne se pahle ye samjhte h 

// note hamne 2 normal sa object banayay h obj1, obj2 name ka 
const obj1= {
    key1: "value1",     
    key2: "value2"
}

// const obj2= {
//     key3: "value3"
// }
// note ham kisi bhi object ki key value print kara skate h jo usme h like
console.log(obj1.key2);          // hamne obj1 ki key2 ki value print karni h 
// console.log(obj2.key3);          // esi tarah eska bhi 
// NOTE:- but kya esa ho sakta h ki obj2 ke key1 ki value print ho ans hoga ji nhi kyoki obj2 me key1 to h hi nhi to print kaha se hogi right
//       but ham ye chahte h ki agar obj2 ke pass key1 ki value na ho to vo obj1 ke key1 ki value print kara de to kya esa ho sakta h ji ha aaiye dekhte h kese

// chalo kuch aur pahle samjhte h upr obj2 ko comment out krta hu kyoki same obj2 name dene se error hoga 
//  const obj2 ={};              // ham obj2 ko ek empty object bhi to create kr sakte h fir usme ek key3 value pair kr skte h like
//  obj2.key3= "value3";          // hmne ek key3 value pair kr di h obj2 me
// //   chahe to eski value print bhi kara sakte h  like
// console.log(obj2.key3);   

// there is one more way to create empty object in javascript like
const obj2 = Object.create(obj1);             // yha kya kiya h ese janne se pahle aap aage dekhe aur kya kiya h 
console.log(obj2);                     // key dalne se pahle obj2 ko dekhte h esme kuch h kya ya ye dikh kesa rha h aap dekhenge ki ye to empty object h 
obj2.key3 = "value3";                     // obj2 me key3 value pair add ki h 
console.log(obj2.key3);                 // obj2 ke key3 ki value print ki h  

// NOTE:- ab samjhte h kya kiya h ye tino line me pahle hamne ek empty obj2 banaya empty object banane ka ye dursa tarika h jisme hamne obj1 ko rakh h ab obj1 kya kaam karega 
//        obj1 ko rakhne se kya hoga ki agar ham obj2 me kisi key value ko print kare but vo obj2 me h hi nhi to vo obj1 ki key value print kar degi aur agar usme bhi nhi mili to undefined print hoga 
//        upar hamne obj2 ko empty banaya jisme obj1 ko rakh fir usme ek key3 value dali aur fir us key3 ko print kiya to vo parint ho gya 
//         but aaiye ab kuch esa print karke dekhte h jo obj2 me h hi nhi but obj1 me h like
console.log(obj2.key1);                    // aap dekh sakte h ki obj2 me key1 li value h hi nhi ab kya hoga yahi hoga jaisa bataya h ki obj2 me na milne pr obj1 se value le lega like
// note;- dekh value1 print ho gya but ab esa value print karte h jo dono me nhi h like
 console.log(obj2.key4);          // key4 kisi me nhi h to undefined aa rha h 

// NOTE:- special agr obj2 me jis key ki value pahle se h to vo vahi print karega fir vo obj1 me nhi jayega us key ke liye ok   

// NOTE:- __proto__  ya  [[prototype]]     ye dono ek hi h ab ye samjhte h ye kya h uske liye ham obj2 ko print kara ke dekhte h 
console.log(obj2);                   // aap dekhenge ki obj2 me key3 ki value ke alava kuch aur bhi h aap refresh kar ke dekh lo nahi dikh rha h to  __proto__   ya [[prototype]] likha hua aur esme kuch key value bhi h 
                                    //  aap jab acche se dekhenge to aapko us __proto__  ya [[prototype]] object me key value same obj1 ka milega. 
// NOTE:- bastab me jo hamne ye line => const obj2 = Object.create(obj1);  likha tha jisme hamne obj1 ki value ko obj2 ke use kiya tha ye bastab me hamne obj1 ki value ko obj2 ke __proto__ me daal diya h aur 
//        jab ham obj2 se kuch esa value print karana chahte h jo ki obj2 me h hi nhi fir obj2 me na milne par vo obj2 ke proto se value le leta h aur obj2 ke proto me kya daal tha obj1 ko isliye ye obj1 se value na lekar ye obj2 ke proto se value print kara deta h 
//      const obj2 = Object.create(obj1);  es line se hamne ek obj2 ki ek proto create kiya jisme hamne obj1 ki value daal di h aur jab ham obj2 ki proto print kara ke dekhe to obj1 ki value print hogi like
console.log(obj2.__proto__);           

// but ham agr obj1 ki proto check kre to kuch value nhi print hoga kyoki obj1 ke proto me hamne kuch dala hi nhi like
console.log(obj1.__proto__);


// NOTE:- SPECIAL NOTE:- but prototype alag hota h ye dono to same hota h __proto__  or  [[prototype]]  

// ab ham chalte h pichle example pr jo chhod diya tha pahle ese samjhne ke liye



