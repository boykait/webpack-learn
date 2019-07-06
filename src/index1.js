import _ from 'lodash';
// import './style.css';  管理资源
// import Icon from './icon.svg'; 管理资源

import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 管理资源
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
