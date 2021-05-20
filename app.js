// solution to No 1.
function convertFahrToCelcius(fahrenheit) {
    let degreeF = fahrenheit;
    let degreeC = (degreeF - 32) * 5 / 9;
    let answer = degreeC.toFixed(4);

    let typeOfFahrenheit = typeof fahrenheit;
    let checkIfArray = Array.isArray(fahrenheit);

    if (checkIfArray) {
        typeOfFahrenheit = "Array";
    }

    if(typeof fahrenheit !== "number") {
        if (typeof fahrenheit === "object") {
            fahrenheit = JSON.stringify(fahrenheit);
            answer = `${fahrenheit}is not a valid number but a/an ${typeOfFahrenheit}.`
        }

        if (!isNaN(fahrenheit)) {
            answer = answer;

        }

        if(isNaN(fahrenheit)) {
            answer = `${fahrenheit}is not a valid number but a/an ${typeOfFahrenheit}.`
        }
        if(fahrenheit === "") {
            answer = `${JSON.stringify(fahrenheit)}is not a valid number but a/an ${typeOfFahrenheit}.`
        }
    }
    return answer;
}
console.log(convertFahrToCelcius(""))
console.log(convertFahrToCelcius({temp: 0}))
console.log(convertFahrToCelcius([1,2,3,4]))
console.log(convertFahrToCelcius(1))

// solution to No 2

checkYuGiOh("5");

checkYuGiOh("fizzbuh is meh")

function checkYuGiOh (n) {
    let counter = parseInt(n);
    if(isNaN(counter)) {
        console.log(`invalid parameter: ${n}`);
        return;
    }

    let result = [...new Array(counter)].map((_, index) => {
        let value = index + 1;
        if(value % 2 !== 0 && value % 3 !== 0 && value % 5 !== 0) {
            return value;
        }
        else {
            value = "";
            if ((index + 1) % 2 === 0) value = "yu";
            if ((index + 1) % 3 === 0) value === "" ? (value = "gi") : (value += "-gi");
            if ((index + 1) % 5 === 0) value === "" ? (value = "oh") : (value += "-oh");
        }

        return value;
    
    });

    console.log (result);
}

