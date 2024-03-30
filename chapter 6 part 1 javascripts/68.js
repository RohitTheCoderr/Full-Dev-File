// javascript ka window object 

// console.log(this);        // this ko print krne se aapko window me bahut se method milenge jo javascript me use hote h like you can see
// console.log(window);          // window karne se bhi aapko ye method milenge
// ye object hame javascripts provide kar rha h ye dono equal h

function myfun() {
    console.log(this);         // yha this object ko print kiya h 
}
myfun();
// window.myfun();               // es function ko call window laga kar bhi kar sakte h esse window object hi print hoga

//NOTE:- Ham bahut bar ham this name ke kuch bana lete h aur agar ham us this ko print karana chahte h to but ye to window object ki details print hogi isliye esse bachne ke liye ham "use strict"  laga dete h jisse this ko print karne se this ka kuch nhi mila to undefined print ho jayega like

function myAnother() {
    "use strict"            // ye ek string nhi h blki predefined word h in string me 
    console.log(this);
}
myAnother();       // aap dekh sakte h myAnother function ko call karne ke bad bhi this ne window object ko print nhi kiya esa isliye kyoki hamne "use strict" likha h function ke ander
            //  agar "use strict" use nhi karenge to window object print


