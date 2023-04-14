export const modes = document.querySelector('.modes');
export const memorySection = document.querySelector('#memory-section');
export const historyMsg = document.querySelector('#msg');
const mainDisplay = document.querySelector('.zero');
const mcButton = document.querySelector('.mc');
const mrButton = document.querySelector('.mr');
const mDrop = document.querySelector('.m')
const trashButton = document.querySelector('.trash')
export let memoryArray = []
let prevDigit = 0;
let myDigit = 0;


export function mPlusFunc(digit) {
    impoortToMemoryPlus(digit)
}
function impoortToMemoryPlus(lastDigit) {
    historyMsg.innerHTML = ''
    myDigit = lastDigit
    let memoryItem;
    if (memorySection.querySelector('ul')) {
        myDigit = +myDigit + +prevDigit;
        document.querySelector('ul li p span').innerHTML = myDigit
    } else {
        memoryItem = `
        <ul>
        <li>
          <p>
         <span>${myDigit}</span>
        <button class="mc de-active" style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer; 
        ;" onclick="mcFunc()">MC</button>
        <button class="m-plus active" style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer; 
        ;" onclick="mMinusFunc()">M+</button>
        <button class="m-minus active" style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer; 
        ;" onclick="mMinusFunc()">M-</button>
         </p>
        </li>
      </ul>
`;
        memorySection.insertAdjacentHTML('afterbegin', memoryItem)
    }
    prevDigit = myDigit;
    trashButton.style.display = 'block'

    checkClass()
}
export function mMinusFunc(digit) {
    impoortToMemoryMinus(digit)
}
function impoortToMemoryMinus(lastDigit) {

    myDigit = lastDigit * -1
    let memoryItem;
    if (memorySection.querySelector('ul')) {
        myDigit = +myDigit + +prevDigit;
        document.querySelector('ul li p span').innerHTML = myDigit
    } else {
        memoryItem = `
        <ul>
          <li>
            <p>
    <span>${myDigit}</span>
           </p>
          </li>
        </ul>
`;
        memorySection.insertAdjacentHTML('afterbegin', memoryItem)
    }
    prevDigit = myDigit;
    trashButton.style.display = 'block'

    checkClass()
}
export function mrFunc() {
    mainDisplay.innerHTML = myDigit
}

export function mcFunc() {
    memorySection.innerHTML = ''
    trashButton.style.display = 'none'
    checkClass()
    historyMsg.innerHTML = `There's no memory yet`
}

function checkClass() {
    if (mcButton.classList.contains('de-active')) {
        mcButton.classList.remove('de-active');
        mcButton.classList.add('active');
        mrButton.classList.remove('de-active');
        mrButton.classList.add('active');
        mDrop.classList.remove('de-active')
        mDrop.classList.add('active')
    }

    if (!memorySection.querySelector('ul')) {
        mcButton.classList.remove('active');
        mcButton.classList.add('de-active');
        mrButton.classList.remove('active');
        mrButton.classList.add('de-active');
        mDrop.classList.remove('active')
        mDrop.classList.add('de-active')
    }


}


export function msFunc() {
    alert('hello')
}
function mDropFunc() {

}


modes.addEventListener('click', (e) => {

    switch (e.target.classList[0]) {
        case 'mc':
            if (e.target.classList[1] === 'de-active') return
            mcFunc()
            break;
        case 'mr':
            if (e.target.classList[1] === 'de-active') return
            mrFunc()
            break;
        case 'm-plus':
            mPlusFunc(mainDisplay.innerHTML)
            break;
        case 'm-minus':
            mMinusFunc(mainDisplay.innerHTML)
            break;
        case 'ms':
            msFunc()
            break;
        case 'm':
            mDropFunc()
            break;
    }
})


trashButton.addEventListener('click', () => {
    mcFunc()

})