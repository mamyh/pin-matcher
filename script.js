//variable
const generateInput = document.getElementById('generate-input');
const generateBtn = document.getElementById('generate-btn');

const calcBody = document.getElementById('calc-body');
const calcInput = document.getElementById('calc-input');

const submitBtn = document.getElementById('submit-btn');

const successNotify = document.getElementById('success');
const errorDiv = document.getElementById('error');
const errorNotify = document.getElementById('error-notify');

//disable the notifications 
successNotify.style.display = "none";
errorDiv.style.display = "none";
//common funcitons
function generatePin() {

    const randomFiveNumbers = Math.round(Math.random() * 20000);
    const randomString = randomFiveNumbers + '';
    if (randomString.length == 5) {
        return randomString;
    } else {
        return generatePin();
    }
}
//remove last element with slice
function removeLastElement(totalElements) {
    return totalElements.slice(0, totalElements.length - 1);
}
//remove last element with subStrig()
/* function removeLastElement(totalElements) {
    return totalElements.substring(0, totalElements.length - 1);
} */
//remove last element with substr()
/* function removeLastElement(totalElements) {
    return totalElements.substr(0, totalElements.length - 1);
} */
// remove last element my method 
/* function removeLastElement(totalElements) {
    let stringArray = [];
    for (let element of totalElements) {
        stringArray.push(element);
    };
    stringArray.pop();
    return stringArray.join('');
} */
//generate the pin
generateBtn.addEventListener('click', function () {
    generateInput.value = generatePin();
});

//calculation part 
calcBody.addEventListener('click', function (e) {
    const calcBtn = e.target;
    const previousInputValue = calcInput.value;
    const btnNumber = calcBtn.innerText;
    if (isNaN(btnNumber)) {
        if (btnNumber.toLowerCase() === "c") {
            calcInput.value = "";
        } else if (btnNumber.toLowerCase() === "submit") {
            const pin = generateInput.value;
            const calcValue = calcInput.value;
            //error handling
            if (pin == "") {
                errorDiv.style.display = "block";
                errorNotify.innerText = "Error ! you have no pin. create it!"
            }
            else if (calcValue == "") {
                errorDiv.style.display = "block";
                errorNotify.innerText = "Error! you have no input in calc.click buttons"
            }
            else if (pin !== calcValue) {
                errorDiv.style.display = "block";
                errorNotify.innerText = "Pin does not matched";
            }
            else {
                successNotify.style.display = "block";
                errorDiv.style.display = "none"
                calcInput.value = "";
                generateInput.value = "";
            }
        }
        else {
            calcInput.value = removeLastElement(previousInputValue);
        }
    } else {
        const currentInputValue = previousInputValue + btnNumber;
        calcInput.value = currentInputValue;
    }

});

//match two numbers
// submitBtn.addEventListener('click', function () {

// })
