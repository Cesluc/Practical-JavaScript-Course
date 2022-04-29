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

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let discount;

    switch (couponValue){
        case coupons [0]: // get_your_discount
            discount = 15;
        case coupons [1]: // april30
            discount = 30;
        case coupons [2]: // sales2022
            discount = 25;
    }

    const priceWithDiscount = calculatePriceWithDiscount(priceValue,discount);

    const resultP = document.getElementById("ResultP")
    resultP.innerText = "The price with discount is: " + priceWithDiscount;

}


// console.log({
//     discount,
//     priceWithDiscou 
//     percentageDiscountPrice,
//     originalPrice
// }):

const coupons = [
    "get_your_discount",
    "april30",
    "sales2022"
];

