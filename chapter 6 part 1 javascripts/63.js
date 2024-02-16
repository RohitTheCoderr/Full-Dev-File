// sets (it is iterables)
// note:-  condition of sets
// store data
// sets also have its own method
// no index-based access
// Order is no guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3,2]);     // hamne 2 item same daal di h but sets duplicates item ko ignour kar deta h 
// numbers.add(4, 0, 7, 65, 8);     // ye  ek bar me ek hi item ko add karta h jaise ki 4, chahe aap esme kitne bhi item likh do but ye ek hi item leta h aur agar vo duplicates hoga to vo bhi nhi lega 
// numbers.add(9);      // ab yaha kiya add to ek add kar liya kyoki ye ek bar me ek hi item add karta h 
// console.log(numbers);
//  const instituteName = new Set("Smart Speak for English spoken");   // aap dekh sakte h ki string me bhi ye same word nhi le rha h esa islye kyoki aap jante h ki sets same item ko consider nhi krta h
//  instituteName.add("my name is Rohit");       // aap dekh sakte h ki string me value add karne pr ye string ko sari word ko ek string maan rha h jabki suru me jo string dala tha use to ek ek word ko string ki tarah le rha h 
//  instituteName.add("hii Aryan and Rohit");    // ye pure ko ek hi string maan rha h isliye eske same work ko bhi store kr rha h  
//  instituteName.add("hii Aryan and Rohit");     // but aap jab same string dubara likh dete h to vo use same manega like this line 
//  instituteName.add("Hii Aryan and Rohit");     // but ham ek word change kar ke dekhte h kya hota h 
// //  aap dekhe honge ki ek word bi change karne se ye ese alag string ki tarh le rha h jisse ye store kr le rha h
//  console.log(instituteName);
// note:- set ek iterables h, iterable me array and string aate h isliye aap sets me arry and string type data store kr sakte h 
    // jaisa ki upar bataya ki sets ke pass khud ka method hota h
// const items =['item1', 'item2', 'item1'];    // areray ke andar to same data rakh hi sakte h 
// const items2= ['item1', 'item2', 'item1']
// const numItem = new Set();        // yha hamne ek empty set liya h 
// numItem.add(2);           // empty set me 2 add kiya 
// numItem.add(3);           // fir 3
// numItem.add(2) ;      // ye to same h isliye ye dubara lega nhi 
// numItem.add(items2)  // sets me ham alag alag data type bi store kar sakte h bas vo same na ho
// // Note :-  jarurui bat agar aap same data ko rakhna chanhte h to aap use array me daal kar rakh sakte h fir chahe vo same data kyo na ho kyoki array banne ke bad us array ki memmory me address different ho jati h like
// numItem.add(items);   // aap dekh sakte h ki item1 same data h but vo array me nhi h aur ye array me h aap chahte to do alag alg array bana kr bi same data ko store kr sakte h 
// console.log(numItem);
// // NOTE :- Ab maan lo hame check karna ho ki sets me koi value present h ya nhi to uske liye ek method h 
// // numItem.has(2)     // jise find karna ho use () ke andar likh do jaise yha 2 aur ese aap return kara sakte h if condition se like'
// if (numItem.has(2)) {
// console.log("2 is present in this set");    
// }
// else{
//     console.log("2 is not present in set");
// }
// if (numItem.has("item1")) {     // yha hamne item1 ko find kiya h but vo to ek array ke andar h 
// console.log("items is present in this set");    
// }
// else{
//     console.log("items is not present in set");
// }


// // note:- set ek iterables h jab set ek iterable h to ham es me for of loop bhi laga skate h jaisa ki 62.js me poadha tha 

// for(let number of numItem){
//     console.log(number);               // aap dekh sakte h ki esme for of loop lag rha h hamne numItem ki value number me dala h for of loop se fir use print karaya h numItem ki sari value number me ja kar print hue h isliye ham bol sakte h ki set ek iterable h 
// }

//NOTE:- Ham set use kab karenge jab hamare pass unique value ho yani same value na ho example ke liye niche dekhe

const userId = [11,23,13,11,34,23,34,44,11];      // hamne ek userId name ke ek array banayi h jisme kuch userId h number h but kuch number same h 
const uniqueId = new Set(userId);             // yha hmne userId (array) se value liya h but aap sochenge ki jab hamne ek aaray se value liya h to usme jo bhi duplicate value h vo bhi set me store ho jana chhiye jaisa ki abhi hamne uapr dekha tha but nhi uapr hamne array ko set me add kiya tha but yha hamne set banate time hi array ki vakue daal di h isliye yaha duplicate value nhi store karega 
console.log(uniqueId);             // ham dekhte h ki uniqueId me kon kon se item aaye h userId se 
console.log(userId);             // check kya userId (array) pr koi effect pada h aap dekhenge ki koi effect nhi pada kyoki set to bas userId se item store kar rha h use change nhi kar rha h

// maan lo ab hame uniqueId (set) ki length find karni h to uske liye ham for of loop laga kar find kr skte h like

let length = 0;             // length ki value abhui 0 rakhi h
for(let element of uniqueId){      // yha uniqueId se ek ek item element me jati rahegi 
    length++;              // aur length me bar bar ek ek increase hoti rahegi jab tak loop chalegi length jitni bar ek se increase hogi utni hamare set me item hogi ya length hogi kyoki length to pahle se 0 tha na
}
console.log("uniqueId(set) length is ",length);    // yha hamne length ko print kara li h





