class Utils {
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  // 获取值类型
  getValType(value) {
    const result = Object.prototype.toString.call(value);
    let target = '';
    switch (result) {
      case '[object Null]':
        target = 'null';
        break;
      case '[object Undefined]':
        target = 'undefined';
        break;
      case '[object String]':
        target = 'string';
        break;
      case '[object Number]':
        target = 'number';
        break;
      case '[object Object]':
        target = 'object';
        break;
      case '[object Array]':
        target = 'array';
        break;
      case '[object Function]':
        target = 'function';
        break;
      // no default
    }
    return target;
  }
  //将对象拼接成字符串
  objToStr(obj) {
    let str = '';
    for (let s in obj) {
      if (obj[s]) {
        str += `${s}=${obj[s]}&`;
      }
    }
    return str.slice(0, -1);
  }
}

const utils = new Utils();

export { Utils, utils };
