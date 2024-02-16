// Analyse karte h 

let numbers = [1,2,3,4,5];

// numbers.        // jab ham yha numbers. jaise hi likhte h fir hamare screen me bahut sare method ka option mil jata h like push, map, filler, fill, etc
console.log(numbers);
// but jab ham ese print kr ke dekhte h to esme to koi method so hi nhi hota h fir ye method aate kaha se h ?
//  ans ye sare method javascript ko prototype se milte h but prototype to sirf function me hote h but ye(numbers) to ek array h 
//  esa esliye kyoki javascript array ko kuch ese banata h 
   let numberss = new Array(1,2,3,4,5);         
console.log(numberss);
console.log(Array.prototype);        // ab eska prototype check kre to es array ka prototype me bahut sa method h 
// isliye jab ham arrayname. dalte h to bahut sa method show hone lagta h 
// isliye ham array ko new keyword na laga kar simple array ki tarah use kr lete h kyoki vo aasan hota h likhna like numbers jaise likhe h upr

// jaise ham esme Array.prototype use kr ke eske sare method dekhe h usi tarah ham upr numbers ke bhi prototype me sare method ko dekh sakte h uske liye hame kuch esa likhna padega like

console.log(Object.getPrototypeOf(numbers));            // aap dekh sakte h esme bhi same bahut sare prototype ke method h 





