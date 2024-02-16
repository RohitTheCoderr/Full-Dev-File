// new keyword 

// ab ham new keyword ke bare me jante h 

function createUser(secondName, age) {
    this.secondName = secondName;
    this.age= age;
}
// hmane createUser ke prototype me  about function ko add kar diya h 
createUser.prototype.about = function () {         
    console.log(this.secondName,  this.age);
}

// createUser("kumari", 48);      // es function ko call kiya h 
//  but ham ese new keyword se bhi yahi kaam kara sakte h like 
const user1 = new createUser("thakur", 20);         // yha es function ko new keyword ki help se call kiya but yha ek user1 ek object bhi ban gya  
user1.about();                // ab hamne direct yha se user1 ke ke about ko call kar sakte h kyoki about fun to ab user1 me bhi h na new keyword ke help se  
// console.log(user1.about);
// new keyword 3 kaam karta h 
// 1) empty object create karta h jise this ke equal kar deta h like ==>  this = {}   
// 2) fir us this ko return krta h 
// 3) fir ye jo pichhle file me prototype ko function ke equal rakhte the ye same kaam kar ke dega like pichhle me ham ye line likhte the ==>  const user = Object.create(createUser.prototype);  


