//variable
const generateInput = document.getElementById('generate-input');
const generateBtn = document.getElementById('generate-btn');

const calcBody = document.getElementById('calc-body');
const calcInput = document.getElementById('calc-input');

const submitBtn = document.getElementById('submit-btn');

const successNotify = document.getElementById('success');
const errorNotify = document.getElementById('error');
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

// remove last element 
function removeLastElement(totalElements) {
    let stringArray = [];
    for (let element of totalElements) {
        stringArray.push(element);
    };
    stringArray.pop();
    return stringArray.join('');
}
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
        } else {
            calcInput.value = removeLastElement(previousInputValue);
        }
    } else {
        const currentInputValue = previousInputValue + btnNumber;
        calcInput.value = currentInputValue;
    }

});

//match two numbers
submitBtn.addEventListener('click', function () {
    //error handling
    if (generateInput.value == "") {
        errorNotify.innerText = ""
    }
})
