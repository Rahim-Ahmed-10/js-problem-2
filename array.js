function sumOfNumbers(Numbers){
    let sum = 0;
    for(const number of Numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const Numbs =[55, 62, 12, 6];
const sums = sumOfNumbers (Numbs);
console.log('sum of Numbers is :' + sums);