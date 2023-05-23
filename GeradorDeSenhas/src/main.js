import { nanoid } from 'nanoid';

const btn = document.querySelector('button');
const display = document.querySelector('h2');

btn.addEventListener('click', () => {
  const randomPassword = nanoid();
  display.innerHTML = randomPassword;
});
