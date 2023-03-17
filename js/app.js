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
let pointFlag = false;
let num1, num2, op, result, temp ;
let resultFlag = false;

//function decelaration
const clearData = () => {
    display.innerHTML = 0
    output.innerHTML = ''
    pointFlag = false;
    resultFlag = false;
    num1 = 0;
    num2 = 0;
    op = ''
    temp = '';
}
const calculate = (n1 , n2) => {
    if (resultFlag == false) {
        num2 = Number(display.innerHTML)
    } else {
        num1 = Number(display.innerHTML)
    }

    switch (op) {
        case '+':
        
     if(num1 && num2 ){
        result = Number(num1) + Number(num2)
     }else{
        result = Number(n1) + Number(n2)
     }
            
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    }

    temp = result; // store the result into temp
    console.log(n1 , n2 , num1 , num2)
    console.log(temp);
    console.log(Number(output.innerHTML))
};

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
    num1 = Number(temp) || Number(display.innerHTML);
    display.innerHTML = 0;
    op = '+';
    output.innerHTML = num1;
    
   
});

btnMinus.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    display.innerHTML = 0;
    op = '-'
    output.innerHTML = num1 + op
})

btnMul.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    display.innerHTML = 0;
    op = '*'
    output.innerHTML = num1 + op

})

btnDiv.addEventListener('click', () => {
    num1 = Number(display.innerHTML)
    display.innerHTML = 0;
    op = '/'
    output.innerHTML = num1 + op


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
    output.innerHTML = ''
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
