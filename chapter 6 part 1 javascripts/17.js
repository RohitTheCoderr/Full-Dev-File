// switch statement

// find day by using 1 to 7 number with switch statement

// let dayNum = +prompt("Enter any NUmber  1 to 7 for find day");
// switch (dayNum) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thrusday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Satursday")
//         break;

//     default:
//         console.log("Invalid day");
//         break;
// }


//  check month name just enter 1 to 12 number using switch statement

// let firstChar = +prompt("check month name just enter 1 to 12 number");

// switch (firstChar) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// }


// Checking which and how many month is 28 days, 29 days, 30 days, 31 days
let dayNum = +prompt("Enter 28/29, 30, 31 number Checking which and how many month is 28 days, 29 days, 30 days, 31 days")
switch (dayNum) {
    case 28:
        console.log("only 1 month of 28 or 29 days like FEBRUARY");
        break;
    case 29:
        console.log("only 1 month of 28 or 29 days like FEBRUARY");
        break;
    case 30:
        console.log(" Total 4 months of 30 days like APRIL, JUNE, SEPTEMBER, NOVEMBER ");
        break;
    case 31:
        console.log("Total 7 months of 31 days like JANUARY, MARCH, MAY, JULY, AUGUST, OCTOBER, DECEMBER");
        break;

    default:
        console.log(`No any month of ${dayNum} dayds`);
        break;
}



