// clone using Object.assign

// NOTE:- clone smjne se Pahle thoda ye samjte h  
// yha hamne ek object banaya h jo ek heap memory me store h aur obj1 and obj2 ke pass sirf eska address h memory ka jaah ye object store h
const obj1 ={                      
    key1 : "value1",
    key2 : "value2"
}
const obj2 = obj1;       //      yha obj2 ko obj1 ke equal rakh diya h 
console.log("obj1 item is ",obj1);       // ab ese print kr ke dekhte h 
console.log("obj2 item is ",obj2);         // ese bhi print kr ke dekhte h
// note:- aap dekh skte h dono ki same value h kyoki obj1 ke pass object ki memory address h jise obj2 ke equal karne pr obj2 ke pass bhi vahi same address h
// kuch item add karte h obj1 me fir dekhte h

obj1.key3 = "value3";                // yha maine ek key3 ko obj1 me store kiya h 
console.log("New item of obj1 is ", obj1);
console.log("New item of obj2 is ", obj2);
// NOTE ;- aap dekhe dono me key3 value add ho gai h esa isliye kyoki obj1 ke pass object ki memory address h jide obj1 ne obj2 ko bhi share kiya h address isliye
// NOTE: - BUT agr hm chahe ki ham jis bhi obj me keys ko add kare sirf usi me ho add ya remove ho to uske liye hame clone karna padega like'

const obj3 = {
    key4: "value4",
    key5: "value5"
}
const obj4 ={...obj3}         // yha hamne clone kar diya h yha obj3 object ki memory address bhale hi share kar rhi h obj4 ko but agr ham ek dusre me koi key add ya remove kre to esse ek dusre pr koi effect nhi padega like 
// const obj4 =Object.assign({}, obj3)    // ye bhi ek clone karne ka tarika h but ye old method h uper vala new method
console.log("obj3 item is ",obj3); 
console.log("obj4 item is ",obj4); 

obj3.key6 = "value6";      // yha hamne obj3 me value6 dala h jabki
obj4.key7 = "value7";      // yha hamne obj4 me value7 dala h 
// note aap dekhenge ki esa karne se ek dusre pr koi effect nhi pada ese ki clone karna bolte h
console.log("New item of obj3 is ", obj3);
console.log("New item of obj4 is ", obj4);
