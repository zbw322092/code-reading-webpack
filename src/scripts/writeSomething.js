import join from 'lodash/join';
import '../stylesheets/style.css';
// import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
};

async function writeSomething() {

  const element = document.createElement('div');
  const btn = document.createElement('button');
  const elementMath = document.createElement('div');

  element.innerHTML = join(['hello,', 'webpack'], ' ');
  element.classList.add('hello');

  const printMe = await import('./print.js');
  console.log('printMe: ', printMe);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = e => import('./print.js').then(module => {
    var print = module.default;
    print();
  });

  elementMath.innerHTML = cube(5);

  element.appendChild(btn);
  element.appendChild(elementMath);

  return element;
}

writeSomething().then((element) => {
  document.body.appendChild(element);
});


if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');

    document.body.removeChild(element);
    element = writeSomething();
    document.body.appendChild(element);
  });
}