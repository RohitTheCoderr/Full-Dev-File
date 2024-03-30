// call, apply , bind  
    
// const user ={   
//     firstName: "Rohit",   
//     age : 20,   
//     about: function () {   
//         console.log(this.firstName, this.age);   
//     }   
// }   

// const user1 ={   
//     firstName: "Aryan",   
//     age : 17,   
// }   

// user.about();      // esa karne se kya hoga ki about me jo function h user ki help se call ho jayega jisse this function se user ke firstName and age print ho jayega 

// // NOTE:- BUT ye to hamne pahle padha hi tha 2,3 js file pahle but ab ham chahte h ki call to dusre object se ho but data kisi aur ka le jisse ham chate h to uske liye ham .call() me likh sakte h like

// user.about.call(user1);            // yaha call to user name ke object se ho rha h about function but firstName and age ki value user1 se lega 
// user.about.call();                  // aur ham esme koi value nhi lagate h to output undefined undefined show hoga
// // call keyword ko aap vese hi use kar sakte h normal function ko call karne me ham agr () ke andr jise likhenge tabhi use se uski value lega  

// function myfun() {
//     console.log("call keyword");
// }
// myfun.call();        // call laga kar bhi hamne myfun name ke function ko call kar liya h 


// note about(esi function ko bahar likh kar bi call keyword laga sakte h)
function about(song, writer) {
    console.log(this.firstName, this.age , song, writer);
}

const user ={   
    firstName: "Rohit",   
    age : 20,   
    about: function (song, writer) {              // yha hamne same function ko liya usme 2 parameter pass kiya h 
        console.log(this.firstName, this.age , song, writer);          // yaha parameter ki value bhi print karaya h
    }   
}   

const user1 ={   
    firstName: "Aryan",   
    age : 17,   
}   

user.about.call(user1, "Keshri ke lal", "humnan bhagat");     // yah hamne parameter ki value bhi pass ki h 
// note:- hamne yaha call me jis object se value lena h firstName and age ki vo bhi dala aur sath me parameter ki value bhi 
// yhi kaam mai about function ko bahar likh kar bhi call keyword laga kar function ko call or kis function se firstname ki value and parameter ki value vo dal sakta hu  

//  bahar vale about function ko call karne ke liye ab user ki help se nahi karna padega like
about.call(user1, "papa mere", "rohit");


// Apply 
// note:- apply bhi same call ki tarah hi h bas esme jo parameter ko pass karenge vo ek array ki tarh karenge like
about.apply(user1,["oye Raju", "aryan"]); 


// Bind
// note:- bind kya karta h vo value ko ek function me return karta h aur hame use print karne ke liye us function ko call karna padega jisme hamne bind se function me store kiya h like
const Bindfun= about.bind(user1, "mai diwana", "Angel");
// ye bind kya kara ki value ko ek function me return(store) kara h aur agar hame use print karana h to us function ko call karna padega like'
Bindfun();        //call kiya 
