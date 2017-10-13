import join from 'lodash/join';
import '../stylesheets/style.css';
import printMe from './print.js';

function writeSomething () {

  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = join(['hello,', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;  

  element.appendChild(btn);  

  return element;
}

document.body.appendChild(writeSomething());