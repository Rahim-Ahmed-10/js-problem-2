function doubleorTriple (number,doDuble){
    if(doDuble === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number *3;
        return result;
    }
}

console.log(doubleorTriple(10,true));
console.log(doubleorTriple(5,false));