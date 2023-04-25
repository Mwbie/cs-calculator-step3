export const historySection = document.querySelector('#history-section');
export const historyMsg = document.querySelector('#history-msg')
export let historyArray = []
const historyIcon = document.querySelector('.right-side')
export const historyTrash = document.querySelector('#history-trash')
const mTrash = document.querySelector('#memory-trash');
export function showHistory(historyList) {


      if (historyList.length === 0) {
        historyMsg.innerHTML = `There's no history yet`;
      } else {
        let calcItem = historyList[0];
        let numbers = calcItem.numbers;
        let operators = calcItem.operators;
        let result = historyList[1];
          let historyItem = `
            <ul   class = 'hover'>
              <li>
                <p>
                  ${numbers[0]} ${operators[0]} ${numbers[1]}`;
    
          for (let j = 1; j < operators.length; j++) {
            historyItem += ` ${operators[j]} ${numbers[j+1]}`;
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


historyIcon.addEventListener('click',()=>{
historySection.style.display = 'block'
historySection.style.zIndex = 1000

})

historyTrash.addEventListener('click',()=>{
  historySection.innerHTML = ''
  historyTrash.style.display = 'none'
  historyMsg.innerHTML = `There's no history yet`
  historyArray = []
})