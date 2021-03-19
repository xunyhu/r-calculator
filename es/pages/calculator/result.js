Page({
  data: {
    titleList: ["等额本息", "等额本金"],
    activeIdex: 0,
  },
  handleTabs({ currentTarget: { dataset } }) {
    this.setData({
      activeIdex: dataset.type
    });
  },
});
