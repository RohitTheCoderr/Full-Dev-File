// if 
// else if 
// else if 
// else if 
// else


let checkTempInDegree = +prompt("check temprecture of outside");

if (checkTempInDegree<0) {
    console.log(`${checkTempInDegree} degree temprecture extremely cold outside `);
} 
else if(checkTempInDegree==0) {
    console.log(`${checkTempInDegree} degree temprecture very cold outside `);
} 
else if(checkTempInDegree<=15) {
    console.log(`${checkTempInDegree} degree temprecture cold outside `);
} 
else if(checkTempInDegree<=25) {
    console.log(`${checkTempInDegree} degree temprecture normal weather of outside `);
} 
else if(checkTempInDegree<=35) {
    console.log(`${checkTempInDegree} degree temprecture hot weather of outside so lets go for swin `);
} 
else{
    console.log(`${checkTempInDegree} degree temprecture hot weather of outside so turn ON the AC `);
}


//  check day with help of 1 to 7 number 

let dayNum = +prompt("Enter 1 to 7 number for find a day"); // prompt is use for taking input from user
if (dayNum==1) {
    console.log("Sunday");
}
else if (dayNum==2) {
    console.log("Monday");
}
else if (dayNum==3) {
    console.log("Tuesday");
}
else if (dayNum==4) {
    console.log("Wednesday");
}
else if (dayNum==5) {
    console.log("Thrusday");
}
else if (dayNum==6) {
    console.log("Friday");
}
else if (dayNum==7) {
    console.log("Saturday");
}
else{
    console.log("Invalid day");
}



