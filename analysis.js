//Helpers
function isEven(number){
    return (number % 2 === 0);
}

function caulculateArithmeticMean(list1){
    const sumList = list1.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list1.length;
    return averageList;
}
// Median Calculator

function medianSalaries (list){
    const half = parseInt (list.length/2);
    if (isEven(list.length)){
        const personInTheMiddle1 = list[half - 1];
        const personInTheMiddle2 = list[half];

        const median = caulculateArithmeticMean([personInTheMiddle1,personInTheMiddle2]);
        return median;

    } else {
        const personInTheMiddle = list[half];
        return personInTheMiddle;
    }
}


// Create a new array only with the Salaries
const colSalaries = colombia.map(
    function(person){
        return person.salary;
    }
);

// Necessary to sort the array

const sortedColSalaries = colSalaries.sort(
    function (salaryA,salaryB){
        return salaryA - salaryB;        
    }
);

//Calculate the median
const generalColMedian = medianSalaries(sortedColSalaries);

// top 10% Median

// const arrayEg = [0,1,2,3,4,5|||,6,7|||,8,9,10]
// const EG = arrayEg.splice(5,2);
// const EG = [6,7]


const spliceStart = (sortedColSalaries.length * 90)/100;
const spliceCount = sortedColSalaries.length - spliceStart;
const salariesColTop10 = sortedColSalaries.splice(
    spliceStart,
    spliceCount
);
 const top10ColMedian = medianSalaries (salariesColTop10);

console.log({
    generalColMedian,
    top10ColMedian,
});