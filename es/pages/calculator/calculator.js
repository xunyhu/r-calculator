// pages/calculator/calculator.js

const es6Arr = Array.from(new Array(30).keys())
  .map((item) => item + 1)
  .reverse();
// console.log(new Array(30))
console.log(es6Arr);
const es5Arr = Object.keys(Array.apply(null, { length: 30 }));
// console.log(es5Arr) //得到一个字符串类型的数组

const es5Arr2 = Object.keys(Array.apply(null, { length: 30 })).map(function (
  item
) {
  return Number(Number(item) + 1) + "年";
});
// console.log(es5Arr2)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["商业贷款", "组合贷款", "公积金贷款"],
    activeIdex: 0,
    radioList: [
      {
        value: 0,
        name: "按贷款总额",
      },
      {
        value: 1,
        name: "按房屋总价",
      },
    ],
    radioChecked: 0,
    yearList: es6Arr,
    selectYear: 0,
    moneyList: ["按LPR", "按旧版基准利率", "自定义"],
    selectM: 0,
    interestList: [
      {
        value: 3.85,
        text: "3.85%（LPR+0基点）",
      },
      {
        value: 4.15,
        text: "4.15%（LPR+30基点）",
      },
      {
        value: 4.45,
        text: "4.45%（LPR+60基点）",
      },
    ],
    selectInt: 0,
    selfInput: false, //是否自定义利率
  },

  handleTabs({ currentTarget: { dataset } }) {
    this.setData({
      // activeIdex: dataset.type
    });
  },

  radioChange({ detail: { value } }) {
    // console.log(value)
    this.setData({
      radioChecked: Number(value),
    });
  },

  bindPickerChange({ detail: { value }, target: { dataset }}) {
    console.log(value, dataset)
    if (Number(dataset.type) === 1) { //点的是利率方式选择框
      Number(value) === 2 && this.setData({
        selfInput: true,
      })
    }
  },

  handleCalc() {
    wx.navigateTo({ url: "/pages/calculator/result" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
