function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
   inputNumber: document.querySelector('[type="number"]'),
   createBtn: document.querySelector('button[data-create]'),
   destroyBtn: document.querySelector('button[data-destroy]'),
   divBoxes: document.getElementById('boxes'),
  }

refs.createBtn.addEventListener('click', () => {
  createBoxes(Number(refs.inputNumber.value));
});

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement('div');
    divElement.classList = 'item';
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = '30px';
    divElement.style.marginBottom = '30px';
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
  }
  return refs.divBoxes.append(...divArray);
}

refs.destroyBtn.addEventListener('click', destroyBoxesMarkup);

function destroyBoxesMarkup() {
  refs.inputNumber.value = '';
  return (refs.divBoxes.innerHTML = '');
}
