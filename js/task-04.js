let counterValue = 0;
const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
}

const onClickDecrementBtn = (event) => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
  };
  
  const onClickIncrementBtn = (event) => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
  };
  
  refs.decrementBtn.addEventListener('click', onClickDecrementBtn);
  refs.incrementBtn.addEventListener('click', onClickIncrementBtn);
