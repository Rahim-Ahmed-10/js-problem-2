// Inch teke feet janar jonno//* */

function inchToFeet (inch){
    const feet = inch/12;
    return feet;
}
const shuvoHight = inchToFeet (75);
// console.log(shuvoHight);


function inchToFeet2(inch){
    const feetFraction = inch / 12; 
    const feetNumber = parseInt (feetFraction);
    const inchRemaining = inch %12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const shuvoHight2 = inchToFeet2 (60);
console.log(shuvoHight2);