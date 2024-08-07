// pages/Uiframe/Uiframe.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        appid: "wx92269e3b2f304afc",
        name: "WeUI WXSS",
      },
      {
        appid: "wx307a52ca028d3c07",
        name: "iView Weapp",
      },
      // {
      //   appid: "wx7e6132bf84d4cb61",
      //   name: "ZanUI Weapp",
      // },
      {
        appid: "wxf034a0b7cc38d24d",
        name: "Wux Weapp",
      },
      {
        appid: "wx1163151b9383ce2b",
        name: "Mini UI",
      },
      {
        appid: "wxfd5241d66a07713f",
        name: "Color UI",
      },
      {
        appid: "wxdcec05d9a27f9064",
        name: "Lin UI",
      },
    ],
  },

  handleClick({ currentTarget: { dataset } }) {
    wx.navigateToMiniProgram({ appId: dataset.appid });
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
