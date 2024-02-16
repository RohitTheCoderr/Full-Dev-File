//  lexical scope


 const myVar ="ROhit";  
 
function myApp() {
      

    function myFun() {
        // const myVar ="Aryan"; 
        console.log("inside myApp", myVar);
    }

    const myFun2 =function () {
        const myVar ="Aryan"; 
     } ;
    const myFun3 = () => { } ;

    console.log(myVar);          // yaha myVar ki value print kara rha hu 
    myFun();                 // myFun ko call kar rha hu


}

myApp();


// DECLARACTION PART in note
// NOTE:- ( About myVar ) aap dekh sakte h ki ek hi name myVar ka 2 variable h ek myApp function me aur ek myFun function me aap same name ka variable alag alag function me use kar sakte h 
// NOTE:-  ( About myApp ) dusri bat jab ham myApp ko call kiye to ye sabse pahle myApp ke function ko line line read karega uske andar jitne bhi function h use chhod dega jab tak usko call kiya hua na mil jaye 
//       fir ye move karte karte console.log(myVar) pr aayega jisme myVar ki value find karega usi function ke andar agar use usi function ke andar nhi mila myVar ki value to  vo function ke bahar
//       check krega agar bahar bi nhi mila to error show krega but apne andar hi bane function me myVar ki value ko print nhi karega  
// NOTE:- ( About myFun)    same yahi bat function myApp ke anadr bane function myFun par lagu hota h Agar use myVar ki value apne andar hi nhi mile to apne ke bahar yani myApp function ko check karega agr vha bhi nhi 
//       mila to uske aur bahar check karega agar uske bad bhi nhi to error show karega but dusre function me nhi jayega check karne
