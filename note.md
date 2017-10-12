[1]  
``` javascript
  import join from 'lodash/join';
  // vs
  let _ = require('lodash');
```
`bundle.js` will differnet a lot. Since `let _ = require('lodash');` include all `lodash` code.
<br>

[2]
``` javascript
function writeSomething () {
  let _ = require('lodash');

  const element = document.createElement('div');
  
  element.innerHTML = _.join(['hello,', 'webpack'], ' ');

  return element;
}

// document.body.appendChild(writeSomething());
```

In above example, although we do not execute `writeSomething`, all `lodash` code were bundled into `bundle.js`. `require` in `webpack` is not the sample as the `require` in `node.js`. The `require` in `webpack` cannot dynamic load module like the `require` in `node.js`.
<br>

[3]
> Note that `webpack` **will not** alter any code other than `import` and `export` statements. If you are using other `ES2015` features, make sure to use a transpiler such as `Babel` or `Bublé` via `webpack`'s loader system.

