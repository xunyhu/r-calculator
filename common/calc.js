/**
 * 计算等额本息每月还款金额
 * 等额本息， 月供金额一样。计算公式： 每月还款金额 ＝ [贷款本金x月利率x（1+月利率）^ 还款月数]/[(1+月利率）^还款月数）-1]
 * @param loan_money 贷款金额 {String}
 * @param loan_lpy  贷款利率 {String}
 * @param loan_year 贷款年限 {String}
 * @param early_m 提前还贷传入，已还款月数 {String}
 */
const averageInterest = (loan_money, loan_lpy, loan_year, early_m = 0) => {
  const allMoney = loan_money * 10000;
  const monthly = loan_lpy / 100 / 12;
  const allMonth = loan_year * 12 - Number(early_m);
  const month_j =
    allMoney *
    ((monthly * Math.pow(1 + monthly, allMonth)) / (Math.pow(1 + monthly, allMonth) - 1));
  // console.log("月供金额：", month_j);
  const allInterest = month_j * allMonth - allMoney;

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
  let arrList = [],
    dkMoney = allMoney;
  for (let i = 0; i < allMonth; i++) {
    /**
     * 月供利息: 贷款金额（本金） * 年利率 / 12
     * 月供本金: 月供 - 月供利息
     * 剩余本金：本金 - 月供本金
     */
    let month_i = dkMoney * monthly;
    let month_b = month_j - month_i;
    dkMoney = dkMoney - month_b;
    let item = {
      id: i + 1,
      month_j: month_j.toFixed(2),
      month_i: month_i.toFixed(2), //利息
      month_b: month_b.toFixed(2), //本金
      remain_m: dkMoney.toFixed(2),
    };
    arrList.push(item);
  }
  return {
    month_j: month_j.toFixed(2), //月供金额
    allMoney, //总还款本金
    monthly, //月利率
    allMonth, //总还款期数
    allInterest, //总利息
    arrList, //月供明细列表
  };
};

/**
 * 等额本金，月供本金一样。计算公式： 每月还款金额＝（贷款本金/还款月数）＋（贷款本金－已归还本金累计额）×月利率
 * @param {*} loan_money
 * @param {*} loan_lpy
 * @param {*} loan_year
 * @returns
 */
const averagePrincipal = (loan_money, loan_lpy, loan_year, early_m = 0) => {
  let allMoney = loan_money * 10000;
  let allMonth = loan_year * 12 - Number(early_m);
  let hasMoney = 0; //已归还本金
  const monthly = loan_lpy / 100 / 12; //月利率
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
  return {
    arrList,
    month_dec, //每月递减金额
    allInterest: allLx, //总利息
    allMoney,
    month_j: arrList[0].month_j,
  };
};

/**
 * 格式化金额展示
 * @param {string} num
 */
const formatNum = num => {
  num = Number(num);
  // console.log(num);
  const unit = 1000,
    unitStr = ',000';
  let res = num / unit;
  if (res === 0 || res === 1) {
    return res + unitStr;
  } else if (res > unit) {
    if (res % 1 === 0) {
      res = formatNum(res) + unitStr;
    } else {
      res = formatNum(parseInt(res)) + ',' + (res - parseInt(res)).toFixed(3).split('.')[1];
    }
    return res;
  } else if (res > 1) {
    if (res % 1 === 0) {
      res = res + unitStr;
    } else {
      res = parseInt(res) + ',' + (res - parseInt(res)).toFixed(3).split('.')[1];
    }
    return res;
  } else {
    return res;
  }
};

export { averageInterest, averagePrincipal, formatNum };
