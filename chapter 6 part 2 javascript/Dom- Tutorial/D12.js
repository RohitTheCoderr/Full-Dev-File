// select elemet using get element by id

// note:- for using this method we need of id in html of any element like

// console.log(document.getElementById("main-heading"));     // console karne pr aapko lag rha hoga ki ye ek HTML item return kr rha h but ye ek object return kr rha h esa hame browser dikha h jo ki acche se dikha rha h

// but ye actull me kya h vo dekhte h uske liye ham dir use karenge like
// console.dir(document.getElementById("main-heading"));      // actule me esa h ye hame vese dikha rha tha ye bhi ek object h yani vahi h
// note:- javascript kya karta h ki jitne bhi element h vo use object bana ke document me store kr deta h mtlb document ek object h us object ke andr jitne bhi objet h aur sab ke andr key value pair h   

// ham eski type bhi check ker sakte h like
// console.log(typeof document.getElementById("main-heading"));    // aap dekhe ki dono same h isliye dono ki type print karaya to same object print ho rha h 
// console.dir(typeof document.getElementById("main-heading"));

// ab ham ese kisi variable me store krte h ham ese const type me store krete h 
const mainHeading=document.getElementById("main-heading");
console.log(mainHeading);    // ab ham ese print kre to dekh sakte h store ho chuki h 

