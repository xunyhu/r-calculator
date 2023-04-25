//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: wx.getUserProfile,
    iconList: [
      {
        type: "calc",
        imgUrl: "../../assets/calc-icon.png",
        name: "贷款计算",
      },
      {
        type: "early",
        imgUrl: "../../assets/money-icon.png",
        name: "提前还款",
      },
      // {
      //   type: "interest",
      //   imgUrl: "../../assets/money-icon.png",
      //   name: "复利计算",
      // },
      // {
      //   type: "calc",
      //   imgUrl: "../../assets/calc-icon.png",
      //   name: "工资计算",
      // },
      // {
      //   type: "calc",
      //   imgUrl: "../../assets/calc-icon.png",
      //   name: "奖金计算",
      // },
      {
        type: "ui",
        imgUrl: "../../assets/ui-icon.png",
        name: "UI框架",
      },
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  handleClick({ currentTarget: { dataset } }) {
    let url = "";
    switch (dataset.type) {
      case "calc":
        url = "/pages/calculator/calculator";
        break;
      case "early":
        url = "/pages/early_repay/index";
        break;
      case "interest":
        url = "/pages/Interest/Interest";
        break;
      case "ui":
        url = "/pages/Uiframe/Uiframe";
        break;
      default:
        return;
    }
    wx.navigateTo({ url });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      success: (res) => {
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },

  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
