// For of loop in arrays

const vegs= ["chili", "radish", "patato"];
for(let veg of vegs){     // for of loop se veg name ka dusre variavle me item copy (push) ho rha h ye tab tak chalega jab tak one by one kar ke sab item veg me na aa jaye ya u kahe ki ye bilkul last item tak push ho jayega  
    console.log(veg.toUpperCase());      //  yha hamne print kara liya upper case ke liye .touppercase laga diya
}

// agar hame esi item ko dusre const variavle me push karna ho to kuch es tarah se likh sakte h like

const fruits= ["Mango","Lichi", "carrot", "PineApple"];
const fruit2=[];
for(let fruit of fruits){     
    fruit2.push(fruit.toUpperCase());      
}
 console.log("fruit2 is ", fruit2);   


//  NOTE:- for of loop more useful because its easy to use fro everyone