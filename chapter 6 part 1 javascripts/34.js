//  How to iterate object

const person={
    name: "Vikas",
    age:20,
    "person Hobbies":["playing", "Writing", "music"]    // object me  variavle ke ander value key ko ham "" ke andar likhte h but agar single word ho to bina "" ke hi likj sakte h but double word ke liye hame "" ke andar hi likhna hoga jaise ki yaha persone Hobbies double word h isliye
 }

// for in loop

for(let key in person){
    // console.log(key);          // person ke sabhi key ko print karne ke liye
    // console.log(person.key);     // ham key ke value print karana chahte h to esse undefine ho jayega vo bhi 3 bar kyoko hamare variable me key name ka koi bhi key nhi h (name, age, person hobbies h but key nake ka kuch bi nhi h) vo har key per move karega aur key name ka key na milne pr har bar undefine batayega 
    console.log(person[key]);        // key value ko print karane ke liye use kuch esa likhna hoga
    // console.log(`${key}: ${person[key]}`);    // agar aap dono ko yani key aur uski value ko print karana chahte h to aap ese `` me ${} me likh sakte h likh sakte h ye to pata hi tha
    // console.log(key, person[key]);        // aap ese kuch ese bhi likh sakte h dono ko print karane ke liye , dal ke 
}

// Object.keys

// console.log(Object.keys(person));    // Object.keys(Variable ka name)  likh kar bhi variable ki sab keys pata kar sakte h
// console.log(typeof(Object.keys(person)));    // type check karne ke liye vese array ek object type hi hota h

// // agar aapko ye check karna ho ki array h ya nhi to uske liye aap ye format apna sakte h

// const val = Array.isArray((Object.keys(person)));   // ek val name ke variable me dal diya fir val ko check kar liye vese bina dale bhi direct bhi check kar sakte h
// console.log(val);
// console.log(Array.isArray((Object.keys(person))));   //  aap ese esse bhi kar sakte h array checking

// for of loop

for(let key of Object.keys(person)){
    console.log(person[key]);
}




