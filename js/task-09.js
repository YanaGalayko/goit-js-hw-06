function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  textColor: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  body: document.body,
}

refs.changeColorBtn.addEventListener('click', changeColor);

function changeColor () {
  refs.textColor.textContent = refs.body.style.backgroundColor = getRandomHexColor();
};
