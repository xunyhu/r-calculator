Page({
  data: {
    titleList: ["等额本息", "等额本金"],
    activeIdex: 0,
    money: "",
    arrList: [],
  },
  onLoad(option) {
    const eventChannel = this.getOpenerEventChannel();
    const _this = this;
    try {
      eventChannel.on("acceptDataFromOpenerPage", function (data) {
        // console.log(data);
        _this.setData({ ...data });
        wx.nextTick(() => {
          _this.handleList();
        });
      });
    } catch {
      _this.setData({ inputMoney: 174, year: 30, lpr: 5.05 });
      wx.nextTick(() => {
        _this.handleList();
      });
    }
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
  /*
   求出一个这样的数组
    [
      {
        期数：，
        月供金额：，
        月供本金： ，
        月供利息：，
        剩余本金：，
      }
    ]
  */
  handleList() {
    const { inputMoney, year, lpr } = this.data;
    //等额本息的计算公式： 每月还款金额 ＝ [贷款本金x月利率x（1+月利率）^ 还款月数]/[(1+月利率）^还款月数）-1]
    //等额本息， 月供金额一样。
    let allMoney = inputMoney * 10000;
    const monthly = lpr / 100 / 12;
    const allMonth = year * 12;

    let month_j =
      allMoney *
      ((monthly * Math.pow(1 + monthly, allMonth)) /
        (Math.pow(1 + monthly, allMonth) - 1));
    // console.log("月供金额：", month_j);
    let allLx = (month_j * allMonth - allMoney) / 10000;
    month_j = month_j.toFixed(2);
    this.setData({
      money: month_j,
      interest: allLx.toFixed(2),
    });

    let arrList = [];
    for (let i = 0; i < allMonth; i++) {
      /**
       * 月供利息: 贷款金额（本金） * 年利率 / 12
       * 月供本金: 月供 - 月供利息
       * 剩余本金：本金 - 月供本金
       */
      let month_i = allMoney * monthly;
      let month_b = month_j - month_i;
      allMoney = allMoney - month_b;
      let item = {
        id: i + 1,
        month_j,
        month_i: month_i.toFixed(2),
        month_b: month_b.toFixed(2),
        remain_m: allMoney.toFixed(2),
      };
      arrList.push(item);
    }
    this.setData({
      arrList,
    });
  },
  handleAverageList() {
    //等额本金的： 每月还款金额＝（贷款本金/还款月数）＋（贷款本金－已归还本金累计额）×月利率
    //等额本金，月供本金一样
    const { inputMoney, year, lpr } = this.data;
    let allMoney = inputMoney * 10000;
    let allMonth = year * 12;
    let hasMoney = 0; //已归还本金
    const monthly = lpr / 100 / 12; //月利率
    const month_b = allMoney / allMonth; //月供本金
    const month_dec = (month_b * monthly).toFixed(2); //每月递减金额

    let arrList = [];
    let allLx = 0;
    for (let i = 0; i < allMonth; i++) {
      const remain_m = allMoney - hasMoney;
      const month_j = allMoney / allMonth + remain_m * monthly; //月供总金额
      const month_i = remain_m * monthly; //月供利息
      const item = {
        id: i + 1,
        month_j: month_j.toFixed(2),
        month_b: month_b.toFixed(2),
        month_i: month_i.toFixed(2),
        remain_m: remain_m.toFixed(2),
      };
      arrList.push(item);
      hasMoney += month_b;
      allLx += month_i;
    }
    this.setData({
      arrList,
      month_dec,
      money: arrList[0].month_j,
      interest: (allLx / 10000).toFixed(2),
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
