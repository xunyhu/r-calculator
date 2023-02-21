const es6Arr = Array.from(new Array(30).keys())
  .map((item) => item + 1)
  .reverse();
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

const yearArr = Array.from(new Array(70).keys()).map((item) => item + 2000);
const monthArr = Array.from(new Array(12).keys()).map((item) => item + 1);

Page({
  data: {
    radioList: [
      {
        value: 0,
        name: "等额本息",
      },
      {
        value: 1,
        name: "等额本金",
      },
    ],
    radioChecked: 0,
    radioList2: [
      {
        value: 0,
        name: "一次结清",
      },
      {
        value: 1,
        name: "部分结清",
      },
    ],
    radioChecked2: 0,
    yearList: es6Arr,
    selectYear: 0,
    moneyList: TYPE_LIST.slice(0, 2),
    selectM: 1, //利率方式
    interestList: INTEREST_LIST,
    selectInt: 4,
    lpr: "5.05",
    earlyYearList: yearArr,
    fristYearIdx: 0,
    earlyYearIdx: 0,
    earlyMonthList: monthArr,
    fristMonthIdx: 0,
    earlyMonthIdx: 0,
    inputMoney: "174", //原贷款金额
  },
  onLoad() {
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    this.setData({
      fristYearIdx: yearArr.findIndex((item) => item === 2020),
      earlyYearIdx: yearArr.findIndex((item) => item === nowYear),
      earlyMonthIdx: monthArr.findIndex((item) => item === nowMonth),
    });
  },
  /** 点击结算 */
  handleCalc() {},
  handleInput({ detail: { value }, target: { dataset } }) {
    switch (dataset.type) {
      case "houseMoney":
        value &&
          this.setData({
            houseMoney: value,
            inputMoney: (
              value *
              ((10 - Number(this.data.selectPercent)) / 10)
            ).toFixed(2),
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
  bindPickerChange({ detail: { value }, target: { dataset } }) {
    // console.log(value, dataset);
    switch (dataset.type) {
      case "3":
        this.setData({
          selectPercent: value,
        });
        break;
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
});
