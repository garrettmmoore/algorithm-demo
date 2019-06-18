// Complete the aVeryBigSum function below.
var ar = [5,
    1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    // const calculateSum = (accumulator, currentValue) => accumulator + currentValue;

    // return ar.reduce(calculateSum);

    var sum = ar.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return sum;
}



console.log(aVeryBigSum(ar))