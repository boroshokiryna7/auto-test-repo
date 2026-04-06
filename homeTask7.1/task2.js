function handleNum(number, callbackEven, callbackOdd) {
    if (number % 2 === 0) {
        return callbackEven();
    } else {
        return callbackOdd();
    }
}

function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}

handleNum(8, handleEven, handleOdd);


function ira() {
    console.log("Ira");
}

handleNum(3, ira, handleOdd);
