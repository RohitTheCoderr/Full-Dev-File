// Object Destructuring 

const band ={
    bandName:"led zeppelin",
    famouSong:"Stairway to heaven",
    year:2003,
    anotherfamousSong:"Mr india"
};

// man lo hame band variable ke bandName key ki value print karani h to uske liye ham ye kar sakte h
// ya yu kahe ki band name ke variable me ko key h usi name ka ek variable bana ke usme jo value h use print karani h to ese kar sakte h
// const bandName=band.bandName;
// console.log(bandName);
// usi tarah hame famouSong ki value bhi print karani h to uske liye bhi ye kar sakte h
// const famouSong=band.famouSong;
// console.log(famouSong);

// let bandName=band.bandName;     // agar hamne yahi kam let le kar kiya to ham key  ki value change kar sakte h but const lete h to nhi kar sakte 
// bandName="Rohit";
// console.log(bandName);

// YAHI KAAM HAM SHORT CUT ME KAR SAKTE H

// let{ bandName, famouSong }= band;           // jis jis key name ka variable banaya h yaha usi ka value aayega esme baki sab vese hi rahenge
// console.log(bandName, famouSong);

// ab hame variable ka name same nhi rakhna h to uske liye ham kuch ese likh sakte h
// esse kya hoga ki variable ka to name change hoga but uski value usi se aayegi like
// let{ bandName:var1, famouSong:var2}= band;
// console.log(var1, var2);

let{ bandName:var1, famouSong:var2, ...remender}= band;    // yaha hamne band ke ander aur jitne bhi key the use remender  me store ker liya sivay bandName and famouSong ke
console.log(var1, var2, remender);
 



