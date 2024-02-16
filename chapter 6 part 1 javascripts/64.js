// Map 
// Map is an iterable

// store data in ordered fashion
// store key value pair (like object)
// duplicates keys are not allowed like object

// different between Maps and objects

// objects can only have string or symbol
// as key

// but in Maps you can use anything as key
// like (array, number, string, object) 

//NOTE:-maps SAMJHNE SE PAHLE KUCH BASIC SA OBJECT KE BARE ME JAAN LETE H
// Object literal  ==>  object ko ham object literal bhi bolte h 
// key -- string  ==>  object ki jo key hoti h vo 99% string me hoti h key ki value ki bat nhi kar rha hu mai key ki bat kar rha hu
// key -- symbol  ==>  object ki key 1% hi symbol me hota h 
// EXAMPLE ke liye ese dekhe

// const person = {
//     Name : "Rohit",
//     RollNo : 3020137499,
//     Age : 20,
//     1 : "one"      // yha jo hamne key banayi h 1 se aapko samjh nhi aa rha hoga ki ye number h ya string. to aapko bata de ki ye javascripts ke object me ye ek string h kyoki object ya to string me hoti h ya symbol me jaisa ki upar abhi bataya bhi h ese eski type check kar sakte h
// }
// // note hamare pass 2 way tha kisi object ke koi sa bhi key ko print karne ka  
// console.log(person.RollNo);      // .keyname laga kar jaesa ki ye line
// console.log(person["RollNo"]);    // dusra [""] me key ka name likh kar like this 

// for(let keys in person){             // ese iterate karne ke liye for in loop bhi laga sakte h
// console.log(keys);                  // ab keys ko print kara sakte h
// console.log(typeof keys);           // aap dekh sakte h ki har ek key ki type bhi bata rha h aap payenge ki sabhi key string me hi h
// }
// ====================================================================

// key value pair
// const person2= new Map();       // ek empty Map banaya h 
// // ab hame esme key value pair add karni h uske liye ham .set ka use karte h vo kase karenge vo dekhte h
// person2.set('Name', 'Rohit');         // yha Name - key hogi, Rohit - key value hogi esse ek keyvalue pair ho gai h
// person2.set('RollNo', '2018051746');         // yha RollNo - key hogi, 2018051746 - key value hogi esse dusri keyvalue pair ho gai h       
// person2.set("Course", "BCA");         // aap ese "" me bhi likh sakte h ye to pata hi h aapko

// // note :- sabse importante bat Map me aap key ko kisi me bhi use kar sakte h like array, number , string but iobject me esa nhi tha usme aap string ya symbol me rakh sakte the but yha esa nhi h like
// person2.set(1, 'one')        // yha hamne 1 ko number me liya h but object me esa nhi tha vaha javascript use string me change kar deta the but yha esa nhi h 
// console.log(person2);

// Note:- Object me aap key value access karne ke liye kuch esa code likhte the like 
// //    console.log(person2.Name);  ya     console,log(["Name"])    ese likhte the but Map me esa nhi h map me esa likhne se undefined aa jayega 
//  aap map me key value ko access karne ke liye get keyword use karte h like 
// console.log(person2.get('Name'));          // string ke liye aap key ko '' me or number ke liye bina '' ke likhte h like
// console.log(person2.get(1));        // 1 ek number type ka h isliye ese bina '' ke use kiya 
// // bola tha upar ki eski key kisi bhi type ho sakti h like
// person2.set([21,45,4,2,4], 'arrayValue');    // array type key h aap yha dekh sakte h [21,45,4,2,4] ye ek key h aur arrayValue eski value  ek aour bat array ki data type object hoti h
// person2.set({name: "aryan", sub : "Eng", 20: "twenty"}, 'objectValue');    // ye ek object type key h aap yha dekh sakte h {name: "aryan", sub : "Eng", 20: "twenty"} ye ek key h aur objectValue eski value

// console.log(person2);     // ab ese print kar ke dekhte h 
// // aap sare ke sare keys print kara skte h like
// // console.log(person2.keys());           // ye keys ko iterate kar rha h 
// //  iterate karne ke liye aap loop bhi laga skte h like
// for(let key of person2.keys()){
//     console.log(key, typeof key);        // maan lo hame eski datatype bhi check karni h to typeof key likh kar dekh sakte h 
// }

// NOTE:- aapko pata h ki object me ham sirf for in loop laga sakte the but for of loop nhi
// but aap esme for of and for in dono laga sakte h

// for(let key of person2){
//     // console.log(key);       // ese print karne ke bad aap dekhenge ki ye key value pair me print ho rha h aur hame kuch array sa lag rha h
//     // console.log(typeof key);     // chalo ab ham eski type print ke dekhte h ye to object print ho rha h 
//     console.log(Array.isArray(key));   // chalo ab ham check karte h ki ye array h ya nhi ye to true print ho rha h
//                                      // achha esse pata chala ki ye hame array me pair value daal ke denge pahli key hogi dusri value hogi
// } 


// // ese ham destructuring bhi kar sakte h 
// for(let [key, value] of person2){
//     console.log(key, value);       // ye hamne 2 value degi pahli key hogi dusri value
// }


//NOTE:-  map me aap ese bhi value store kar sakte h like 
// const person3 =new Map ([['firstName', 'Anshu'],['Age', 14]])     // aap dekh sakte h ki hamne ek new Map function banaya jisme ek array ke andar 2 alag alg array h uske andar bhi alag value store h to aap ese bhi map me store kr sakte h

// ek object banaya h 
const person4= {
    id : 1,
    firstName : "Rohit"
}

// maan lo hame es object person4 ki kuch aur information store karni h but hame es object me nhi karni h kahi aur karni h to kese karenge kahi aur store karne ke liye ham map use kar sakte h 
const extraInf = new Map();     // ek empty Map fun banaya 
extraInf.set(person4, {Age:20, contact: 8447700867});          // jisme hamne person4 ko key bana di aur person4 ki more information ke liye uski info ko uski value bana di ek object me
// console.log(extraInf);    // ab ese print kar ke dekh sakte h

// ab person4 ki data ko use kase kr sakte h dekhte h
 
console.log(person4.id);
console.log(extraInf.get(person4));     // etna likhne se map me jo info thi vo print ho jayegi agr koi perticular info chahiye to .key name likh sakte h like
console.log(extraInf.get(person4).contact); 
