// NOTE:- aapne dekha ki kese ye setTimeout method kaam karta h 
// ab eske bare kuch aur jante h yhi pr
// ye setTimeout  method hame ek id return krke deta h callback se phle hi jise ham kisi variable me store kr sakte h like

console.log("script start");
const idofset= setTimeout(()=> {
   console.log("inside setTimeOut");
},0)   

for (let i = 0; i < 100; i++) {
   console.log("........");
}
console.log("setTimeout id is ", idofset);  // aap dekhe ki eski id hame mil gai h jise ham callback se pahle hi print kara skte h 
// esi tarah ham ese callback hone se pahle hi ese remove kr sakte h means ydi hamara man nhi ho ese execute karne ko to callback se pahle hi ese remove kr sakte h iski id ki help se like
console.log("clearing set time out");  
clearTimeout(idofset);   // esa karne ke bad ab ye jo setTimeout h uska callback hame nhi milega jisse uske andr vala fun run nhi hoga
console.log("script end");