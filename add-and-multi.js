// ****Add and mulitiplication**//

function shopingQuliti(shirt,pant,shoe){
   const priceShirt = 500;
   const pricePant =300;
   const priceShoe =900;

   const totalPriceShirt = shirt * priceShirt;
   const totalPricePant = pant  * pricePant;
   const totalPriceShoe = shoe * priceShoe;

  const totalSoping =totalPriceShirt + totalPricePant + totalPriceShoe;
   
   return totalSoping; 
}

const totalPrice = shopingQuliti (1,1,1);
console.log("Shoping Done",totalPrice);