// splice method
// start, delete, insert

// splice method basicaly 2 chij ke liye kaam aata h 
//  first array ke bich me ya kahi se kuch item delete ke liye
// second array ke bich me ya kahi kuch insert karne ke liye

// for example

const myArray =["item1", "item2", "item3","item4"]

// for delete
myArray.splice(1,1);        // stucture of splice method    start, delete, insert     yaha start mtlb array me kon se index se start karna h,  delete ka mtlb kitne item ko delete karna start no se, insert  ka mtlb aap kitne item ko insert karna chahte h    
//  yha start me 1 likha h fir delete me bhi 1 likha eska mtlb ham chahte h ki index 1 se start kare aur 1 tak hi item ko delete kar de insert kuch bhi nhi karaya h isliye kuch nhi likha h
console.log(myArray);    // print ke bad dekha ki item2 delete ho chuka h
// NOTE:- splice method value return karta h isliye ham us item ko kisi dusre array me store bhi kar sakte h like
const deleteItm= myArray.splice(1,1);          // jitne item delete katrna ho utne number dal sakte h 
console.log("deleted item",deleteItm);       // myArray me upar ek bar splice se index 1 vale item ko delete karne ke bad usme ab item1,item3,item4 bacha
 // isliye ab fir se index 1 vala item delete karne se item3 delete ho gya jise ham deleteItm me store karaya h fir use print kara liya
 console.log(myArray);     // ab myArray me kon kon sa item bacha h check karne ke liye


// for insert
const insertItm= myArray.splice(2,0,"item7");    // yha hamne bola start 2nd index se ho 0 item delete ho yani ek bhi nhi, and item7 insert ho jaye
console.log(myArray);        // ab myArray me kon kon sa item hua h
console.log("inserting item",insertItm);     // inserting item check karne ke liye but aap dekhenge ki splice method inserting item ko return nhi karta h isliye esme kuch nhi print hoga
   
// both delete and insert 
const newArray= ["Rohit", "vikas", "sohan","mohan"];
const deleted = newArray.splice(3, 2, "sonu", "Anshu", "Aryan", "smriti");     
console.log(newArray);
console.log("deleted Name",deleted);    // kyoki splice method inserting item ko return nhi karta h isliye ham use dusre variable me store bhi nhi kara sakte h isliye sirf deleted item hi store hua h es variable me

// note:-  newArray name ka ek array h jisme index-0 "Rohit",index-1 "vikas",index-2 "sohan",index-3 "mohan" h
//       hamara comond h ki array me starting index 3 se ho jisme 2 item delete ho jaye and last me usme "sonu", "Anshu", "Aryan", "smriti" ye sab insert ho jaye 
//      ab aap ek bar newArray me dekhe usme sirf suru me sirf 0 to 3 index h aur hamne bola ki 3 se suru karo delete karna aur total 2 index yani(index 3 and 4 ) delete kar do
//      but index 4 to nhi h isliye sirf index 3 hi delete hua aor fir inserting process suru ho gya

