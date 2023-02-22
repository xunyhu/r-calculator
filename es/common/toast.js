import { Utils } from './utils.js';

class Message extends Utils {
  constructor() {
    super();
  }
  toast(config) {
    if (!config) return;
    const toastConfig = {
      title: '',
      mask: false,
      duration: 3000,
    };
    if (this.getValType(config) === 'string') {
      wx.showToast({
        ...toastConfig,
        icon: 'none',
        title: config,
      });
    } else {
      wx.showToast({
        ...toastConfig,
        ...config,
      });
    }
  }
  hideToast() {
    wx.hideToast();
  }
}

const message = new Message();

export default message;
