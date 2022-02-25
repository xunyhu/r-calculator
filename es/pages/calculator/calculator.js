// pages/calculator/calculator.js

const es6Arr = Array.from(new Array(30).keys())
  .map((item) => item + 1)
  .reverse();
// console.log(new Array(30))
// console.log(es6Arr);
const es5Arr = Object.keys(Array.apply(null, { length: 30 }));
// console.log(es5Arr) //得到一个字符串类型的数组

const es5Arr2 = Object.keys(Array.apply(null, { length: 30 })).map(function (
  item
) {
  return Number(Number(item) + 1) + "年";
});
// console.log(es5Arr2)

const TITLE_LIST = ["商业贷款", "组合贷款", "公积金贷款"];
const TYPE_LIST = ["按LPR", "自定义", "按旧版基准利率"];
const INTEREST_LIST = [
  {
    value: 3.85,
    text: "3.85%（LPR+0基点）",
  },
  {
    value: 3.25,
    text: "3.25%（公积金利率）",
  },
  {
    value: 4.15,
    text: "4.15%（LPR+30基点）",
  },
  {
    value: 4.45,
    text: "4.45%（LPR+60基点）",
  },
  {
    value: 5.05,
    text: "5.05%（LPR+120基点）",
  },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    titleList: TITLE_LIST.slice(0, 1),
    activeIdex: 0,
    radioList: [
      {
        value: 0,
        name: "按贷款总额",
      },
      {
        value: 1,
        name: "按商品总价",
      },
    ],
    radioChecked: 0,
    inputMoney: "",
    yearList: es6Arr,
    selectYear: 0,
    moneyList: TYPE_LIST.slice(0, 2),
    selectM: 0,
    interestList: INTEREST_LIST,
    selectInt: 4,
    lpr: INTEREST_LIST[4].value,
    houseMoney: "", //房屋总价
    dkMoney: 7, //贷款比例
  },

  handleInput({ detail: { value }, target: { dataset } }) {
    switch (dataset.type) {
      case "houseMoney":
        value &&
          this.setData({
            houseMoney: value,
            inputMoney: (value * (this.data.dkMoney / 10)).toFixed(2),
          });
        break;
      case "dkMoney":
        value &&
          this.setData({
            dkMoney: value,
            inputMoney: (this.data.houseMoney * (value / 10)).toFixed(2),
          });
        break;
      case "lpr":
        value &&
          this.setData({
            lpr: value,
          });
        break;
      default:
        value &&
          this.setData({
            inputMoney: value,
          });
        break;
    }
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

  bindPickerChange({ detail: { value }, target: { dataset } }) {
    // console.log(value, dataset);
    switch (dataset.type) {
      case "2":
        const { interestList } = this.data;
        this.setData({
          selectInt: value,
          lpr: interestList[value].value,
        });
        break;
      case "1":
        this.setData({
          selectM: Number(value),
        });
        break;
      case "0":
        this.setData({
          selectYear: value,
        });
        break;
      default:
        break;
    }
  },

  handleCalc() {
    const { inputMoney, yearList, selectYear, lpr } = this.data;
    if (!this.data.inputMoney || !this.data.lpr) {
      wx.showToast({
        title: `请输入贷款${this.data.inputMoney ? "利率" : "金额"}`,
        icon: "none",
      });
      return;
    }
    wx.navigateTo({
      url: "/pages/calculator/result",
      success: function (res) {
        res.eventChannel.emit("acceptDataFromOpenerPage", {
          inputMoney,
          year: yearList[selectYear],
          lpr,
        });
      },
    });
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
