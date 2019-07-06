/**
 * 2019-07-06 添加一个通用模块
 */
import { cube } from './math';
function component() {
  var element = document.createElement('div');
  element.innerHTML = [
    'Hello webpack',
    '5 cube is equal to' + cube(5)
  ].join('\n\n');
  return element;
}
document.body.appendChild(component());
