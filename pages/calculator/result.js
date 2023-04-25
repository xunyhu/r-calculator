import { averageInterest, averagePrincipal } from '../../common/calc.js';

Page({
  data: {
    titleList: ['等额本息', '等额本金'],
    activeIdex: 0,
    money: '',
    arrList: [],
  },
  onLoad(option) {
    // const eventChannel = this.getOpenerEventChannel();
    // const _this = this;
    // try {
    //   eventChannel.on("acceptDataFromOpenerPage", function (data) {
    //     // console.log(data);
    //     _this.setData({ ...data });
    //     wx.nextTick(() => {
    //       _this.handleList();
    //     });
    //   });
    // } catch {
    //   _this.setData({ inputMoney: 174, year: 30, lpr: 5.05 });
    //   wx.nextTick(() => {
    //     _this.handleList();
    //   });
    // }
    // console.log(option)
    this.setData(option, () => {
      this.handleList();
    });
  },
  onPageScroll(e) {
    if (e.scrollTop > 343) {
      if (e.scrollTop > 1000) {
        !this.data.showTopIcon &&
          this.setData({
            showTopIcon: true,
          });
      } else {
        this.data.showTopIcon &&
          this.setData({
            showTopIcon: false,
          });
      }
      !this.data.fixTop &&
        this.setData({
          fixTop: true,
        });
    } else {
      this.data.fixTop &&
        this.setData({
          fixTop: false,
        });
    }
  },
  handleList() {
    const { inputMoney, year, lpr } = this.data;
    const { month_j, allInterest, arrList } = averageInterest(inputMoney, lpr, year);
    this.setData({
      money: month_j,
      interest: (allInterest / 10000).toFixed(2),
      arrList,
    });
  },
  handleAverageList() {
    const { inputMoney, year, lpr } = this.data;
    const { arrList, month_dec, allInterest } = averagePrincipal(inputMoney, lpr, year);
    this.setData({
      arrList,
      month_dec,
      money: arrList[0].month_j,
      interest: (allInterest / 10000).toFixed(2),
    });
  },
  handleTabs({ currentTarget: { dataset } }) {
    this.setData({
      activeIdex: dataset.type,
    });
    if (dataset.type === 1) {
      this.handleAverageList();
    } else {
      this.handleList();
    }
  },
  handleTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    });
  },
});
