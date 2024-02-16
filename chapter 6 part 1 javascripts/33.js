// Difference between dot(.) and bracket[] notation 

const person={
    name: "Vikas",
    age:20,
    "person Hobbies":["playing", "Writing", "music"]    // object me  variavle ke ander value key ko ham "" ke andar likhte h but agar single word ho to bina "" ke hi likj sakte h but double word ke liye hame "" ke andar hi likhna hoga jaise ki yaha persone Hobbies double word h isliye
 }

console.log(person["person Hobbies"]);    // yha person Hobbies ko [""] ke andar likhna hoga print karne ke liye agar single word rahta to ham use . karke likh sakte the but ese nhi

const key ="Email";
// NOTE:-  Ab ham chahte h ki key me Email ki value ko person me chala jaye Email name ka to uske liye ham dekhte h kya kar sakte h

// agar ham ese likhe to 
// person.key= "rohitkumar9643017@gmail.com";
// console.log(person);    // ab ese print karke dekhte h   
// note: aaap dekhenge ki key name ka variable khud person name ka variable ka key ban gya but ham to esa nhi chahte the ham chate the ki Email name ka person me key bane aur uska value rohitkumar9643017@gmail.com bane

// agar ham ese likhe to
// person["key"]= "rohitkumar9643017@gmail.com";
// console.log(person);
// Note : yha bhi vahi hua key name ka variable khud uska key ban gya 

// agar ham ese kuch ese likhenge to hamara kam ho jayega like
person[key]="rohitkumar9643017@gmail.com";
console.log(person);
// Note: ab ho gya eska matlab agar hame kisi variable ke key me value assin kar ke kisi dusre variavle ke key ke rup me usi ko use karne aur uske value ko bhi use karne ke liye use [] me us variable ka name likhna padega bina "" ke jiske key value ko lena ho




