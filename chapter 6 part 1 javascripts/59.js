//  some method of array

//  to samjhe ki some method kya karta h 
//  agar some method ko array me ek bhi condition ke hisab se mila to true return kar dega nhi to false
const numbers =[10,8,6,2,2,1,4,]
// ham chahte h ki kya ek bhi esa number h jo odd h es number v ale array me 
// if ek bhi number odd mila to return true karega nhi mila to false karega like

const check = numbers.some(isOdd => isOdd % 2 != 0 )     // aap jante hi h ki single parameter ke liye () nhi bhi laga sakte h aur return ke liye ham ek hi line me condition likh kr bhi return kara sakte h bina return word use kiye like this line
console.log(check);      // aap dekh sakte h numbers me ek Odd number bhi h jo ki 1 j isliye true print hoga

//  another example

const teacherInfo = [
    {teacherName: "P.k. sharma", post: "Princple", salary: 70000},
    {teacherName: "Anupam sharma", post: "Princple", salary: 50000},
    {teacherName: "Meenu", post: "Princple", salary: 9000},
    {teacherName: "Monika", post: "Princple", salary: 10000},
    {teacherName: "Gopal gupta", post: "Princple", salary: 8000},
    {teacherName: "Charu", post: "Princple", salary: 7000},
]

const checkSalary =teacherInfo.some(income => income.salary >= 50000) ;       // yha hmane bola ki kya ek bhi esa teacer h jiske salary 50000 se jyada ya uske equal ho   chahe condition jayada mile but kam se kam ek millna chahiye
console.log(checkSalary);          // output aaya true yani koi esa bhi teacher h jiski salary 7000 ke barabar h



