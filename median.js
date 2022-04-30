function caulculateArithmeticMean(list){
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list.length;
    return averageList;
}

const list1 = [
    100,
    200,
    500,
   // 800,
    4000000,
];
function calculateMedian(list){

    const halfList = parseInt(list.length/2);

    function isEven(amountElements){
        if (amountElements % 2 === 0){ //using the module 
            return true;
        } else {
            return false;
        }
    }

    let medianResult;

    // validating if our list is even
    if (isEven(list.length)){
        const element1 = list[halfList - 1];
        const element2 = list[halfList];

        const average1_2 = caulculateArithmeticMean ([element1, element2]);

        medianResult = average1_2;
        return medianResult;

        // We need two elements
        // -> the average
        // -> the median
    } else {
        medianResult = list1[halfList]
        return medianResult;
    }
}

//Create function calculateMedian()
// Ordenate the list before calculating the median, Using method sort of the arrays.
