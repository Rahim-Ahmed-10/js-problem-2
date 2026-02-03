// EVEN**//

function isEven(numbers){
    if(numbers % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(5));
// console.log(isEven(10));


// ODD**?

function isEven2 (Numbers){
    if(Numbers %2 ===1){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven2(5));
console.log(isEven2(10));



function evenSizeString (str){
    const size = str.length;
    console.log(str,size);
    if (size %2 ===0){
        console.log('even size')
    }
    else{
        console.log('odd size')
    }
}

evenSizeString('Dhaka');
evenSizeString('faka');