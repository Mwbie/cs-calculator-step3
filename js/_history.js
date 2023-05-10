export const historySection = document.querySelector('#history-section');
export const historyMsg = document.querySelector('#history-msg')
export let historyArray = []
export const historyTrash = document.querySelector('#history-trash')
const historyIcon = document.querySelector('.history-icon')
const historyButton = document.querySelector('#history')
const memoryButton = document.querySelector('#memory')
const numbers = document.querySelector('.numbers')
const history = document.querySelector('.history')


export function showHistory(historyList) {
  if (historyList.length === 0) {
    historyMsg.innerHTML = `There's no history yet`;
  } else {
    let calcItem = historyList[0];
    let numbers = calcItem.numbers;
    let operators = calcItem.operators;
    let result = historyList[1];
    let historyItem = `
            <ul   class = 'history-hover'>
              <li>
                <p>
                  ${numbers[0]} ${operators[0]} ${numbers[1]}`;

    for (let j = 1; j < operators.length; j++) {
      historyItem += ` ${operators[j]} ${numbers[j + 1]}`;
    }

    historyItem += ` = <span>${result}</span></p>
              </li>
            </ul>`;


    historySection.insertAdjacentHTML("afterbegin", historyItem);

    historyMsg.innerHTML = '';
  }
  historyTrash.style.display = 'block'
  historyArray = []
};
export function singleOpHistory(historyList) {
  console.log(historyList);
  if (historyList.length === 0) {
    historyMsg.innerHTML = `There's no history yet`;
  } else {
    let fistNumber = historyList[0];
    let result = historyList[1];
    let op = historyList[2];
    let historyItem = `
            <ul   class = 'history-hover'>
              <li>
                <p>
                  ${op}  (${fistNumber}) =
               <span>${result}</span></p>
              </li>
            </ul>`;


    historySection.insertAdjacentHTML("afterbegin", historyItem);

    historyMsg.innerHTML = '';
  }
  historyTrash.style.display = 'block'
  historyArray = []
}

historyIcon.addEventListener('click', () => {
  historySection.style.display = 'block'
  historySection.style.zIndex = 1000

})

historyTrash.addEventListener('click', () => {
  historySection.innerHTML = ''
  historyTrash.style.display = 'none'
  historyMsg.innerHTML = `There's no history yet`
  historyArray = []
})


historyIcon.addEventListener('click', () => {
  numbers.style.display = 'none'
  history.style.display = 'block'
  historyButton.style.display = 'none'
  historyButton.click();
  memoryButton.style.display = 'none'
  window.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'result') {
      numbers.style.display = 'flex'
      history.style.display = 'none'
    }
  })
})
window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia("(max-width: 500px)")

  if (mediaQuery.matches) {
    history.style.gridArea = 'button'
    history.style.display = 'none'

    historyButton.style.display = 'none'
    memoryButton.style.display = 'none'

  } else {

    numbers.style.display = 'flex'
    history.style.gridArea = 'history'
    history.style.display = 'block'
    historyButton.style.display = 'inline'
    memoryButton.style.display = 'inline'
  }
})

