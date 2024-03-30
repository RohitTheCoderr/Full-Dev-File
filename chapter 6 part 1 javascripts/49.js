// parameters destructring

// useful for 
// object  and
// react


// This is object
const person = {
    firstName: "Rohit",
    subject: "computer"
}

function printFirstName(obj) {
    console.log(obj.firstName);     // person ke firstName ke key ki value pass kar deta hu 
    console.log(obj.subject);       // person ke subject ke key ki value pass kar deta hu 
    // console.log(obj.Age);           // maan lo age ko bhi pass kar du to esse undefined aayega kyoki person me age name ke koi bhi key nhi h
}

printFirstName(person);    // function ke obj name ke parameter me person name ke Object pass kiye h


//  parameters destructring  ki help se

function printFirstName({firstName , subject}) {      //  {} eske andar hamne person ke key ko likh diya h ye parameters destructing bolte h ab
    console.log(firstName);        // yha hame obj. kar ke likhne ki jarurat bi nhi h  
    console.log(subject);      
    // console.log(obj.Age);           // maan lo age ko bhi pass kar du to esse undefined aayega kyoki person me age name ke koi bhi key nhi h
}
printFirstName(person);




