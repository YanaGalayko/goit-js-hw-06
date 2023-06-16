const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInputFrontSize)

function onInputFrontSize () {
    spanEl.style.fontSize = `${inputEl.value}px`
}
