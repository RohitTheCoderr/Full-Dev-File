// innerHTML 
// innerHTML ko samjhe ke liye HTML ke tag aur uske andar item leke h like
/* <nav class="navbar container">
           <h2 class="logo">Website</h2>
           <ul class="nav-items">
                <li class="nav-item"><a href="Home">Home</a></li>
                <li class="nav-item"><a href="About">About</a></li>
                <!-- <li class="nav-item"><a href="Services">Services</a></li> -->
                <li class="nav-item"><a href="Sign Up">Sign Up</a></li>
           </ul>
    </nav> */
 
    // NOTE:- aap ye HTML ko dekhe yha nav ka innerHTML h2, ul, etc h
    //  usi tarah ul ka innerHTML 3 line me li h 
    // yani bole ki tag ke andr jitne bhi tag h vo apne parent ka innerHTML hota h yha nav bhi kisi ka innerHTML hoga uske liye aap html file pr ja kar dekh sakte h 


    // ab samjhte h unnerHTML ke use
    const headLine = document.querySelector(".headline");
//     console.log(headLine.innerHTML);        // innerHTML use karke headLine ke andr jitne bhi innerHTML h use dekh sakte h like this
    // aap dekh sakte h ki headline tag ke andr sirf 2 ineerHTML h h2 and button
    // Note:- ham esme kuch change bhi kar sakte h like
    headLine.innerHTML ="<h1>Inner html changed</h1>";
//     console.log(headLine.innerHTML);      // ab ese print kar ke dekhte h 
//     note:- ye kya hua pahle ka jitne bhi innerHTML me jo tha vo remove ho chuka h yani kuch bhi item add karne pr pahle bala remove ho jayega fir aage ham 
// ham esme fir kitne bhi aur innerHTML item add kar sakte h uske liye hame kuch esa likhenge
headLine.innerHTML += "<button class= \"btn\"> learnMore </button>";
// note:= hame esme aur pahle ek add karne ke bad ab jitne bhi item add karenge uske liye hame += use karna hoga
// aur jab bhi ham "" ke andar aur aur bhi "" dalna padega to uske liye ham \" \" ese likhna padega jaise upr me class ke name ke liye dala h
console.log(headLine.innerHTML); 