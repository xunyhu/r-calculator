// pages/early_repay/result.js
import { averageInterest, averagePrincipal, formatNum } from '../../common/calc';
import { utils } from '../../common/utils';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    allMoney: '',
    allInterest: '',
    hasPayMoney: '',
    hasPayPrincipal: '',
    hasPayInterest: '',
    saveInterest: '',
    nowMounthPay: '',
    partEarly: false,
    earlyDay: '', //新的最后还款期
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('options', options);
    console.log('options-str', utils.objToStr(options));
    if (options?.etype === '1') {
      this.setData({
        partEarly: true,
      });
      return this.handlePartEarly(options);
    }
    const { m, l, y, am, dtype } = options;
    const alreadyMonth = am;
    const { month_j, allMoney, arrList, allInterest } =
      dtype === '0' ? averageInterest(m, l, y) : averagePrincipal(m, l, y);
    const allPayList = arrList.slice(0, alreadyMonth);
    const nowMonthList = arrList[alreadyMonth];
    const { remain_m, month_i } = nowMonthList;
    const hasPayInterest = allPayList.reduce((prev, current) => {
      return prev?.month_i ? Number(prev.month_i) : prev + Number(current.month_i);
    }, 0);
    const hasPayPrincipal = allPayList.reduce((prev, current) => {
      return prev?.month_b ? Number(prev.month_b) : prev + Number(current.month_b);
    }, 0);
    const hasPayMoney = dtype === '0' ? month_j * alreadyMonth : hasPayInterest + hasPayPrincipal;
    const saveInterest = allInterest - hasPayInterest - month_i;
    const nowMonthPay = Number(remain_m) + Number(month_j);
    this.setData({
      allMoney: formatNum(parseInt(allMoney)),
      allInterest: formatNum(parseInt(allInterest)),
      hasPayMoney: formatNum(parseInt(hasPayMoney)),
      hasPayPrincipal: formatNum(parseInt(hasPayPrincipal)),
      hasPayInterest: formatNum(parseInt(hasPayInterest)),
      saveInterest: formatNum(parseInt(saveInterest)),
      nowMounthPay: formatNum(parseInt(nowMonthPay)),
    });
  },
  //提前部分还款
  handlePartEarly(options) {
    const { m, l, y, am, dtype, emoney } = options;
    const alreadyMonth = Number(am);
    const { month_j, allMoney, arrList, allInterest } =
      dtype === '0' ? averageInterest(m, l, y) : averagePrincipal(m, l, y);
    const allPayList = arrList.slice(0, alreadyMonth);
    const nowMonthList = arrList[alreadyMonth];
    console.log('nowMonthList', nowMonthList);
    const { remain_m, month_i } = nowMonthList;
    const hasPayInterest = allPayList.reduce((prev, current) => {
      return prev?.month_i ? Number(prev.month_i) : prev + Number(current.month_i);
    }, 0);
    const hasPayPrincipal = allPayList.reduce((prev, current) => {
      return prev?.month_b ? Number(prev.month_b) : prev + Number(current.month_b);
    }, 0);
    const hasPayMoney = dtype === '0' ? month_j * alreadyMonth : hasPayInterest + hasPayPrincipal;

    const unit = 10000;
    const nowMonthPay = Number(month_j) + Number(emoney) * unit;
    const new_remain_m = (remain_m - Number(emoney) * unit) / unit;
    //新的月供
    const {
      month_j: new_month_j,
      allInterest: new_allInterest,
      month_dec,
    } = dtype === '0'
      ? averageInterest(new_remain_m, l, y, alreadyMonth + 1)
      : averagePrincipal(new_remain_m, l, y, alreadyMonth + 1);
    const saveInterest = allInterest - hasPayInterest - month_i - new_allInterest;
    console.log('saveInterest', saveInterest);
    this.setData({
      allMoney: formatNum(parseInt(allMoney)),
      allInterest: formatNum(parseInt(allInterest)),
      hasPayMoney: formatNum(parseInt(hasPayMoney)),
      hasPayPrincipal: formatNum(parseInt(hasPayPrincipal)),
      hasPayInterest: formatNum(parseInt(hasPayInterest)),
      nowMounthPay: formatNum(parseInt(nowMonthPay)),
      newMonthPay: formatNum(parseInt(new_month_j)),
      saveInterest: formatNum(parseInt(saveInterest)),
      month_dec,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
