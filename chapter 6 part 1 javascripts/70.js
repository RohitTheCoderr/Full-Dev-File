// arrow function and this

// NOTE:- Arrow function me this nhi hota h mtlb ham jaise pichhle js file me this.firstname and any key ki value lete the vahi chij ham arrow function menhi kar sakte h like

const user1 = {
    firstName : "rohit",
    age : 30,  
    about : () => {                               // arrow function banaya h
        console.log(this);                        // yha ham check bhi kar sakte h arrow function ka this kya hota h eska this window hota h jo ki ek upar level ka hota h               
        console.log(this.firstName, this.age);      // yha hamne this lagaya h but arrow function me eska this nhi hota h yani this es user1 object ka this nhi hoga
    }
}

user1.about.call(user1)            // ham (user1) ka name bhi pass kara denge tab bhi arrow function me this es object (user1) ka nhi hoga
// note:- kyoki arrow function apne se ek upar ka this leta h yani ye window ka this hoga  aap arrow function me this ko print kara ke dekh bhi sakte h upar me






