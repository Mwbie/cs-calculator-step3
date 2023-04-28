//module
import * as theme from "./_theme.js";
import { showHistory, historyArray, historyMsg, historySection, historyTrash } from "./_history.js";
import { memorySection, memoryMsg, memoryTrash , mDrop } from './_memory.js'

//Variable
const buttonContainer = document.querySelector('.numbers');
const mainDisplay = document.querySelector('.zero');
const histroryMemory = document.querySelector('.history')
const secondaryDisplay = document.querySelector('#first-number');
let result;
let pointFlag = false;
let temp;
let icons = document.querySelector('.icons')
let calcArray = {
    numbers: [],
    operators: [],
};
// 




//functions
const calculation = () => {
    if (!temp) {
        result = calcArray.numbers[0];
    } else {
        result = temp;
    }
    for (let i = 0; i < calcArray.operators.length; i++) {
        const operator = calcArray.operators[i];
        const number = calcArray.numbers[i + 1];
        switch (operator) {
            case "+":
                result += number;
                break;
            case "-":
                result -= number;
                break;
            case "×":
                result *= number;
                break;
            case "/":
                result /= number;
                break;
        }
    }
    showSecondDisplay()
    temp = Number(result);
    mainDisplay.innerHTML = result;
    historyArray.push(calcArray, result)
    calcArray = {
        numbers: [],
        operators: [],
    };

}

function selectButton(button, buttonId) {

    if (button.classList.contains('border-bottom')) {
        return;
    } else {
        const activeButton = document.querySelector('.border-bottom');
        activeButton.classList.remove('border-bottom');
        button.classList.add('border-bottom');
    }
    if (buttonId === 'history') {
        if (!historySection.querySelector('ul')) {
            historyMsg.innerHTML = `There's no history yet`
            historyTrash.style.display = ' none'
            memoryTrash.style.display = 'none'
        } else {
            historyMsg.innerHTML = ``
            historyTrash.style.display = ' block'
            memoryTrash.style.display = 'none'
        }
        historySection.style.display = 'block'
        historyMsg.style.display = 'block'
        memorySection.style.display = 'none'
        memoryMsg.style.display = 'none'


    } else {
        if (!memorySection.querySelector('ul')) {
            memoryMsg.innerHTML = `There's nothing saved in memory`
            historyTrash.style.display = 'none'
            memoryTrash.style.display = 'none'
        } else {
            memoryMsg.innerHTML = ``
            historyTrash.style.display = 'none'
            memoryTrash.style.display = 'block'
        }
        historySection.style.display = 'none'
        historyMsg.style.display = 'none'
        memorySection.style.display = 'block'
        memoryMsg.style.display = 'block'
    }
}
function pushToArray(number, operator) {
    calcArray.numbers.push(number);
    switch (operator) {
        case "+":
            calcArray.operators.push('+');
            showSecondDisplay()
            break;
        case "-":
            calcArray.operators.push('-');
            showSecondDisplay()
            break;
        case "*":
            calcArray.operators.push('×');
            showSecondDisplay()
            break;
        case "/":
            calcArray.operators.push('/');
            showSecondDisplay()
            break;
    }
    mainDisplay.innerHTML = '0';
}
function showSecondDisplay() {
    let x = ''
    calcArray.numbers.forEach((number, index) => {
        x += number
        if (calcArray.operators[index]) x += calcArray.operators[index]
    })
    secondaryDisplay.innerHTML = x
    
}
function closeWindow() {
    window.close();
}
function minimizeWindow() {
    console.log('this option not working:)');
}
function fullScreenWindow() {
    if (window.document.documentElement.requestFullscreen) {
        window.document.documentElement.requestFullscreen();
    } else if (window.document.documentElement.webkitRequestFullscreen) {
        window.document.documentElement.webkitRequestFullscreen();
    } else if (window.document.documentElement.mozRequestFullScreen) {
        window.document.documentElement.mozRequestFullScreen();
    } else if (window.document.documentElement.msRequestFullscreen) {
        window.document.documentElement.msRequestFullscreen();
    }
}
//EventListener
histroryMemory.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'history':
            selectButton(e.target, 'history')
            break;
        case 'memory':
            selectButton(e.target, 'memory')
            break;

    }
})

buttonContainer.addEventListener('click', (e) => {
    switch (e.target.classList[0]) {
        case 'number':
            if (mainDisplay.innerHTML == 0) {
                mainDisplay.innerHTML = ''
            }
            mainDisplay.innerHTML += e.target.textContent;
            break;
        case 'sign':
            switch (e.target.id) {
                case 'btn-div':
                    pushToArray(parseFloat(mainDisplay.innerHTML), '/')
                    break;
                case 'btn-mul':
                    pushToArray(parseFloat(mainDisplay.innerHTML), '*')
                    break;
                case 'btn-minus':
                    pushToArray(parseFloat(mainDisplay.innerHTML), '-')
                    break;
                case 'btn-plus':
                    pushToArray(parseFloat(mainDisplay.innerHTML), '+')
                    break;
                case 'btn-equal':
                    if (mainDisplay.textContent == '0') {
                        return
                    } else {
                        calcArray.numbers.push(parseFloat(mainDisplay.innerHTML));
                        calculation()
                    }
                    showHistory(historyArray)
                    secondaryDisplay.innerHTML += ' ='
                    break;
                case 'btn-clear':
                    mainDisplay.innerHTML = 0
                    secondaryDisplay.innerHTML = ''
                    pointFlag = false;
                    // resultFlag = false;
                    calcArray.numbers = [];
                    calcArray.operators = [];
                    historyArray = [];
                    temp = '';
                    break;
                case 'btn-back-space':
                    let len = mainDisplay.innerHTML.length
                    let lastDigit = mainDisplay.innerHTML.slice(len - 1, len)
                    if (lastDigit == '.') {
                        pointFlag = false
                    }
                    if (len > 1) {
                        mainDisplay.innerHTML = mainDisplay.innerHTML.slice(0, len - 1)
                    } else {
                        mainDisplay.innerHTML = 0
                    }
                    break;
                case 'btn-percentage':
                    if (result.toString().match('.')) {
                        pointFlag = true
                    }
                    if (result) {
                        result = result / 100
                        mainDisplay.innerHTML = result
                    }
                    break;
                case 'btn-last-clear':
                    mainDisplay.innerHTML = 0
                    break;
                case 'btn-radical':
                    if (mainDisplay.textContent == '0') {
                        return
                    } else {
                        result = Math.sqrt(+mainDisplay.textContent)
                        mainDisplay.textContent = result
                    }
                    break;
                case 'btn-pow-two':
                    if (mainDisplay.textContent == '0') {
                        return
                    } else {
                        result = Math.pow(+mainDisplay.textContent, 2)
                        mainDisplay.textContent = result
                    }
                    break;
                case 'btn-pow-three':
                    if (mainDisplay.textContent == '0') {
                        return
                    } else {
                        result = Math.pow(+mainDisplay.textContent, 3)
                        mainDisplay.textContent = result
                    }
                    break;
                case 'btn-one-div':
                    if (mainDisplay.textContent == '0') {
                        return
                    } else {
                        result = 1 / +mainDisplay.textContent
                        mainDisplay.textContent = result
                    }
                    break;
                case 'btn-Pn':
                    mainDisplay.innerHTML = mainDisplay.innerHTML * -1
                    break;
                case 'btn-point':
                    if (pointFlag == false) {
                        mainDisplay.innerHTML += '.'
                        pointFlag = true
                    }
                    break;

                default:

                    break;

            }
            break;


    }
})

icons.addEventListener('click', (e) => {

    switch (e.target.classList[0]) {
        case 'minus':
            minimizeWindow()
            break;
        case 'full':
            fullScreenWindow()
            break;
        case 'close':
            closeWindow()
            break;
    }
})