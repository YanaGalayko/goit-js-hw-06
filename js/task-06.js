const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length')

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur () {
 if (Number(dataLength) === Number(inputEl.value.length) && !inputEl.classList.contains('invalid')){
    inputEl.classList.add('valid')  
 } else if (Number(dataLength) === Number(inputEl.value.length) && inputEl.classList.contains('invalid')){
    inputEl.classList.replace('invalid', 'valid')
 } else {
    inputEl.classList.add('invalid')
 }
 };
