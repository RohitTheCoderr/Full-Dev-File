// nested if else 

let winningNum = 20;
let userGuess = +prompt("Guess a number");   // taking input from user by using prompt but prompt allways taking a number in string from user like
console.log(typeof userGuess, userGuess);   // checking prompt taking input in string or not
// // Note:-- prompt hamesa string me input leta h user se but ham uske aage + laga dene se input string se number me change ho jayega do aur tarika h change karne ka jaise ki lext line me h 
// // let newUserGuess= Number(userGuess);       // converting string to number by using new variable name
// userGuess= Number(userGuess);       // converting string to number withougth using new variable name
// console.log(typeof userGuess, userGuess);   // checking prompt taking input in string or not


if (userGuess==winningNum) {
console.log("Right guessed a number by user");
}
 else {     // else ke andar if else lagana hi  nested if else kahte h
        if (userGuess<winningNum) { 
                  console.log("too low guessed a number by user");
              }
       else {
                   console.log("too high guessed a number by user");
            }
     }   