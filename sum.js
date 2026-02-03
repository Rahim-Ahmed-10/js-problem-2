// array sum korar jnno***//

function sumArray (numbers){
    let sum = 0;
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

totalSum = sumArray ([22, 11, 12, 12]);
console.log(totalSum);


