function checkPassword (password){
    let reasons = [];

    let length = password.length;

    let hasUppercase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");


    for (let i = 0; i < length; i++){
        let character = password[i];
        // console.log(character);
        if(character >= "0" && character <= "9"){
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z"){
            hasUppercase = true;
        }
    }
    // console.log(password, length, hasUppercase,hasNumber);

    if(hasNumber == false) {
        reasons.push("Maissing number");
    }
    if(hasUppercase == false){
        reasons.push("Maissing Uppercase")
    }
    if(hasSpace == true){
        reasons.push("Space found !!!!")
    }
    // console.log(hasSpace);

    let isValid ;
    if (reasons.length === 0) {
        isValid = true;
    } else {
        isValid = false;
    }
    // console.log(isValid)
    

    return {
        valid : isValid,
        reasons,
    }
}
// let output = checkPassword("helloworld");
let output = checkPassword("Hello123");

console.log(output);