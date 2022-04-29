
function caulculateArithmeticMean(list){
    // For cicle to sum the array
    // let sumList = 0;
    // for(let i=0; i < list.length; i++){
    //     sumList = sumList + list[i];
    // }
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list.length;
    return averageList;
}