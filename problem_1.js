// function wordFrequency (sentence){
//     let words = sentence.split(" ");
//     let wordsCount = {};

//     for (let word of words){
//         console.log(word);
//         if (wordsCount.hasOwnProperty(word)){
//             wordsCount[word]++;
//         }
//         else {
//             wordsCount[word] = 1;
//         }
//         // console.log(word);
//     }
//     return wordsCount;
// }

// let output = wordFrequency("I love js and I love coding and js is fun");
// console.log(output);



function wordFrequency (sentence){
    let words = sentence.split(" ");
    let wordsCount = {};

    for (let word of words){
        console.log(word);
         let wordLowerCase = word.toLowerCase(); 
        if (wordsCount.hasOwnProperty(word)){
            wordsCount[word]++;
        }
        else {
            wordsCount[word] = 1;
        }
        // console.log(word);
    }
    return wordsCount;
}

let output = wordFrequency("I love js and I love coding and js is fun");
console.log(output);