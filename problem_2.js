// function analyzeMarks (marksObj){
//     // console.log(marksObj);

//     let total = 0;
     
//     for (let subject in marksObj){
//         let value = marksObj[subject];
//         total += value;
//         console.log(subject, "-> ",value);
//     }
//     let average = total / Object.keys(marksObj).length;
//     console.log("Total -> " ,total);
//     console.log("average -> ",average);
// }
// analyzeMarks ({math: 78,english: 65,physics: 88,bangla: 55})



// function analyzeMarks (marksObj){
//     // console.log(marksObj);

//     let total = 0;
     
//     for (let subject in marksObj){
//         let value = marksObj[subject];
//         total += value;
//         console.log(subject, "-> ",value);
//     }
//     let average = total / Object.keys(marksObj).length;
//     // console.log("Total -> " ,total);
//     // console.log("average -> ",average);
//     return {
//         total,
//         average,
//     }
// }
//  let output = analyzeMarks ({math: 78,english: 65,physics: 88,bangla: 55});
//  console.log(output);



function analyzeMarks (marksObj){
    // console.log(marksObj);

    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;
    let highestSubject = null;
    let lowestSubject = null;

    for (let subject in marksObj){
        let value = marksObj[subject];
        total += value;
        // console.log(subject, "-> ",value);
        if(value > highestMark){
            highestMark = value;
            highestSubject = subject;
        }
        if(value < lowestMark){
            lowestMark = value;
            lowestSubject = subject;
        }
    }
    // console.log("highestMark -> ",highestMark);
    // console.log("lowestMark -> ",lowestMark)
    // console.log("high subject -> " ,highestSubject);
    // console.log("lowe subject -> ",lowestSubject);

    let average = total / Object.keys(marksObj).length;
    // console.log("Total -> " ,total);
    // console.log("average -> ",average);
    return {
        total,
        average,
         highestMark,
        lowestMark,
        highestSubject,
        lowestSubject,
        
    }
}
 let output = analyzeMarks ({math: 78,english: 65,physics: 88,bangla: 55});
 console.log(output);
