const produceDrivingRange = (blockRange) =>{
  return function(number) {

    if(number.replace(/[^0-9]/g,'') <= blockRange){
      return `within range by ${number.replace(/[^0-9]/g,'') - blockRange}`
    }else {
      return `${number.replace(/[^0-9]/g,'') - blockRange} blocks out of range`
    }
  };
}

//
// function retailPriceMaker(manufacturePrice) {
//   return function(marketMultiplier) {
//     return marketMultiplier * manufacturePrice;
//   };
// }
//
// const retailPriceForNine = retailPriceMaker(9);
//
// retailPriceForNine(2);
