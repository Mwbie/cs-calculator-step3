//module
import * as theme from "./_theme.js"
//variable declaration
let display = document.querySelector('.zero')
let btnNumbers = document.querySelectorAll('.number')
let btnClear = document.querySelector('#btn-clear')
let btnLastClear = document.querySelector('#btn-last-clear')
let btnBackSpace = document.querySelector('#btn-back-space')
let btnRadical = document.querySelector('#btn-radical')
let btnMul = document.querySelector('#btn-mul')
let btnPowTwo = document.querySelector('#btn-pow-two')
let btnPowThree = document.querySelector('#btn-pow-three')
let btnMinus = document.querySelector('#btn-minus')
let btnPlus = document.querySelector('#btn-plus')
let btnDiv = document.querySelector('#btn-div')
let btnOneDiv = document.querySelector('#btn-one-div')
let btnPn = document.querySelector('#btn-Pn')
let btnPoint = document.querySelector('#btn-point')
let btnEqual = document.querySelector('#btn-equal')
let output = document.querySelector('#first-number')
let btnPercentage = document.querySelector('#btn-percentage')
let historySection = document.querySelector('.history')
let historyBtn = document.querySelector('#history')
let memoryBtn = document.querySelector('#memory')
let historyMsg = document.querySelector('#msg')
let pointFlag = false;
let num1, num2, result, temp = 0;
let op;
let resultFlag = false;
let history = []

//function decelaration
const clearData = () => {
    display.innerHTML = 0
    output.innerHTML = ''
    pointFlag = false;
    resultFlag = false;
    num1 = 0;
    num2 = 0;
    op = ''
    temp = 0;
    history = []
    showHistory(history)   
}

const calculate = (number1,number2) => {
  
    num2 = Number(display.innerHTML)
    switch (op) {
        case '+': 
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    temp = result; // store the result into temp
    display.innerHTML = result;
    output.innerHTML = num1 + op + num2;
    history.push({num1, num2, op, result}); // add the calculation to the history
  
}
const showHistory = (historyList) => {

   historyList.forEach(item=>{
    historySection.insertAdjacentHTML("beforeend",
    `<ul> <li> <p>${history[0].num1} + ${history[0].num2}  = </p> <span> ${history[0].result}</span> </li> </ul>`
    )
   })
   if(historySection.querySelector('ul') !== null){
    historyMsg.innerHTML = ''
   }else{
    historyMsg.innerHTML = `There's no history yet`
   }
   
   history = []
}

//event decelaration
btnOneDiv.addEventListener('click', () => {
    num1 = display.innerHTML
    result = 1 / num1
    display.innerHTML = result
})

btnPercentage.addEventListener('click', () => {
    if (result.toString().match('.')) {
        pointFlag = true
    }
    if (result) {
        result = result / 100
        display.innerHTML = result
    }
})

btnPlus.addEventListener('click', () => {
    op = '+';
    output.innerHTML = display.innerHTML + op;
    if (temp != 0) {
        num1 = temp;
    } else {
        num1 = Number(display.innerHTML);
    }
   
    display.innerHTML = 0;
});

btnMinus.addEventListener('click', () => {
    op = '-';
    output.innerHTML = display.innerHTML + op;
    if (temp != 0) {
        num1 = temp;
    } else {
        num1 = Number(display.innerHTML);
    }
    display.innerHTML = 0;
})

btnMul.addEventListener('click', () => {
    op = '*';
    output.innerHTML = display.innerHTML + op;
    if (temp != 0) {
        num1 = temp;
    } else {
        num1 = Number(display.innerHTML);
    }
    display.innerHTML = 0;

})

btnDiv.addEventListener('click', () => {
    op = '/';
    output.innerHTML = display.innerHTML + op;
    if (temp != 0) {
        num1 = temp;
    } else {
        num1 = Number(display.innerHTML);
    }
    display.innerHTML = 0;
})
btnPowTwo.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    op = '**'
    result = Math.pow(num1, 2)
    display.innerHTML = result


})


btnPowThree.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    op = '***'
    result = Math.pow(num1, 3)
    display.innerHTML = result


})
btnRadical.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    result = Math.sqrt(num1)
    display.innerHTML = result


})

btnEqual.addEventListener('click', () => {
    if(display.innerHTML == 0 ){
       return  
    }
    calculate(Number(temp) , Number(display.innerHTML))
    display.innerHTML = result
    resultFlag = true
    showHistory(history)
})


btnNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (display.innerHTML == 0) {
            display.innerHTML = ''
        }
        display.innerHTML += e.target.innerHTML
    })

})

btnBackSpace.addEventListener('click', () => {
    let len = display.innerHTML.length
    let lastDigit = display.innerHTML.slice(len - 1, len)
    if (lastDigit == '.') {
        pointFlag = false
    }
    if (len > 1) {
        display.innerHTML = display.innerHTML.slice(0, len - 1)
    } else {
        display.innerHTML = 0
    }


})

btnPoint.addEventListener('click', () => {
    if (pointFlag == false) {
        display.innerHTML += '.'
        pointFlag = true
    }


})

btnPn.addEventListener('click', () => {
    display.innerHTML = display.innerHTML * -1
})

btnClear.addEventListener('click', () => {
    clearData()
})
btnLastClear.addEventListener('click', () => {
    display.innerHTML = 0
})
historyBtn.addEventListener('click',(e)=>{
if(e.target.classList.contains('active')){
return
}else{
    memoryBtn.classList.remove('active')
    e.target.classList.add('active')
}

})
memoryBtn.addEventListener('click',(e)=>{
    if(e.target.classList.contains('active')){
    return
    }else{
        historyBtn.classList.remove('active')
        e.target.classList.add('active')
    }
})