// const originalPrice = 120;
// const discount = 18; //%


function calculatePriceWithDiscount(price, discount){
    const percentageDiscountPrice = 100 - discount;
    const priceWithDiscount = (price * percentageDiscountPrice)/100; 

    return priceWithDiscount;
}

function ButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue,discountValue);

    document.getElementById("ResultP")
    const resultP = document.getElementById("ResultP")
    resultP
    resultP.innerText = "The price with discount is: " + priceWithDiscount;

}


// console.log({
//     discount,
//     priceWithDiscou 
//     percentageDiscountPrice,
//     originalPrice
// }):



