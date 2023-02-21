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
    yearList: es6Arr,
    selectYear: 0,
    moneyList: TYPE_LIST.slice(0, 2),
    selectM: 1, //利率方式
    interestList: INTEREST_LIST,
    selectInt: 4,
    lpr: '',
  },
  bindPickerChange({ detail: { value }, target: { dataset } }) {
    // console.log(value, dataset);
    switch (dataset.type) {
      case '3':
        this.setData({
          selectPercent: value,
        });
        break;
      case '2':
        const { interestList } = this.data;
        this.setData({
          selectInt: value,
          lpr: interestList[value].value,
        });
        break;
      case '1':
        this.setData({
          selectM: Number(value),
        });
        break;
      case '0':
        this.setData({
          selectYear: value,
        });
        break;
      default:
        break;
    }
  },
});
