// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1= "myvalue1";
const value2= "myvalue2";

// const obj={                 // yha hamne ek empty obj name ka Object banaya

// }

// obj[key1]=value1;     // yha hamne key1 ke value ko obj ka key banaya aur usme value1 ki value liya h pahle key1 ke objkey1 me value1 ka value le liya aur fir use obj me key1 ki value objkey1 ko obj ka key bana diya
// obj[key2]=value2;      // same yha bhi vahi kaam ho rha h
// console.log(obj);     

// Note:-  ham same kaam karne ke liye ese obj ke ander bhi likjh sakte the kuch ese like

const obj={                 // variable me [] laga dene se ye hoga ki ham uski value ko use kar rhe h es obj name ke variable me key ke roop me
    [key1]:value1,           // yha hame kuch esa likhna padta h
    [key2]:value2   
}

console.log(obj);     // check esa hua ya nhi 