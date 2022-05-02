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

function medianColSalaries (list){
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

console.log(
    medianColSalaries(sortedColSalaries)
);