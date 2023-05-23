import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const btn = document.querySelector('button');
const display = document.querySelector('h2');

btn.addEventListener('click', () => {
  const randomPassword = nanoid();
  display.innerHTML = randomPassword;
});

display.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
