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

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon){
        alert ("The Coupon "+ couponValue + " is not Valid!");
    } else {
        const discount = userCoupon.discount;
        const priceWithDiscount = calculatePriceWithDiscount(priceValue,discount);

        const resultP = document.getElementById("ResultP")
    resultP.innerText = "The price with discount is: " + priceWithDiscount;
    }
}


// console.log({
//     discount,
//     priceWithDiscou 
//     percentageDiscountPrice,
//     originalPrice
// }):

const coupons = [
    {
        name:"get_your_discount",
        discount: 15,
    },
    {
        name:"april30",
        discount: 30,
    },
    {
        name:"sales2022",
        discount: 25,
    },
];

