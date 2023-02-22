import { averageInterest } from '../../common/calc';
import message from '../../common/toast';

const es6Arr = Array.from(new Array(30).keys())
  .map(item => item + 1)
  .reverse();
const TYPE_LIST = ['按LPR', '自定义', '按旧版基准利率'];
const INTEREST_LIST = [
  {
    value: 3.85,
    text: '3.85%（LPR+0基点）',
  },
  {
    value: 3.25,
    text: '3.25%（公积金利率）',
  },
  {
    value: 4.15,
    text: '4.15%（LPR+30基点）',
  },
  {
    value: 4.45,
    text: '4.45%（LPR+60基点）',
  },
  {
    value: 5.05,
    text: '5.05%（LPR+120基点）',
  },
];

const yearArr = Array.from(new Array(70).keys()).map(item => item + 2000);
const monthArr = Array.from(new Array(12).keys()).map(item => item + 1);

Page({
  data: {
    radioList: [
      {
        value: 0,
        name: '等额本息',
      },
      {
        value: 1,
        name: '等额本金',
      },
    ],
    radioChecked: 0,
    radioList2: [
      {
        value: 0,
        name: '一次结清',
      },
      {
        value: 1,
        name: '部分结清',
      },
    ],
    radioChecked2: 1,
    radioList3: [
      {
        value: 0,
        name: '减少月供',
      },
      {
        value: 1,
        name: '减少还款期',
      },
    ],
    radioChecked3: 0,
    yearList: es6Arr,
    selectYear: 0,
    dkYear: es6Arr[0],
    moneyList: TYPE_LIST.slice(0, 2),
    selectM: 1, //利率方式
    interestList: INTEREST_LIST,
    selectInt: 4,
    lpr: '5.05',
    earlyYearList: yearArr,
    fristYear: yearArr[0],
    earlyYear: yearArr[0],
    earlyMonthList: monthArr,
    fristMonth: monthArr[0],
    earlyMonth: monthArr[0],
    inputMoney: '174', //原贷款金额
    inputMoney2: '', //提前还贷金额
  },
  onLoad() {
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    const fristIndex = yearArr.findIndex(item => item === 2021);
    const earlyYidx = yearArr.findIndex(item => item === nowYear);
    const earlyMidx = monthArr.findIndex(item => item === nowMonth);
    this.setData({
      fristYear: yearArr[fristIndex],
      earlyYear: yearArr[earlyYidx],
      earlyMonth: monthArr[earlyMidx],
    });
  },
  /** 点击结算 */
  handleCalc() {
    const {
      inputMoney,
      lpr,
      dkYear,
      fristYear,
      fristMonth,
      earlyYear,
      earlyMonth,
      radioChecked,
      radioChecked2,
      radioChecked3,
      inputMoney2,
    } = this.data;
    if (earlyYear < fristYear || (earlyYear === fristYear && earlyMonth <= fristMonth)) {
      return message.toast('提前还款时间需要晚于首次还款时间');
    }
    if (radioChecked2 === 1 && !inputMoney2) {
      return message.toast('请输入提前还款金额');
    }
    /**
     * eslint
     * 代码引用错误提示
     * js\css格式化
     */
    const alreadyMonth = (+earlyYear - +fristYear) * 12 + +earlyMonth - +fristMonth;
    let params = `?m=${inputMoney}&l=${lpr}&y=${dkYear}&am=${alreadyMonth}&dtype=${radioChecked}`;
    if (radioChecked2 === 1) {
      params = `${params}&etype=${radioChecked2}&emoney=${inputMoney2}&edtype=${radioChecked3}`;
    }
    wx.navigateTo({
      url: `/pages/early_repay/result${params}`,
    });
  },
  radioChange({ detail: { value }, target: { dataset } }) {
    switch (dataset.type) {
      case '1':
        this.setData({
          radioChecked: Number(value),
        });
        break;
      case '2':
        this.setData({
          radioChecked2: Number(value),
        });
        break;
      case '3':
        this.setData({
          radioChecked3: Number(value),
        });
        break;
      default:
        break;
    }
  },
  handleInput({ detail: { value }, target: { dataset } }) {
    switch (dataset.type) {
      case 'lpr':
        value &&
          this.setData({
            lpr: value,
          });
        break;
      case 'early':
        value &&
          this.setData({
            inputMoney2: value,
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
    const { yearList, earlyYearList, earlyMonthList } = this.data;
    switch (dataset.type) {
      case '0':
        this.setData({
          dkYear: yearList[value],
        });
        break;
      case '1':
        this.setData({
          fristYear: earlyYearList[value],
        });
        break;
      case '2':
        this.setData({
          fristMonth: earlyMonthList[value],
        });
        break;
      case '3':
        this.setData({
          earlyYear: earlyYearList[value],
        });
        break;
      case '4':
        this.setData({
          earlyMonth: earlyMonthList[value],
        });
        break;
      default:
        break;
    }
  },
});
