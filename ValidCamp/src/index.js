import validator from 'validator';

const inputText = document.querySelector('input');
const inputSelect = document.querySelector('select');
const buttonValidate = document.querySelector('button');
const saidaText = document.querySelector('#answer');
const UUIDVersion = 4;

buttonValidate.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(inputText.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputText.value),
    email: validator.isEmail(inputText.value),
    uuid: validator.isUUID(inputText.value, UUIDVersion),
    url: validator.isURL(inputText.value),
  };
  saidaText.innerHTML = `A validação retornou ${campos[inputSelect.value]}`;
});
