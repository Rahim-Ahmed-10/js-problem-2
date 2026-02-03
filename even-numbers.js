//  ***Only Even Numbers///

function evenNumberOnly (numbers){
    const even = [];
    for (const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            even.push(number);
        }
    }
    return even;
    }

const numbers=[5, 8, 91, 24,6];
const evens = evenNumberOnly(numbers);
console.log('even number',evens);