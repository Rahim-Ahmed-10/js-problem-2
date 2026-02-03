//  ***OBJECT PHONES *** //

const price = [60000, 30000, 25000, 35000, 12000,];

function getMin (numbers){
    let min = numbers[0]; 
    for(const num of numbers){
        // console.log(num);
        if(num < min){
            min = num;
        }
    }
    return min;
}

// const chaep = getMin(price); 
// console.log(chaep);

//  ***OBJECT PHONES *** //
 
const phones = [
    {Name :'Iphone', price :120000, camera :'12mp' , color :'bleak'},
    {Name :'oppo', price :30000,    camera :'12mp' , color :'bleak'},
    {Name :'realme', price :28000,  camera :'12mp' , color :'oreng'},
    {Name :'wolton', price :17000,  camera :'12mp' , color :'red'},
    {Name :'samsong', price :32000, camera :'12mp' , color :'bleak'},
]


function getshmartphone (phones){
      let min = phones[0]; 
    for(const phone of phones){
        // console.log(num);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const chaep = getshmartphone(phones);
console.log('amar shob take komdami phone:',chaep);



