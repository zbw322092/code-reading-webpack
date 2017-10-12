import join from 'lodash/join';

function writeSomething () {

  const element = document.createElement('div');
  
  element.innerHTML = join(['hello,', 'webpack'], ' ');

  return element;
}

document.body.appendChild(writeSomething());